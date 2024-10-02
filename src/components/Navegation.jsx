import { Nav, NavItem } from "reactstrap";

import { NavLink } from "react-router-dom";

export const Navegation = () => (
  <header>
    <Nav pills fill>
      <NavItem>
        <NavLink to="/gallery" className="nav-link" activeclassname="active">
          Gallery
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/" className="nav-link" activeclassname="active">
          Cats Repertoire
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/stats" className="nav-link" activeclassname="active">
          Stats
        </NavLink>
      </NavItem>
    </Nav>
  </header>
);
