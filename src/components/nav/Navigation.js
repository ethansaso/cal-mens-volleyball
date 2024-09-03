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
          <UncontrolledDropdown nav inNavbar className="navbar-dropdown">
            <DropdownToggle
            nav caret
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
            className="ooga"
            >
              Socials
            </DropdownToggle>
            <DropdownMenu className="navbar-dropdown-menu" aria-labelledby='optionsDropdownButton'>
              <DropdownItem className="navbar-dropdown-item">
                <NavLink href="https://www.instagram.com/calclubvolleyball" style={{paddingLeft: '0 !important'}}>
                  Instagram
                </NavLink>
              </DropdownItem>
              <DropdownItem className="navbar-dropdown-item">
                <NavLink href="https://www.facebook.com/calclubvball/">
                  Facebook
                </NavLink>
              </DropdownItem>
              <DropdownItem className="navbar-dropdown-item">
                <NavLink href="https://recwell.berkeley.edu/competitive-programs/sport-clubs/volleyball-mens/">
                  Recwell
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar className="navbar-dropdown">
            <DropdownToggle
            nav caret
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
            className="ooga"
            >
              More
            </DropdownToggle>
            <DropdownMenu className="navbar-dropdown-menu" aria-labelledby='optionsDropdownButton'>
              <DropdownItem className="navbar-dropdown-item">
                <NavLink href={`${path_prefix}about`}>
                  About
                </NavLink>
              </DropdownItem>
              <DropdownItem className="navbar-dropdown-item">
                <NavLink href={`${path_prefix}resources`}>
                  Resources
                </NavLink>
              </DropdownItem>
              <DropdownItem className="navbar-dropdown-item">
                <NavLink href={`${path_prefix}donations`}>
                  Donate
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;