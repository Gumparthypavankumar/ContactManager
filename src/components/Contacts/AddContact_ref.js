import React, { Component } from 'react';

class AddContact extends Component
{
    constructor(props){
        super(props);
        //Creating the references 
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    static defaultProps={
        name:'Fred Smith',
        email:'fredsmith@email.com',
        phone:'777-777-77777'
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const contact = {
            //Getting the value entered in the input fields
            name:this.nameInput.current.value,
            email:this.emailInput.current.value,
            phone:this.phoneInput.current.value
        }
        console.log(contact);
    }
    render(){
        const { name,email,phone } = this.props;
        return (
            <div className="card my-2">
                <div className="card-header">
                    <h1>Add Component</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" 
                            id="name"
                            className="form-control"
                            placeholder="Enter Name Please..."
                            defaultValue={name}
                            //Creating the name input field as a reference so that we can not control form inputs with state
                            ref={this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" 
                            id="email"
                            className="form-control"
                            placeholder="Enter Email Please..."
                            defaultValue={email}
                            //Creating the email input field as a reference so that we can not control form inputs with state
                            ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone"
                            id="phone" className="form-control"
                            placeholder="Enter Phone Please..."
                            defaultValue={phone}
                            autoComplete="off"
                            //Creating the phone input field as a reference so that we can not control form inputs with state
                            ref={this.phoneInput}
                            />
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-primary btn-block"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;