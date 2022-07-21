import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { usePost } from "../context/postsContext";

const Post = ({ title, description, id }) => {
  const { deletePost } = usePost();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    toast((t) => (
      <div className="flex flex-col items-center justify-center">
        <p>
          Do you want to delete:
          <br /> ID: {id}?
        </p>
        <div className="flex justify-center mt-5">
          <button
            className="bg-red-300 hover:bg-red-400 px-3 py-2 text-sm rounded-sm mx-2"
            onClick={() => {
              deletePost(id);
              toast.dismiss(t.id);
            }}
          >
            Delete
          </button>
          <button
            className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-sm rounded-sm mx-2"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };
  return (
    <div className="rounded overflow-hidden h-auto shadow-md max-w-sm hover:shadow-xl cursor-pointer">
      <img
        className="rounded-t-lg"
        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
        alt=""
      />
      <div className="max-w-sm px-3 py-3 h-full max-h-96 rounded overflow-hidden shadow-lg">
        <h1 className="text-neutral-800 font-bold text-xl mb-2">{title}</h1>
        <p className="text-xs text-slate-400">ID: {id}</p>
        <p className="text-gray-600 text-base my-3 h-20 overflow-y-hidden">
          {description}
        </p>

        <div className="flex justify-around">
          <button
            className="inline-block px-6 py-2.5 bg-red-300 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-400 hover:shadow-lg focus:bg-red-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-400 active:shadow-lg transition duration-150 ease-in-out"
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
          <button
            className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            type="button"
            onClick={() => navigate(`/posts/${id}`)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
