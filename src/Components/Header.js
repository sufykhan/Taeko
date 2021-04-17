import React from "react";
import { Navbar,Container, Nav } from "react-bootstrap";
import { useLocation } from "react-router";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/">Testing</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto">
              <LinkContainer to="/123">
                
              </LinkContainer>
             
            </Nav>
      
    
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
