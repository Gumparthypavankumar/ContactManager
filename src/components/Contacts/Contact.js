import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Consumer } from "../../Context";

class Contact extends Component {
  /*
  Generating event in react the function has no access of the state to have the access there are threee ways 
  1.Constructor
  2.using bind when calling method and passing this
  3.using arrow functions
  constructor(){
    super();
    this.state = {};
    this.onShowClick = this.onShowClick.bind(this);
  }
  */
  state = {
    showContactInfo: true,
  };
  onDeleteClick = (id,dispatch) => {
    try{
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({type:'DELETE_CONTACT' , payload:id}))
      .catch(err => console.log(err));
    }
    catch(e){
      dispatch({type:'DELETE_CONTACT' , payload:id})
    }
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      //To use the global state everything should be inside Consumer class
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mt-3">
              <h3>
                {name}
                <i
                  className="fa fa-caret-down"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.setState((state) => ({
                      showContactInfo: !state.showContactInfo,
                    }));
                  }}
                ></i>
                <i
                  className="fa fa-trash-o"
                  style={DeleteStyling}
                  onClick={this.onDeleteClick.bind(this,id,dispatch)}
                >
                </i>
                <Link to={`/contacts/edit/${id}`} style={{marginRight:'1rem',cursor:'pointer',color:'black',float:'right'}}><i className="fa fa-pencil"></i></Link>
              </h3>
              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

const DeleteStyling = {
  cursor: "pointer",
  color: "red",
  float: "right",
};
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default Contact;
