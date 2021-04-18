import React from "react";
import { Navbar,Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {

  return (
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>

          <LinkContainer to="/">
            <Navbar.Brand href="/"></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto">
            </Nav>
      
    
          </Navbar.Collapse>
       
      </Navbar>
  );
};

export default Header;
