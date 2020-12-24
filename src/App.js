import React from "react";
import { Route, Switch } from "react-router-dom";
import { NotFound, Header, Footer } from "components";
import { connect } from "react-redux";
import { simpleAction } from "./actions";
import { Home } from "containers";

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction()),
});

const mapStateToProps = (state) => ({
  ...state,
});

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
