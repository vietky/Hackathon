import React from "react";
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
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/adview">About</Link>
          </li>
          <li>
            <Link to="/adinsert">Dashboard</Link>
          </li>
        </ul>

        <hr />

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
      </div>
    </Router>
  );
}