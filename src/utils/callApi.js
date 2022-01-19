import axios from 'axios';

let axiosConfig = {
  baseURL: 'http://localhost:8671/api/1',
  timeout: 30000,
};

// if (process.env.NODE_ENV !== 'production') {
//   axiosConfig.baseURL = 'https://inceptionOK.services/api/1'
// }

const callApi = axios.create(axiosConfig);

callApi.interceptors.request.use(function (config) {
  config.headers = {
    'Content-Type': 'text/plain'
  }
  console.log({ config });
  return config;
});

export default callApi;
