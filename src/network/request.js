import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 10000
  })

  /* instance.interceptors.request.use(config => {
    console.log(config);
    return config;
  }, err => {
      console.log(err);
      return err
  });

  instance.interceptors.response.use(res => {
    console.log(res);
    return res
  }, err => {
      console.log(err);
      return err
  }); */
  
  return instance(config);
}
