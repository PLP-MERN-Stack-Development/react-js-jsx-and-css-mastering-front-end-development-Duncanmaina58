// src/services/api.js
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (page = 1, limit = 10) => {
  const response = await fetch(`${API_BASE_URL}/posts?_page=${page}&_limit=${limit}`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // Get total count for pagination from headers
  const totalCount = response.headers.get('x-total-count');
  const posts = await response.json();

  return { posts, totalCount: parseInt(totalCount, 10) };
};