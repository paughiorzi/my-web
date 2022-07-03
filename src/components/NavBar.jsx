import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

let NavBar=({arrayDeLink})=> {
    console.log(arrayDeLink)
  return (

    
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Paula Agustina Ghiorzi</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {arrayDeLink.map((link) => {
                  return (
                    <Nav.Link key={link.id} href={link.enlace}>
                      {link.nombre}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
export default NavBar;
