import React, { useEffect, useState } from 'react';
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

function Example(args) {
  // For collapsible navbar
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // For fixing navbar to top of screen upon scroll
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar
        expand="md"
        color="dark"
        dark
        className={isSticky ? "sticky" : ""}
      >
        <NavbarBrand href="/" style={{ padding: 0, height: '100%', display: 'flex' }}>
            <img src={CalLogo} alt="Cal Logo" style={{height: '40px', width: 'auto'}}/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/schedule">
                Schedule
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/roster">
                Roster
              </NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem>
                <NavLink href='/about'>
                    About
                </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;