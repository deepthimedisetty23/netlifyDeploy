const axios = require('axios');

// Base URL for the API
const baseURL = 'https://jsonplaceholder.typicode.com';

// GET request
async function fetchPost(postId) {
  try {
    const response = await axios.get(`${baseURL}/posts/${postId}`);
    console.log('GET Response:', response.data);
  } catch (error) {
    console.error('Error fetching post:', error);
  }
}

// POST request
async function createPost(data) {
  try {
    const response = await axios.post(`${baseURL}/posts`, data);
    console.log('POST Response:', response.data);
  } catch (error) {
    console.error('Error creating post:', error);
  }
}

// PUT request
async function updatePost(postId, data) {
  try {
    const response = await axios.put(`${baseURL}/posts/${postId}`, data);
    console.log('PUT Response:', response.data);
  } catch (error) {
    console.error('Error updating post:', error);
  }
}

// DELETE request
async function deletePost(postId) {
  try {
    const response = await axios.delete(`${baseURL}/posts/${postId}`);
    console.log('DELETE Response:', response.data);
  } catch (error) {
    console.error('Error deleting post:', error);
  }
}

// Example usage
(async () => {
  // Fetch a post
  await fetchPost(1);

  // Create a new post
  await createPost({ title: 'New Post', body: 'This is a new post.', userId: 1 });

  // Update an existing post
  await updatePost(1, { title: 'Updated Post', body: 'This post has been updated.' });

  // Delete a post
  await deletePost(1);
})();
