import React, { Component } from 'react'
import Contact from './Contact';

import { Consumer } from '../Context';

class Contacts extends Component {
    deleteContact = (id)=>{
       const newContacts =  this.state.contacts.filter(contact => contact.id!==id);
        this.setState((state) => ({contacts : newContacts}))
    }
    render() {
        return (
            //Here We are accessing the global state to do that we require consumer so wrap everything in the Consumer class
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                    <React.Fragment>
                        {contacts.map(contact => 
                            <Contact key={contact.id} contact={contact}
                            deleteClickHandler={this.deleteContact.bind(this,contact.id)}
                            />
                        )}
                    </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;