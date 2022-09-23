import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { string } from "yup";
import { handleresetpassword } from "../services/authService.js";

function ResetPassword() {
  useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    if (!(id && token)) {
      navigate("/login");
    }
  }, []);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  //   const styles = { background: flag === true ? "#CAF9C4" : "" };
  const userValidation = yup.object({
    password: string().required().min(6),
    confirmPassword: string()
      .required()
      .min(6)
      .oneOf([yup.ref("password")], "Your passwords do not match."),
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
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: userValidation,
    onSubmit: async (values) => {
      const id = localStorage.getItem("id");
      const token = localStorage.getItem("token");

      const data = await handleresetpassword(values, id, token);
      if (data.success) {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem("user");
        setFlag(true);
      } else {
        setFieldError("password", data.message);
      }
    },
  });
  return (
    <>
      {!flag ? (
        <>
          <div className="resetpassworddiv">
            <h1>Reset Your Password</h1>
            <h6>
              Strong passwords include numbers, letters and special symbols
            </h6>
            <form onSubmit={handleSubmit}>
              {touched.password && errors.password ? (
                <div className="error">{errors.password}</div>
              ) : (
                ""
              )}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  placeholder="enter new password"
                  variant="outlined"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              {touched.confirmPassword && errors.confirmPassword ? (
                <div className="error">{errors.confirmPassword}</div>
              ) : (
                ""
              )}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  name="confirmPassword"
                  placeholder="confirm new password"
                  variant="outlined"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              <div className="loginbtn-grp">
                <Button variant="success" type="submit">
                  Reset Password
                </Button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="successResponse">
            <h2>password updated!</h2>
            <h4>your password has been changed successfully.</h4>
            <h4>
              use your new password to <Link to="/login">log in</Link>
            </h4>
          </div>
        </>
      )}
    </>
  );
}

export default ResetPassword;
