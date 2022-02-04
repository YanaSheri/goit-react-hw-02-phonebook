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
  };

  handleClick = (e) => {
    console.log(e.currentTarget.value);
    const { name, value } = e.currentTarget;
    console.log(e);
    console.log(name);
    console.log(value);
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
      const newContact = {
        ...this.state,
        name: this.state.name,
        id: nanoid(),
      };
      console.log(newContact);
      this.state.contacts.addContact(newContact);
  };

    addContact = (newContact) => {
      this.setState((prev) => ({
        contacts: [...prev.contacts, newContact],
      }));
    };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleClick}
          />
        </label>
        <button
          type="submit"
          //   onClick={this.handleClick}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default App;




