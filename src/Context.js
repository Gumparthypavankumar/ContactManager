import React, { Component } from "react";
import axios from "axios";

//Creating a Context
const Context = React.createContext();

// Creating The Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact),
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => this.setState({ contacts: res.data }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      //The Provider must be registered in the app.js file so that it can be given global access
      // This props in Context.Provider is required
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

// We will use Consumer to get the data in the Component
export const Consumer = Context.Consumer;
