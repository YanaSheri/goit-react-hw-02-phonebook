// import logo from './logo.svg';
// import './App.css';
import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
// import { render } from "@testing-library/react";
// import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [
      {
        id: "id-1",
        name: "Rosie Simpson",
        number: "459-12-56",
      },
      {
        id: "id-2",
        name: "Hermione Kline",
        number: "443-89-12",
      },
      {
        id: "id-3",
        name: "Eden Clements",
        number: "645-17-79",
      },
      {
        id: "id-4",
        name: "Annie Copeland",
        number: "227-91-26",
      },
    ],
    filter: "",
  };

  // handleChange = (e) => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({ [name]: value });
  //   console.log(name);
  //   console.log(value);
  // };

  handleFilter = (e) => {
    const value = e.currentTarget.value;
    console.log(value);
    this.setState({
      filter: value,
    });
  };


  stateChange = (newContact) => {
    this.setState(
      (prevState) => ({
        contacts: [
          ...prevState.contacts,
          newContact,
        ],
      })
    );
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newContact = {
  //     name: this.state.name,
  //     id: nanoid(),
  //     number: this.state.number,
  //   };
  //   this.setState((prevState) => {
  //     const { contacts } = prevState;
  //     const newContacts = [
  //       ...contacts,
  //       newContact,
  //     ];
  //     return {
  //       contacts: newContacts,
  //       name: "",
  //       number: "",
  //       filter: "",
  //     };
  //   });
  // };

  render() {
    //const contacts = this.state.contacts;
    //const name = this.state.name;
    //то же самое
    const { contacts, name, number, filter } =
      this.state;
    const contactElements = contacts.map(
      (contact) =>
        contact.name
          .toLowerCase()
          .includes(filter.toLowerCase()) && (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        )
    );
    // const contactElements = contacts.map(
    //   (contact) => (
    //     <li key={contact.id}>
    //       {contact.name}: {contact.number}
    //     </li>
    //   )
    // );

    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm
          stateChange={this.stateChange}
        />
        {/* <form onSubmit={this.handleSubmit}>
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
          </label>
          <label>
            Number
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
          <button type="submit">
            Add contact
          </button>
        </form> */}
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            // name="filter"
            onChange={this.handleFilter}
            value={filter}
          />
        </label>
        <ul>{contactElements}</ul>
      </>
    );
  }
}

export default App;




