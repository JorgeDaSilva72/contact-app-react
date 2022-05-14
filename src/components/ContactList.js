import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "jorge",
  //     email: "jorge@gmail.com",
  //   },
  //];
  const renderContactList = props.contacts.map((contact) => {
    // const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>Contact List</h2>
      {/* <div className="main2">
        <Link to="/add">
          <button className="ui button blue right">
            Go to the Add Contact Page
          </button>
        </Link>
      </div> */}
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
