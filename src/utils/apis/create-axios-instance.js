import axios from 'axios';

const createAxios = (ctx = {}) => {
  const config = {
    baseURL: 'http://localhost:3000/api/v1/',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    // withCredentials: true,
  };

  if (ctx?.token) {
    config.headers.Authorization =  ctx?.token ? `Bearer ${ctx?.token}` : '';
  }

  const axiosInstance = axios.create(config);
  console.log(axiosInstance)

  const get = ({ url, params }) =>
    axiosInstance.request({
      method: 'GET',
      url,
      params,
    });

  const post = ({ url, data }) =>
    axiosInstance.request({
      method: 'POST',
      url,
      data,
    });

  const put = ({ url, data, params, headers }) =>
    axiosInstance.request({
      method: 'PUT',
      url,
      data,
      params,
      headers,
    });

  const patch = ({ url, data, params, headers }) =>
    axiosInstance.request({
      method: 'PATCH',
      url,
      data,
      params,
      headers,
    });

  const del = ({ url, params, headers }) =>
    axiosInstance.request({
      method: 'DELETE',
      url,
      params,
      headers,
    });

  return {
    instance: axiosInstance,
    get,
    post,
    put,
    patch,
    del,
  };
};

export default createAxios;
