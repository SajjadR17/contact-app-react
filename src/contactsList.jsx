function ContactsList({ contacts }) {
  const availableContactInArr = contacts.length;

  function ContactsListRender() {
    if (!availableContactInArr) {
      return <p className="no-contact">You don't have any contacts yet !!</p>;
    }

    let index = 0;

    return contacts.map((contact) => (
      <div className="contact" key={index}>
        <div className="contact-name">
          <span className="user-icon">👤</span>  {contact.name} {contact.lastName}
        </div>
        <div className="contact-email">
          <span className="mail-icon">✉️</span> {contact.email}
        </div>
        <div className="contact-phone">
          <span className="phone-icon">📞</span> {contact.phone}
        </div>
      </div>
    ));
  }

  return (
    <div className="contacts-list">
      <h1 className="contacts-list-title">Contacts</h1>
      <div className="list">
        <ContactsListRender />
      </div>
    </div>
  );
}

export default ContactsList;
