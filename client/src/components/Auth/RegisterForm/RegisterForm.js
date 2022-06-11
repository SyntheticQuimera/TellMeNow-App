import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../../gql/user";
import "./RegisterForm.scss";

export default function RegisterForm(props) {
  const { setShowLogin } = props;
  const [register] = useMutation(REGISTER);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      name: Yup.string().required(true),
      username: Yup.string()
        .matches(/^[a-zA-Z0-9-]*$/)
        .required(true),
      email: Yup.string().email(true).required(true),
      password: Yup.string()
        .required(true)
        .oneOf([Yup.ref("repeatPassword")], true),
      repeatPassword: Yup.string()
        .required(true)
        .oneOf([Yup.ref("password")], true),
    }),
    onSubmit: async (formData) => {
      try {
        const newUser = formData;
        delete newUser.repeatPassword;

        const result = await register({
          variables: {
            input: newUser,
          },
        });
        toast.success("Registration successful");
        setShowLogin(true);
      } catch (error) {
        toast.error(error.message);
        console.log(error.message);
      }
    },
  });

  return (
    <>
      <h2 className="register-form-title"></h2>
      <Form className="register-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Full Name"
          name="name"
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Input
          type="text"
          placeholder="Username"
          name="username"
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
        <Form.Input
          type="text"
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Form.Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Form.Input
          type="password"
          placeholder="Repeat Password"
          name="repeatPassword"
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Button type="submit" className="btn-submit">
          Register
        </Button>
      </Form>
    </>
  );
}

function initialValues() {
  return {
    name: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
}
