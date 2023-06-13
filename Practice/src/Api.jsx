import axios from "axios";

const albumPhotosUrl = `https://jsonplaceholder.typicode.com/posts`;

const getData = async () =>{
    try {
        let res = await axios.get(albumPhotosUrl);

    } catch (error) {
        console.log(error);
    }

}

export {getData};

/**<Image source={{uri='https://------'}}
 * />
 * 
 * 
 */