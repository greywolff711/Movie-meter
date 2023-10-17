import axios from 'axios';

//For that annoying CORS thing
export default axios.create({
    baseURL: 'http://localhost:8080',
    headers: {"ngrok-skip-browser-warning": "true"}
});
