import React from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";

import { Provider } from "./Context";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    //We want the global state to be accessed through out the application so to do taht wrap everything in the Provided class
    <Provider>
      <div className="App">
        <Header branding="ContactManager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
