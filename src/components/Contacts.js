import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    constructor(){
        super();
        this.state = {
            contacts : [
                {
                    id:1,
                    name:'John Doe',
                    email:'john@email.com',
                    phone:'5555-5555-555'
                },
                {
                    id:2,
                    name:'Karen Smith',
                    email:'john@email.com',
                    phone:'3333-3333-333'
                },
                {
                    id:3,
                    name:'Harry williams',
                    email:'harry@email.com',
                    phone:'2222-2222-222'
                }
            ]
        }
    }
    // deleteContact = ()=>{
    //     console.log("Hello");
    // }
    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => 
                    <Contact key={contact.id} name={contact.name} email={contact.email} phone = {contact.phone}
                    //  onClick={this.deleteContact.bind(this)}
                     />
                )}
            </React.Fragment>
        )
    }
}

export default Contacts;