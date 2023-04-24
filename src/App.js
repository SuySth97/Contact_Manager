import React from "react";
import Contact from "./components/Contact";
import ContactAdder from "./components/ContactAdder";
import { useState } from "react";

import "./styles/app.css";
import Navbar from "./components/Navbar";

const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

  const clearContacts = () => {
    localStorage.clear();
    setContacts([]);
  };

  return (
    <>
      <Navbar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>

      <div className="container">
        <h2>Contact List :</h2>
        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}

        <button onClick={clearContacts} style={{ backgroundColor: "red" }}>
          Clear Contacts
        </button>
      </div>
    </>
  );
};

export default App;
