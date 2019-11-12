import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => (
  <Navbar expand="lg" className={("navbar-dark", "bg-primary")}>
    <Navbar.Brand>demo-blog</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/" className={"nav-link"}>
          Home
        </Link>
        <Link to="/about" className={"nav-link"}>
          About
        </Link>
        <Link to="/articles" className={"nav-link"}>
          Articles
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
