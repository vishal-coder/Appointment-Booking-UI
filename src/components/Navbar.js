import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import "./css/navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logoutUser } from "../services/authService";
import { LOG_OUT } from "../features/auth/authSlice";

function HeaderComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = async () => {
    setIsLoading(true);
    const response = await logoutUser(user.token);
    if (!response.success) {
      toast.error("Error while logging out");
    } else {
      setIsLoading(false);
      toast.success("User Logged out successfully");
      dispatch(LOG_OUT());
      // dispatch(resetCart());
      navigate("/");
    }
  };
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="sticky-nav">
      <Container>
        <Navbar.Brand>FundME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home{" "}
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/posts");
              }}
            >
              Listings
            </Nav.Link>
            <Nav.Link href="#pricing">Search</Nav.Link>
          </Nav>
          <Nav>
            {!user ? (
              <>
                {" "}
                <Nav.Link
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Nav.Link>{" "}
              </>
            ) : (
              <>
                <Navbar.Text>Welcome, {user.user.name}</Navbar.Text>
                <Nav.Link
                  onClick={() => {
                    handleLogout();
                  }}
                  disabled={isLoading}
                >
                  {" "}
                  Logout{" "}
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
