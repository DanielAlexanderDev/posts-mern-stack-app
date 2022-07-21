import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usePost } from "../context/postsContext";

export const PostForm = () => {
  const { createPost, getPost, updatePost } = usePost();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const res = await getPost(params.id);
        setPost(res.data);
      }
    })();
  }, [params.id, getPost]);
  return (
    <div className="flex items-center justify-center w-1/2">
      <div className="bg-gray-200 p-10 shadow-sm shadow-gray-600 w-auto">
        <header className="flex justify-between items-center pb-4">
          <h3 className="text-xl text-black font-bold">
            {params.id ? "Update Post" : "New Post"}
          </h3>
          <Link to={"/"} className="text-sm text-gray-500 hover:text-gray-400">
            {"Go Back <-"}
          </Link>
        </header>
        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required("title is required"),
            description: Yup.string().required("description is required"),
          })}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updatePost(params.id, values);
            } else {
              await createPost(values);
            }
            navigate("/");
          }}
          enableReinitialize
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="flex flex-col">
              <label
                htmlFor="title"
                className="text-sm block font-bold text-gray-900 "
              >
                Title
              </label>
              <Field name="title" placeholder="Title" />
              <ErrorMessage
                component="p"
                className="text-red-400 text-sm"
                name="title"
              />
              <label
                htmlFor="description"
                className="text-sm block font-bold text-gray-900 "
              >
                Description
              </label>
              <Field
                component="textarea"
                name="description"
                placeholder="Description"
                rows={3}
              />
              <ErrorMessage
                component="p"
                className="text-red-400 text-sm"
                name="description"
              />
              <button
                className="mt-6 bg-green-400 w-auto py-2 hover:shadow-md"
                type="submit"
              >
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
