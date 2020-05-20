import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../icon.png';

function NavBar() {
  return (
    <Navbar
      className="navBar"
      expand="lg"
      style={{ backgroundColor: '#e3dad0', color: '#344960' }}
      fixed="top"
    >
      <Navbar.Brand style={{ color: '#344960' }} href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        QuaranREAD
      </Navbar.Brand>
      <Navbar.Toggle className="navBar" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navBar">
          <Nav.Link href="/book" style={{ color: '#344960' }}>
            Book Of The Day
          </Nav.Link>
          <Nav.Link
            href="/about"
            style={{
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
