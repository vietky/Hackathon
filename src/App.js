import React, { useState } from "react";
import AdInsert from './AdInsert';
import AdListing from './AdListing';
import AdView from './AdView';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <Router>
        <Navbar className="navbar" color="light" light expand="md">
          <NavbarBrand href="/">Sugar</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">AdList</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/adview">AdView</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/adinsert">AdInsert</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <AdListing />
          </Route>
          <Route path="/adview">
            <AdView />
          </Route>
          <Route path="/adinsert">
            <AdInsert />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}