import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";

const NavbarComp = () => {
  return (
    <div>
      <Navbar color="secondary" dark expand="md" light>
        <NavbarBrand>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <Link style={{ textDecoration: "none" }} to="/about">
                  About
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link style={{ textDecoration: "none" }} to="/blog">
                  Blog
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
