import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // https://ubkinfotech.com/demo/edByss/api3/getAllPrevYear.php?page_offset=1
  // .get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
  const getUsers = () => {
    setIsLoading(true);
    axios
      .get(
        `https://ubkinfotech.com/demo/edByss/api3/getAllPrevYear.php?page_offset=${currentPage}`,
      )
      .then(res => {
        //setUsers(res.data.results);
        setUsers([...users, ...res.data]);
        console.log(res.data);
        console.log('====================');
        setIsLoading(false);
      });
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemWrapperStyle}>
        <Image style={styles.itemImageStyle} source={{uri: item.image}} />
        <View style={styles.contentWrapperStyle}>
          <Text style={styles.txtNameStyle}>{`${item.name} `}</Text>
          <Text>Set Year{item.set_year}</Text>
          <Text style={[styles.txtEmailStyle, {}]}> Views {item.views}</Text>
          <Text>Total Questions : {item.total_question}</Text>
        </View>
      </View>
    );
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return (
    <>
      <StatusBar backgroundColor="blue" />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name}_${index}`} // Generate a unique key based on the item's name and index
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
      />
    </>
  );
};

const styles = StyleSheet.create({
  itemWrapperStyle: {
    width:'90%',
    marginBottom:10,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: 'space-around',
  },
  txtNameStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtEmailStyle: {
    color: '#777',
    fontWeight:'bold'
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
});

export default App;
