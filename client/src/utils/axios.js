import axios from 'axios';

// Create an instance of Axios with default configurations
const request = axios.create();

// Add a response interceptor to handle responses
request.interceptors.response.use(
  (response) => {
  
    return {
      success: true, 
      data: response.data,
      error:null
    }
  },
  (error) => {
    // Handle response errors
    return {
      success: false, 
      data: null,
      error:error.response.data
    }
  }
);

export default request;
