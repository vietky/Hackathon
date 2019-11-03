import React, { useState } from "react";
import AdInsert from './AdInsert';
import AdListing from './components/AdListing.js';
import AdDetail from './components/AdDetail.js';
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
    <div className="AdListing">
      <nav id="nav-main" class="navbar fixed-top navbar-expand-lg navbar-light bg-main">
        <div class="navbar-toggler">
          <img id="img-logo" src={require("./components/images/logo.png")} alt="Responsive image" height="30" />
        </div>
        <a class="navbar-brand no-padding no-margin" href="#">
          <img src="https://static.chotot.com/storage/marketplace/common/searchActive.svg" height="18" />
          <img src="https://static.chotot.com/storage/marketplace/common/notificationActive.svg" height="18" />
          <img src="https://static.chotot.com/storage/chotot-icons/svg/chat.svg" alt="chat" height="18" />
          <img src="https://static.chotot.com/storage/marketplace/common/userActive.svg" height="18" />
          <img src="https://static.chotot.com/storage/marketplace/common/moreActive.svg" height="7" />
          <button id="btn-post" class="btn btn-warn">ĐĂNG TIN</button>
        </a>
      </nav>
      <AdListing />
    </div>

  );
}