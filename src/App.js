import React from "react";
import { Route, Switch } from "react-router-dom";
import { NotFound } from "components";
import { Home } from "containers";

import { connect } from "react-redux";
import { simpleAction } from "./actions";

const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction()),
});

const mapStateToProps = (state) => ({
  ...state,
});

function App(props) {
  return (
    <div className="App">
      <pre>{JSON.stringify(props)}</pre>
      <button onClick={(e) => action(e, props)}>Test redux action</button>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

const action = (event, props) => {
  props.simpleAction();
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
