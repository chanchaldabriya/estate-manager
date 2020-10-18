import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AddDeveloper from "./components/AddDeveloper";
import FeaturedDevelopers from "./containers/FeaturedDevelopers";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={FeaturedDevelopers} />
        <Route path="/add" exact component={AddDeveloper} />
      </Switch>
    </div>
  );
}

export default App;
