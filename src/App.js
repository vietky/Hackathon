import React, { Component } from "react";
import AdInsert from './AdInsert';
import AdListing from './AdListing';
import AdView from './AdView';
import config from './config.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        navigate: false,
        referrer: null,
    };
}
  
  vi_lang = () => {
    console.log("vi")
    config.lang="vi"
  }

  my_lang = () => {
    console.log("my")
    config.lang="my"
  }

  mm_lang = () => {
    console.log("mm")
    config.lang="mm"
  }

  render() {
    return (
      <div className="App">
        <Router>
          <nav id="nav-main" className="navbar fixed-top navbar-light bg-main">
            <div className="container">
              <Link to="/">
                <img id="img-logo" src="/images/logo.png" alt="Responsive logo" height="30" />
              </Link>
              <div>
              <Link to="/vi">
                <small className="nav-main__lang text-light" onClick={this.vi_lang}>VI</small>
              </Link>
              <Link to="/my">
              <small className="nav-main__lang text-light" onClick={this.my_lang} >MY</small>
              </Link>
                <small className="nav-main__lang text-light" onClick={this.mm_lang} >MM</small>
                <Link to="/adinsert">
                  <button id="btn-post" className="btn btn-dwarn no-shadow">POST</button>
                </Link>
              </div>
            </div>
          </nav>
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <div className="container">
            <div id="page-content">
              <Switch>
                <Route exact path="/vi">
                  <AdListing lang={"vi"}/>
                </Route>
                <Route exact path="/my">
                  <AdListing lang={"my"}/>
                </Route>
                <Route path="/adview">
                  <AdView />
                </Route>
                <Route path="/adinsert">
                  <AdInsert />
                </Route>
              </Switch>
            </div>
          </div >
        </Router>
      </div>
    );
  }
}

export default App;

// export default function BasicExample() {

//   return (
    // <Router>
    //   <nav id="nav-main" className="navbar fixed-top navbar-light bg-main">
    //     <div className="container">
    //       <Link to="/">
    //         <img id="img-logo" src="/images/logo.png" alt="Responsive logo" height="30" />
    //       </Link>

    //       <div>
    //         <small className="nav-main__lang text-light" onClick={config.lang = "vi"} >VI</small>
    //         <small className="nav-main__lang text-light">MY</small>
    //         <small className="nav-main__lang text-light">MM</small>
    //         <Link to="/adinsert">
    //           <button id="btn-post" className="btn btn-dwarn no-shadow">POST</button>
    //         </Link>
    //       </div>
    //     </div>
    //   </nav>
    //     {/*
    //       A <Switch> looks through all its children <Route>
    //       elements and renders the first one whose path
    //       matches the current URL. Use a <Switch> any time
    //       you have multiple routes, but you want only one
    //       of them to render at a time
    //     */}
    //   <div className="container">
    //     <div id="page-content">
    //     <Switch>
    //       <Route exact path="/">
    //         <AdListing />
    //       </Route>
    //       <Route path="/adview">
    //         <AdView />
    //       </Route>
    //       <Route path="/adinsert">
    //         <AdInsert />
    //       </Route>
    //     </Switch>
    //     </div>
    //   </div >
    // </Router>
//   );
// }