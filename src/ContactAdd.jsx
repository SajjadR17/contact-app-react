import { useState } from "react";
import ContactsList from "./contactsList";

function ContactAddSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "", 
    lastName: "",
  });

  const [contacts, setContacts] = useState([]);
  const [availableContactErr, setAvailableContactErr] = useState(false);
  const [validDataErr, setValidDataErr] = useState(false);

  function changeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;

    setForm((form) => ({ ...form, [name]: value }));
  }

  function submitHandler() {
    if (
      form.email.length === 0 ||
      form.email.length > 35 ||
      form.name.length > 12 ||
      form.lastName.length === 0 ||
      form.lastName.length > 12 ||
      form.name.length === 0 ||
      form.phone.length !== 11 ||
      isNaN(form.phone)
    ) {
      setValidDataErr(true);
      return;
    }

    const availableContact = contacts.find(
      (contact) =>
        contact.name.toLowerCase() === form.name.toLowerCase() &&
        contact.lastName.toLowerCase() === form.lastName.toLowerCase(),
    );

    const availableContactPhone = contacts.find(
      (contact) => contact.phone === form.phone,
    );

    if (availableContact || availableContactPhone) {
      setAvailableContactErr(true);
      return;
    }

    setForm({
      name: "",
      email: "",
      phone: "",
      lastName: "",
    });
    setContacts((contacts) => [...contacts, form]);
    setAvailableContactErr(false);
    setValidDataErr(false);
  }

  return (
    <>
      <div className="contact-add-section">
        <div className="contact-add-inputs">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={changeHandler}
          />
        </div>
        <button className="add-contact-btn" onClick={submitHandler}>
          Add Contact
        </button>
      </div>
      {availableContactErr && (
        <div className="err">
          You have a contact with this name or phone number !!
        </div>
      )}
      {validDataErr && <div className="err">Please enter valid data !!</div>}
      <ContactsList contacts={contacts} />
    </>
  );
}

export default ContactAddSection;
