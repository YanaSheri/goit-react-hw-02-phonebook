// import logo from './logo.svg';
// import './App.css';
import { Component } from "react";
import { nanoid } from "nanoid";
// import { render } from "@testing-library/react";
// import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    };
    this.setState((prevState) => {
      const { contacts } = prevState;
      const newContacts = [
        ...contacts,
        newContact,
      ];
      return {
        contacts: newContacts,
        name: "",
        number: "",
      };
    });
  };

  render() {
    //const contacts = this.state.contacts;
    //const name = this.state.name;
    //то же самое
    const { contacts, name, number } = this.state;

    const contactElements = contacts.map(
      (contact) => (
        <li key={contact.id}>{contact.name}: {contact.number }</li>
      )
    );

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={name}
            />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={number}
            />
          </label>
          <button
            type="submit"
            //   onClick={this.handleClick}
          >
            Add contact
          </button>
        </form>
        <ul>{contactElements}</ul>
      </>
    );
  }
}

export default App;




