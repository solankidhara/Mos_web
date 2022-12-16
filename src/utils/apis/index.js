import createAxios from "./create-axios-instance";

const browserAxios = createAxios();

export const getRootRoute = (axios = browserAxios) => {
  return axios.get({
    url: '/users'
  });
};

export const getUsers = (axios = browserAxios) => {
  return axios.get({
    url: '/users/details',
  });
};

export const getAuthStatus = () => new Promise((resolve, reject) => resolve({ isLoggedIn: false }));
