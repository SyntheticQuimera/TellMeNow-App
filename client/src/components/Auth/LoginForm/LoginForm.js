import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../../gql/user";
import { setToken, decodeToken } from "../../../utils/token";
import useAuth from "../../../hooks/useAuth";
import "./LoginForm.scss";

export default function LoginForm() {
  const [login] = useMutation(LOGIN);
  const { setUser } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
    }),
    onSubmit: async (formData) => {
      try {
        const { data } = await login({
          variables: {
            input: formData,
          },
        });
        const { token } = data.login;
        setToken(token);
        setUser(decodeToken(token));
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <Form className="Login-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        type="text"
        placeholder="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        type="password"
        placeholder="Password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Button type="submit" className="btn-submit">
        Log In
      </Button>
    </Form>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}
