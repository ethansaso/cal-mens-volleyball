import { useState } from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import CalLogo from "../../assets/img/cal-logo.png";

function Navigation(args) {
  // For collapsible navbar
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" color="dark" dark>
      <NavbarBrand
        href={"/"}
        style={{ padding: 0, height: "100%", display: "flex" }}
      >
        <img className="cal-logo" src={CalLogo} alt="Cal Logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href={"/schedule"}>
              <div className="nav-text">Game Schedule</div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={"/roster"}>
              <div className="nav-text">Team Roster</div>
            </NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <UncontrolledDropdown nav inNavbar className="navbar-dropdown">
            <DropdownToggle
              nav
              caret
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
              className="ooga"
            >
              <div className="nav-text">Socials</div>
            </DropdownToggle>
            <DropdownMenu
              className="navbar-dropdown-menu"
              aria-labelledby="optionsDropdownButton"
            >
              <DropdownItem className="navbar-dropdown-item">
                <NavLink
                  href="https://www.instagram.com/calclubvolleyball"
                  style={{ paddingLeft: "0 !important" }}
                >
                  <div className="nav-text">Instagram</div>
                </NavLink>
              </DropdownItem>
              <DropdownItem className="navbar-dropdown-item">
                <NavLink href="https://www.facebook.com/calclubvball/">
                  <div className="nav-text">Facebook</div>
                </NavLink>
              </DropdownItem>
              <DropdownItem className="navbar-dropdown-item">
                <NavLink href="https://recwell.berkeley.edu/competitive-programs/sport-clubs/volleyball-mens/">
                  <div className="nav-text">Recwell</div>
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar className="navbar-dropdown">
            <DropdownToggle
              nav
              caret
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
              className="ooga"
            >
              <div className="nav-text">Info</div>
            </DropdownToggle>
            <DropdownMenu
              end
              className="navbar-dropdown-menu"
              aria-labelledby="optionsDropdownButton"
            >
              <DropdownItem className="navbar-dropdown-item">
                <NavLink href={"/new-players"}>
                  <div className="nav-text">New Players</div>
                </NavLink>
              </DropdownItem>
              {/*
              <DropdownItem className="navbar-dropdown-item">
                <NavLink href={"/current-players"}>
                  <div className="nav-text">
                    Current Players
                  </div>
                </NavLink>
              </DropdownItem>
              */}
              <DropdownItem className="navbar-dropdown-item">
                <NavLink href={"/donations"}>
                  <div className="nav-text">Donate</div>
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
