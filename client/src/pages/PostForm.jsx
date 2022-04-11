import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { usePost } from "../context/postsContext";

export const PostForm = () => {
  const { createPost } = usePost();
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("title is required"),
          description: Yup.string().required("description is required"),
        })}
        onSubmit={async (values, actions) => {
          await createPost(values);
          navigate("/");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="title" placeholder="title" />
            <ErrorMessage component="p" className="" name="title" />
            <Field name="description" placeholder="description" />
            <ErrorMessage component="p" name="description" />
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
