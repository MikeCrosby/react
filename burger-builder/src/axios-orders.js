import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-ea2e2.firebaseio.com/'
});

export default instance;