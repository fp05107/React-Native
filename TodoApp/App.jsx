import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const COLORS = {primary: '#1f145c', white: '#fff'};
const App = () => {
  const [textInput, setTextInput] = useState('');

  const [todos, setTodos] = useState([
    {id: 1, task: 'first todo'},
    {id: 2, task: 'first todo'},
    {id: 3, task: 'first todo'},
    {id: 4, task: 'first todo'},
  ]);

  useEffect(() =>{
    getTodosFromUserDevice();
  },[])

  useEffect(()=> {
    saveTodoTouserDevice();
  },[todos])

  const ListItem = ({todo}) => {
    return (
      <View style={styles.listItem}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: COLORS.primary,
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}>
            {todo?.task}
          </Text>
        </View>
        {!todo?.completed && (
          <TouchableOpacity
            style={styles.actionIcon}
            onPress={() => markTodoCompleted(todo?.id)}>
            <Icon name="done" size={20} color={COLORS.white} />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.actionIcon, {backgroundColor: 'red'}]}
          onPress={() => deleteTodo(todo?.id)}>
          <Icon name="delete" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    );
  };

  const saveTodoTouserDevice = async (todos) =>{
    try {
      const stringifyTodos = JSON.stringify(todos);
      await AsyncStorage.setItem('todos', stringifyTodos);
    } catch (error) {
      
    }
  }

  const getTodosFromUserDevice = async () =>{
    try {
      const todos = await AsyncStorage.getItem('todos');
      if(todos!= null){
        setTodos(JSON.parse(todos));
      }
    } catch (error) {
      
    }

  }

  const addTodo = () => {
    if (textInput == '') {
      Alert.alert('Error', 'Please Input todo');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTextInput('');
    }
  };

  const markTodoCompleted = todoId => {
    const newTodos = todos.map(item => {
      if (item.id == todoId) {
        return {...item, completed: true};
      }
      return item;
    });
    setTodos(newTodos);
  };

  const deleteTodo = todoId => {
    const newTodos = todos.filter(item => item.id != todoId);
    setTodos(newTodos);
  };

  const clearTodos = () =>{
    Alert.alert("Confirm","Clear Todos?",[
      {
        text: 'Yes',
        onPress: () => setTodos([])
      },
      {
        text: 'No'
      },
    ])
    setTodos([]);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: COLORS.primary}}>
          TODO APP
        </Text>
        <Icon name="delete" size={25} color="red" onPress={clearTodos} />
      </View>
      <FlatList
        data={todos}
        renderItem={({item}) => <ListItem todo={item} />}
      />
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add Todo"
            onChangeText={text => setTextInput(text)}
          />
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer}>
            <Icon name="add" color={COLORS.white} size={10}></Icon>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 30,
  },
  listItem: {
    padding: 20,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    color: COLORS.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 25,
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
