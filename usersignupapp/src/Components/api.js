import axios from 'axios';

// ipconfig
// json-server --host 0.0.0.0 db.json
// http://10.0.2.2:3000/users

// const URL = ` http://10.0.2.2:8080`;
const URL = `http://192.168.43.8:8080`;
// const URL = `http://192.168.46.128:3000`;

export const getData = async () => {
  try {
    const res = await fetch(`${URL}/users`);
    const data = res.data;
    return data;
  } catch (error) {}
};
 
export const postData = async (myObj) => {
  try {
    const response = await axios.post('http://192.168.43.8:3000', myObj);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};