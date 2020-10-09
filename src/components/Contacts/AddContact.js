import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputGroup from "../layouts/TextInputGroup";
import { v4 as uuidv4 } from 'uuid';

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors:{}
  };
  onSubmit = (dispatch,e) => {
    e.preventDefault();
    const { name,email,phone} = this.state;

    //Checking Errors in input field
    if(name === ''){
      this.setState({errors : {
        name:'Name is Required'
      }});
      return;
    }
    if(email === ''){
      this.setState({errors : {
        email:'Email is Required'
      }});
      return;
    }
    if(phone === ''){
      this.setState({errors : {
        phone:'Phone is Required'
      }});
      return;
    }
    //Creating a new Contact
    const newContact ={
        id:uuidv4(),
        name,
        email,
        phone
    }

    dispatch({type:'ADD_CONTACT',payload:newContact});

    //Clear State
    this.setState({
        name:'',
        email:'',
        phone:'',
        errors:{}
    });

    //Redirecting
    this.props.history.push('/');
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    //Passing the function as a parameter in setState gives you an event is nullified error to get rid of it you should use e.persist() in tht beginning of function
  };
  render() {
    const { name, email, phone, errors} = this.state;
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
                  <TextInputGroup 
                    label="Name"
                    name="name"
                    placeholder="Enter Name Please..."
                    value={name}
                    onChange={this.onChange}
                    error ={errors.name}
                  />
                  <TextInputGroup 
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Email Please..."
                    value={email}
                    onChange={this.onChange}
                    error ={errors.email}
                  />
                  <TextInputGroup 
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone Please..."
                    value={phone}
                    onChange={this.onChange}
                    error = {errors.phone}
                  />
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
