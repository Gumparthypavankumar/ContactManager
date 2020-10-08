import React from "react";
import Header from "./components/layouts/Header";
import Contacts from "./components/Contacts/Contacts";
import AddContact from "./components/Contacts/AddContact";

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
          <AddContact/>
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
