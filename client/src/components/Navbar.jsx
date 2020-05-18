import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar
      className="navBar"
      expand="lg"
      style={{ backgroundColor: '#e3dad0', color: '#344960' }}
    >
      <Navbar.Brand style={{ color: '#344960' }} href="/">
        QuaranRead
      </Navbar.Brand>
      <Navbar.Toggle className="navBar" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" className="navBar">
          <Nav.Link href="/book" style={{ color: '#344960' }}>
            Book Of The Day
          </Nav.Link>
          <Nav.Link
            href="/about"
            className="mr"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              color: '#344960'
            }}
          >
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
