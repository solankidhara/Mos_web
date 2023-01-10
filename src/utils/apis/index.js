import axios from "axios";
// import createAxios from "./create-axios-instance";

// const browserAxios = createAxios();

export const getRootRoute =() => {
  return  axios.get( 'https://34.100.153.160:3000/api/v1/users');
};

// export const getUsers = (axios = browserAxios) => {
//   return axios.get({
//     url: '/users/details',
//   });
// };

// export const getAuthStatus = () => new Promise((resolve, reject) => resolve({ isLoggedIn: false }));
