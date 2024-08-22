import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CalLogo from "../../assets/img/cal-logo.png"

const path_prefix = process.env.NODE_ENV === 'production' ? "/cal-mens-volleyball/" : '/'

function Navigation(args) {
  // For collapsible navbar
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      expand="md"
      color="dark"
      dark
    >
      <NavbarBrand href="/cal-mens-volleyball" style={{ padding: 0, height: '100%', display: 'flex' }}>
          <img className="cal-logo" src={CalLogo} alt="Cal Logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href={path_prefix + "schedule"}>
              Game Schedule
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={path_prefix + "roster"}>
              Meet the Team
            </NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
              <NavLink href={path_prefix + "about"}>
                  About
              </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;