import React, { Component } from "react";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        lang: "vi"
    };
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
              <Link to="/">
                <small className="nav-main__lang" onClick={() => this.setState({lang: "vi"})}>VI</small>
              </Link>
              <Link to="/">
              <small className="nav-main__lang" onClick={() => this.setState({lang: "my"})}>MY</small>
              </Link>
              <Link to="/">
              <small className="nav-main__lang" onClick={() => this.setState({lang: "mm"})}>MM</small>
              </Link>
                <Link to="/adinsert">
                  <button id="btn-post" className="btn btn-dwarn no-shadow">POST</button>
                </Link>
              </div>
            </div>
          </nav>
          <div className="container">
            <div id="page-content">
              <Switch>
                <Route exact path="/">
                  <AdListing lang={this.state.lang}/>
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