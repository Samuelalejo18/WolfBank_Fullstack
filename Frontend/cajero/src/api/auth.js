import axios from './axios';

export const registerRequest = (user) => axios.post('/register', user);
export const loginRequest = (user) => axios.post('/login', user);
export const verifyTokenRequest = () => axios.get('/verify');
export const depositRequest= (user)=>axios.patch("/deposit",user);
export const transferRequest= (user)=>axios.patch("/transfer",user);
export const withdrawRequest= (user)=>axios.patch("/withdraw",user);

