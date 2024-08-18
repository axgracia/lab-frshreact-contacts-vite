import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json"; 


function App() {
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <ContactList />
    </div>
  );
}

const ContactList = () => {
  // Step 1: Initialize state with an array of 5 contacts
  const [contactList] = useState(contacts.slice(0, 6));

  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      </thead>
      <tbody>
        {contactList.map((contact, index) => (
          <tr key={index}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name} width="50" />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? '🏆' : ''}</td>
            <td>{contact.wonEmmy ? '🌟' : ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App;
