import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";
import Planets from "./views/Planets";
import Species from "./views/Species";
import Vehicles from "./views/Vehicles";
import error404 from "../img/404errorStarWars.png";
// import tatooine from "../img/tatooine.jpg";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/species/:theid">
              <Species />
            </Route>
            <Route exact path="/planets/:theid">
              <Planets />
            </Route>
            <Route exact path="/vehicles/:theid">
              <Vehicles />
            </Route>
            <Route>
              <Link to="/" className="center">
                <img src={error404} />
              </Link>
            </Route>
          </Switch>
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
