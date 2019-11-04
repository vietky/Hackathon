import React, { useState } from "react";
import AdInsert from './AdInsert';
import AdListing from './AdListing';
import AdView from './AdView';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
        <nav id="nav-main" className="navbar fixed-top navbar-light bg-main">
          <Link to="/">
            <img id="img-logo" src="/images/logo.png" alt="Responsive image" height="30" />
          </Link>
          <Link className="navbar-brand no-padding no-margin" to="/adview">
            <button id="btn-post" className="btn btn-warn">ĐĂNG TIN</button>
          </Link>
        </nav>
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
    </div >
  );
}