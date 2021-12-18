import axios from 'axios';
import {dev} from '../constants/environment';

const Api = axios.create({
  baseURL: dev.api,
  timeout: 5000,
});

export default Api;