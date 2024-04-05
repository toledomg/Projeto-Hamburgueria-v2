import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://hamburgueria-kenzie-v2.herokuapp.com',
  baseURL: 'https://hbv2.alextoledo.com.br',
  responseType: 'json',
  timeout: 5000,
});
