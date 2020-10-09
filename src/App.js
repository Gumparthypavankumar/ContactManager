import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layouts/Header";
import Contacts from "./components/Contacts/Contacts";
import AddContact from "./components/Contacts/AddContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import { Provider } from "./Context";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    //We want the global state to be accessed through out the application so to do taht wrap everything in the Provided class
    <Provider>
      <Router>
        <div className="App">
          <Header branding="ContactManager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contacts/add" component={AddContact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
