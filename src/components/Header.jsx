import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { isUserAuthenticatedAtom } from "../states/atoms";
import { isUserAuthenticatedSelector } from "../states/selector";

const Header = () => {
  const isUserAuthenticated = useRecoilValue(isUserAuthenticatedAtom);
  const logout = useRecoilCallback(({ set }) => (navigationValue) => {
    set(isUserAuthenticatedSelector, navigationValue);
  });
  const navigate = useNavigate();
  const handleLogout = () => {
    logout(false);
    navigate("/");
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand>Keep Safe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/reviews" className="nav-link">
              Reviews
            </Link>
            <Link to="/passwords" className="nav-link">
              Passwords
            </Link>
            {!isUserAuthenticated ? (
              <Link to="/login" className="btn btn-outline-primary">
                Login
              </Link>
            ) : (
              <Link className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
