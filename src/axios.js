import instance from 'axios'

export const axios = instance.create({
  baseURL: 'http://localhost:4800/',
  // withCredentials: true,
  headers: {}
});