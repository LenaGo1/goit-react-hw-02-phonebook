import React, { Component } from 'react';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList'
import shortid from 'shortid';

class App extends Component {
    state = {
        contacts: [],
        
    }    
    
    formSubmitHandler = (data) => {        
        data['id'] = shortid.generate();

        // const newContact = this.state.contacts.concat(data)
        // this.setState(prevState=>({ contacts: newContact}))
        this.setState(prevState=>({ contacts: [...prevState.contacts, data]}))
    }

    render() {

        return (
            <div>
                <h1>Phonebook</h1>
                {/* передаем проп onSubmit для ContactForm, сюда будет прокидываться data из ContactForm*/}
                <ContactForm onSubmit={this.formSubmitHandler}/>
                
                <h2>Contacts</h2>
                {/* <Filter /> */}
                <ContactList contacts={this.state.contacts}/>
            </div>
        )
    }
}

export default App;