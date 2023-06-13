import React from 'react';

import { nanoid } from 'nanoid';

export class App extends React.Component {
  nanoIdName = nanoid();
  nanoIdNumber = nanoid();

  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  onWriteName=(e) => {
    this.setState({name: e.target.value});
  };

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <form action="">
          <label htmlFor={this.nanoIdName}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.onWriteName}
              required
            />
          </label>
          <label htmlFor={this.nanoIdNumber}>Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.onWriteNumber}
              required
            />
          </label>
          </form>
          <button type="submit">Add Contact</button>
        </div>

        <div>
          <h1>Contacts</h1>
          <p>Find contacts by name</p>
          <input type="text" />
          <ul>
            <li>Rosie Simpson: 645-17-79</li>
            <li>Hermione Kline: 443-89-12</li>
            <li>Eden Clements: 459-12-56</li>
          </ul>
        </div>
      </>
    );
  }
}
