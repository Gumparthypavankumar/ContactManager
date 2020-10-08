import React, { Component } from "react";
import { Consumer } from "../../Context";
import { v4 as uuidv4 } from 'uuid';

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };
  onSubmit = (dispatch,e) => {
    e.preventDefault();
    const { name,email,phone} = this.state;

    //Creating a new Contact
    const newContact ={
        id:uuidv4(),
        name,
        email,
        phone
    }

    dispatch({type:'ADD_CONTACT',payload:newContact});

    this.setState({
        name:'',
        email:'',
        phone:''
    });

  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    //Passing the function as a parameter in setState gives you an event is nullified error to get rid of it you should use e.persist() in tht beginning of function
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card my-2">
              <div className="card-header">
                <h1>Add Component</h1>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Enter Name Please..."
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter Email Please..."
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder="Enter Phone Please..."
                      value={phone}
                      onChange={this.onChange}
                      autoComplete="off"
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-primary btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
