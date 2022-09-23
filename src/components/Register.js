import "./css/register.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { string } from "yup";
import { useNavigate } from "react-router-dom";
import { submitRegistration } from "../services/authService";
import { toast } from "react-toastify";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formvalidation = yup.object({
    firstname: string().required().min(2),
    lastname: string().required().min(2),
    phone: string().required().min(10),
    username: string().email().required(),
    address: string().required().min(30),
    about: string().required().min(30),
    password: string().required().min(6),
  });

  const {
    formik,
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    setFieldError,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      username: "",
      address: "",
      about: "",
      password: "",
    },
    validationSchema: formvalidation,
    onSubmit: async (values) => {
      console.log(values);
      setLoading(true);
      const response = await submitRegistration(values);
      if (!response.success) {
        setLoading(false);
        setFieldError("firstname", response.message);
      } else {
        toast.success("Registration Successful");
        toast.success("Visit your inbox to verify your account");

        navigate("/");
      }
    },
  });

  return (
    <div className="register">
      <Form className="registerForm" onSubmit={handleSubmit}>
        <h3>Register to use our services</h3>
        {touched.firstname && errors.firstname ? (
          <div className="error">{errors.firstname}</div>
        ) : (
          ""
        )}
        {touched.lastname && errors.lastname ? (
          <div className="error">{errors.lastname}</div>
        ) : (
          ""
        )}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              name="lastname"
              value={values.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {touched.phone && errors.phone ? (
            <span className="error">{errors.phone}</span>
          ) : (
            ""
          )}
          {touched.username && errors.username ? (
            <span className="error">{errors.username}</span>
          ) : (
            ""
          )}
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter phone number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Group>
        </Row>
        {touched.address && errors.address ? (
          <div className="error">{errors.address}</div>
        ) : (
          ""
        )}
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="Enter your address"
            as="textarea"
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        {touched.about && errors.about ? (
          <div className="error">{errors.about}</div>
        ) : (
          ""
        )}
        <Form.Group className="mb-3" controlId="formGridAbout">
          <Form.Label>About Yourself</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Let others know about you"
            name="about"
            value={values.about}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        {touched.password && errors.password ? (
          <div className="error">{errors.password}</div>
        ) : (
          ""
        )}
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Label>Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <div className="registerbtngrp">
          <Button
            variant="primary"
            type="submit"
            className="registerBtn"
            disabled={loading}
          >
            Register
          </Button>
          <Button variant="warning" type="submit" className="resetBtn">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
