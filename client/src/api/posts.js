import axios from "axios";

export const getPostsRequests = async () => await axios.get("/api/v1/posts");
export const createPostRequest = async (post) =>
  await axios.post("/api/v1/posts", post);
