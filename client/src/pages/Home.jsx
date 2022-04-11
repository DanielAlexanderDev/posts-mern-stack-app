import React from "react";
import { usePost } from "../context/postsContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";

export const Home = () => {
  const { posts } = usePost();
  if (posts.length === 0) {
    return (
      <div className="flex flex-column justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white">No posts yet</h1>
      </div>
    );
  }
  return (
    <div>
      <Link to="/new">Create New Post</Link>
      {posts.map((el) => (
        <div key={el._id}>
          <h1>{el.title}</h1>
        </div>
      ))}
    </div>
  );
};
