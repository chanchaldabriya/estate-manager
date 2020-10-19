import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import FeaturedDevelopers from "./containers/FeaturedDevelopers";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={FeaturedDevelopers.DeveloperList} />
        <Route path="/add" exact component={FeaturedDevelopers.AddDeveloper} />
        <Route
          path="/edit/:id"
          exact
          component={FeaturedDevelopers.AddDeveloper}
        />
      </Switch>
    </div>
  );
}

export default App;
