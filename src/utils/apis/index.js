import axios from "axios";
// import createAxios from "./create-axios-instance";

// const browserAxios = createAxios();

export const getRootRoute =() => {
  return  axios.get( 'http://0.0.0.0:3001/api/v1/users');
};

// export const getUsers = (axios = browserAxios) => {
//   return axios.get({
//     url: '/users/details',
//   });
// };

// export const getAuthStatus = () => new Promise((resolve, reject) => resolve({ isLoggedIn: false }));
