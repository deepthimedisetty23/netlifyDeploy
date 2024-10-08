import React,{useEffect} from 'react';
import axios from 'axios';

export default function ExAxios1() {
    useEffect(()=>{
        getProducts();
       fetchPost(1);

  // Create a new post
  createPost({ title: 'New Post', body: 'This is a new post.', userId: 1 });

  // Update an existing post
  updatePost(1, { title: 'Updated Post', body: 'This post has been updated.' });

  // Delete a post
 deletePost(1);
    },[])
    async function getProducts()
    {
        let res=await axios.get('https://restcountries.com/v3.1/all')
        console.log(res.data)
    }
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


  return (
    <div>

    </div>
  )
}
