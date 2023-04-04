import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  PageWrapper,
  Title,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
} from "./styles";

const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Your name is too short")
    .required("Please enter your full name"),
  email: Yup.string()
    .email("The email entered is incorrect")
    .required("Please enter a valid email"),
  message: Yup.string()
  .required("You must enter a description"),
});

function Register() {
  const [formValues, setFormValues] = useState();

  return (
    <PageWrapper>
      <Title>Register you interest in our services</Title>
      <hr />
      <Formik
        initialValues={{
          fullname: "",
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setFormValues(values);
          const timeOut = setTimeout(() => {
            actions.setSubmitting(false);

            clearTimeout(timeOut);
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          isValidating,
          isValid,
        }) => {
          return (
            <>
              <Form name="contact" method="post" onSubmit={handleSubmit}>
                <Label htmlFor="fullname">
                  Fullname
                  <Input
                    type="text"
                    name="fullname"
                    autoCorrect="off"
                    autoComplete="name"
                    valid={touched.fullname && !errors.fullname}
                    error={touched.fullname && errors.fullname}
                  />
                </Label>
                {errors.fullname && touched.fullname && (
                  <StyledInlineErrorMessage>
                    {errors.fullname}
                  </StyledInlineErrorMessage>
                )}
                <Label htmlFor="email">
                  Email
                  <Input
                    type="email"
                    name="email"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="email"
                    valid={touched.email && !errors.email}
                    error={touched.email && errors.email}
                  />
                </Label>
                <ErrorMessage name="email">
                  {(msg) => (
                    <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                <Label htmlFor="message">
                  Brief description of request
                  <Input
                    type="textarea"
                    as="textarea"
                    name="message"
                    autoCapitalize="off"
                    autoCorrect="off"
                    valid={touched.message && !errors.message}
                    error={touched.message && errors.message}
                  />
                </Label>
                <ErrorMessage name="message">
                  {(msg) => (
                    <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                <Submit type="submit" disabled={!isValid || isSubmitting}>
                  {isSubmitting ? `Submiting...` : `Submit`}
                </Submit>
              </Form>
              <hr />
            </>
          );
        }}
      </Formik>
    </PageWrapper>
  );
}

export default Register;
