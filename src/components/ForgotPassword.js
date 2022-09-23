import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { string } from "yup";
import { handleforgotpassword } from "../services/authService.js";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Send } from "react-bootstrap-icons";

function ForgotPassword() {
  const [isdisabled, setIsdisabled] = useState(false);
  const [flag, setFlag] = useState(false);
  const styles = { background: flag === true ? "#CAF9C4" : "" };
  const userValidation = yup.object({
    email: string().email().required(),
  });

  const {
    formik,
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldError,
  } = useFormik({
    initialValues: { email: "" },
    validationSchema: userValidation,
    onSubmit: async (values) => {
      setIsdisabled(true);
      const response = await handleforgotpassword(values);

      if (response.success) {
        setFlag(true);
      } else {
        setIsdisabled(false);
        setFieldError("email", response.message);
      }
    },
  });
  return (
    <div className="forgotpasswordwrapper" style={styles}>
      {!flag ? (
        <>
          <h1>Forgot Password ?</h1>
          <form onSubmit={handleSubmit}>
            {touched.email && errors.email ? (
              <div className="error">{errors.email}</div>
            ) : (
              ""
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                label="enter email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
            </Form.Group>
            <h6>We'll send a link to reset your password.</h6>

            <div className="loginbtn-grp">
              <Button variant="primary" type="submit" disabled={isdisabled}>
                Send verification link
                <Send className="cartIcon" color="white" size={24} />{" "}
              </Button>
            </div>
          </form>
        </>
      ) : (
        <div className="successResponse">
          <h2>Account Recovery email sent to your email address </h2>
          <h5>Check your email inbox/updates to reset the password</h5>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
