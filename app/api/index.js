import axios from 'react-native-axios';
import {dev} from '../constants/environment';

const Api = axios.create({
  baseURL: dev.api,
  timeout: 10000,
});

export default Api;
