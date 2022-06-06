import axios from "axios";

export const getPostsRequests = async () => await axios.get("/api/v1/posts");
export const createPostRequest = async (post) =>
  await axios.post("/api/v1/posts", post);

export const deletePostRequest = async (id) =>
  await axios.delete(`/api/v1/posts/${id}`);

export const updatePostRequest = async (id, data) =>
  await axios.put(`/api/v1/posts/${id}`, data);

export const getPostRequest = async (id) =>
  await axios.get(`/api/v1/posts/${id}`);
