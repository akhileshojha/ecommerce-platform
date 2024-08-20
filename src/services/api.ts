import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};

// Additional API calls can be defined here...
