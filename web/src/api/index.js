import axios from 'axios'
import { apiUrl } from '../constants'

export const $http = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  headers: {
    'Accept-Version': 1,
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export default $http