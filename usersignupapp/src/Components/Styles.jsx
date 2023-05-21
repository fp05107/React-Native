import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textBox: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
    margin: 10,
    marginBottom: 20,
    padding: 15,
    backgroundColor:'white'
  },
  selectItem: {
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    backgroundColor: 'white',
    overflow: 'visible',
    margin: 10,
    paddingBottom: 20,
    zIndex: 200,
    marginBottom: 20,
  },
  dropdownPicker: {
    flex: 1,
    opacity: 1,
    
  },
  dropDownStyle: {
    backgroundColor: 'lightgray',
    
  },
  btnStyle: {
    backgroundColor:'#00FFCA',
    borderRadius: 10,
    width: 200,
    alignSelf:'center',
    margin: 20,
    padding: 10,

  },
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#00FFCA',
  },
  tableBody:{
    backgroundColor:'#ADE4DB',
  },
  radioButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    margin:200,
    borderColor:'red'
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonText: {
    marginLeft: 8,
  },
  radioButton: {
    // Additional styles for the radio button if needed
    backgroundColor:'red',
    borderRadius: 50
  },
});

export default styles;
