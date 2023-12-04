import axios from "axios";
export const USERS_API = 'http://localhost:4000/api/users';
//export const BASE_API = process.env.REACT_APP_BASE_API_URL;
//export const USERS_API = `${BASE_API}/api/users`;
const request = axios.create({
  withCredentials: true,
});


export const signin = async (credentials) => {
  const response = await request.post( `http://localhost:4000/api/users/signin`, credentials );
  return response.data;
};
export const account = async () => {
    const response = await request.post(`http://localhost:4000/api/users/account`);
    return response.data;
  };
  export const updateUser = async (user) => {
    console.log('User object received:', user);
    if (!user._id) {
        throw new Error('No user ID provided');
      }
    const response = await request.put(`${USERS_API}/${user._id}`, user);
    return response.data;
  };
  
  export const findAllUsers = async () => {
    const response = await request.get(`http://localhost:4000/api/users`);
    return response.data;
  };
  export const createUser = async (user) => {
    const response = await request.post(`${USERS_API}`, user);
    return response.data;
  };
  
  export const findUserById = async (id) => {
    const response = await request.get(`${USERS_API}/${id}`);
    return response.data;
  };
  export const signup = async (credentials) => {
    const response = await request.post(
      `${USERS_API}/signup`, credentials);
    return response.data;
  };
  
  export const signout = async () => {
    const response = await request.post(`${USERS_API}/signout`);
    return response.data;
  };
  
  
  export const deleteUser = async (user) => {
    const response = await request.delete(
      `${USERS_API}/${user._id}`);
    return response.data;
  };
  