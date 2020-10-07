import React, { Component } from "react";
import PropTypes from "prop-types";

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
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };
  render() {
    const { name, email, phone } = this.props.contact;
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
            onClick={this.onDeleteClick}
          ></i>
        </h3>
        {this.state.showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
          </ul>
        ) : null}
      </div>
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
  deleteClickHandler:PropTypes.func.isRequired
};
export default Contact;
