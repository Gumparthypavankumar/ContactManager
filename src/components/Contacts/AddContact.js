import React, { Component } from 'react';

class AddContact extends Component
{
    state={
        name:'',
        email:'',
        phone:''
    };
    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
        //Passing the function as a parameter in setState gives you an event is nullified error to get rid of it you should use e.persist() in tht beginning of function
    }
    render(){
        const { name,email,phone } = this.state;
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
                            value={name}
                            onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" 
                            id="email"
                            className="form-control"
                            placeholder="Enter Email Please..."
                            value={email}
                            onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone"
                            id="phone" className="form-control"
                            placeholder="Enter Phone Please..."
                            value={phone}
                            onChange={this.onChange}/>
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-primary btn-block"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;