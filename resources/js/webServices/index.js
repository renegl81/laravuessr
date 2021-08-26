import axios from 'axios';

let webService = axios.create({
    baseURL: window.location.origin+'/app/api/',
});

export default webService;
