import React from "react";
import Header from "./Header";
import Main from "./Main";
import { Switch, Route } from "react-router-dom";

const App = () => (
  <div>
    <Header />

    <Switch>
      <Route exact path="/login" render={() => <div>Login</div>} />
      <Route path="/" render={() => <Main />} />
    </Switch>
  </div>
);

export default App;
