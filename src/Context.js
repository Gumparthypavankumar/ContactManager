import React,{ Component } from 'react';

//Creating a Context
const Context = React.createContext();

// Creating The Reducer
const reducer = (state,action) => {
    switch (action.type){
        case 'DELETE_CONTACT':
           return state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        default:
            return state;
    }
}
export class Provider extends Component{
    state = {
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
        ],
        dispatch: (action) => {
           this.setState((state) => reducer(state,action))
        }
    };

    render(){
        return(
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