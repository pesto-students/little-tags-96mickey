import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { NotFound, Header, Footer, ThankYou } from "components";
import { connect } from "react-redux";
import { simpleAction } from "./actions";
import { Home, ProductList, ProductDescription, Cart } from "containers";
import { contactInfoData, cardUrls } from "./constants/home.contants";
import { categories } from "./constants/drawer.constants";
import "./App.css";
import { useLocation } from "react-router-dom";

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction()),
});

const mapStateToProps = (state) => ({
  ...state,
});

function App() {
  const location = useLocation();
  const [isHomeRoute, SetHomeRoute] = useState(false);

  useEffect(() => {
    location.pathname === "/" ? SetHomeRoute(true) : SetHomeRoute(false);
  }, [location]);

  return (
    <div className="App">
      <Header isHome={isHomeRoute} />
      <div className="main-section">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/prod/:id/description" component={ProductDescription} />
          <Route path="/prod/:type" component={ProductList} />
          <Route path="/thanks" component={ThankYou} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer {...{ contactInfoData, cardUrls, categories }} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
