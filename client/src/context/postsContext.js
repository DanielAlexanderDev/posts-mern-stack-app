import { createContext, useContext, useState, useEffect } from "react";
import {
  getPostsRequests,
  createPostRequest,
  deletePostRequest,
  getPostRequest,
  updatePostRequest,
} from "../api/posts";

const postContext = createContext();

export const usePost = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await getPostsRequests();
    setPosts(response.data);
  };
  const createPost = async (post) => {
    const response = await createPostRequest(post);
    setPosts([...posts, response.data]);
  };
  const deletePost = async (id) => {
    const response = await deletePostRequest(id);
    if (response.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  };
  const getPost = async (id) => {
    const res = await getPostRequest(id);
    return res;
  };
  const updatePost = async (id, newFields) => {
    const res = await updatePostRequest(id, newFields);
    setPosts(posts.map((post) => (post._id === id ? res.data : post)));
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider
      value={{ posts, getPosts, createPost, deletePost, getPost, updatePost }}
    >
      {children}
    </postContext.Provider>
  );
};
