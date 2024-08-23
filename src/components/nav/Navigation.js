import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
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
      <NavbarBrand href={path_prefix} style={{ padding: 0, height: '100%', display: 'flex' }}>
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
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle
            nav caret
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
            >
              More
            </DropdownToggle>
            <DropdownMenu className="navbar-dropdown" aria-labelledby='optionsDropdownButton'>
              <DropdownItem>
                <NavLink href="https://www.instagram.com/calclubvolleyball" style={{paddingLeft: '0 !important'}}>
                  Instagram
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="https://www.facebook.com/calclubvball/">
                  Facebook
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="https://recwell.berkeley.edu/competitive-programs/sport-clubs/volleyball-mens/">
                  Recwell
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
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