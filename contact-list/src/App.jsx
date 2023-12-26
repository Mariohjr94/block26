import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/contactList";
import SelectedContact from "./components/SelectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contacts, setContacts] = useState([]);

  const selectedContact = contacts.find(
    (contact) => contact.id === selectedContactId
  );

  useEffect(() => {
    const handleContacts = async () => {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const contacts = await response.json();
        setContacts(contacts);
      } catch (error) {
        console.log(error);
      }
    };
    handleContacts();
  }, []);

  return (
    <>
      <ContactList
        contacts={contacts}
        setSelectedContactId={setSelectedContactId}
      />
      <SelectedContact selectedContact={selectedContact} />
    </>
  );
}

export default App;
