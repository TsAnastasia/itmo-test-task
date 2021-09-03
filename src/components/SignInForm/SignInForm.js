import { Formik, Form, Field } from "formik";
import React from "react";

const SingInForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", isRemember: true }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className="sign-in">
          <h2 className="sign-in__title">Sign In</h2>
          <Field
            className="sign-in__input"
            type="email"
            name="email"
            placeholder="Email*"
          />
          <Field
            className="sign-in__input"
            type="password"
            name="password"
            placeholder="Password*"
          />
          <button type="button" className="sign-in__forgot">
            Forgot password?
          </button>
          <button type="submit" className="sign-in__submit">
            Sign In
          </button>
          <label className="sign-in__remember">
            <Field
              className="sign-in__remember-input"
              type="checkbox"
              name="isRemember"
            />
            <span
            className={`sign-in__remember-checkbox ${
              values.isRemember && "sign-in__remember-checkbox_active"
            }`}
          ></span>
            <span className="sign-in__remember-text">Remember password</span>
          </label>
        </Form>
      )}
    </Formik>
  );
};

export default SingInForm;
