import React from "react";
import { usePost } from "../context/postsContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Post from "../components/Post";

export const Home = () => {
  const { posts } = usePost();
  if (posts.length === 0) {
    return (
      <div className="flex flex-column justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-neutral-900" />
        <h1 className="text-neutral-900">No posts yet</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-6">My Posts</h1>
      <div className="flex justify-between items-center my-2">
        <h2 className="text-xl font-semibold">{`There are ${posts.length} posts`}</h2>
        <Link to="/new">
          <button
            type="button"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            + Create New Post
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Post
            key={post._id}
            title={post.title}
            id={post._id}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};
