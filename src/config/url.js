export const API_BASE_URL = 'https://my-ecommerce-apis.herokuapp.com/api/';

export  const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const userSignup_api = getApiUrl('user/register'); 
export const userOtpVer_api = getApiUrl('user/otpVerify'); 
export const userLogin_api = getApiUrl('user/login'); 