import React, { Component } from 'react';

class ContactForm extends Component {

    state = {
        name: '',
        number: ''
    }


    handleSubmit = (e) => {
        e.preventDefault();
        // передаем данные из этого state через проп в App
        this.props.onSubmit(this.state)
        this.reset();
    }
    
    handleChange = e => {
        this.setState(
            {[e.currentTarget.name]: e.currentTarget.value}
        )
    }

    reset = () =>
    {
        this.setState({
            name: '',
            number: ''
        })
        }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={this.state.name}
                        onChange = {this.handleChange}
                    />
                </label>
                <label>Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={this.state.number}
                        onChange = {this.handleChange}
                        />
                </label>
                <button type = "submit">Add contact</button>
            </form>    
        )
    }
}

export default ContactForm;