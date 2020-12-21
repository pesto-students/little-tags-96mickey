import React from "react";
import { Route, Switch } from "react-router-dom";
import {Home, NotFound} from 'components';

function App() {
  return (
  <div className="App">
    <Switch>
      <Route path='/' component={Home} exact />
      <Route component={NotFound} />
    </Switch>
  </div>);
}

export default App;
