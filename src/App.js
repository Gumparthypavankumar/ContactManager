import React from 'react';
import Header from './components/Header';
import Contacts from './components/Contacts';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header branding="ContactManager"/>
      <div className="container">
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
