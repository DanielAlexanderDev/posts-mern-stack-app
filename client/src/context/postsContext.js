import { createContext, useContext, useState, useEffect } from "react";
import { getPostsRequests, createPostRequest } from "../api/posts";

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
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider value={{ posts, getPosts, createPost }}>
      {children}
    </postContext.Provider>
  );
};
