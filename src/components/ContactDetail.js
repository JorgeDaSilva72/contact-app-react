import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactDetail = (props) => {
  console.log(props.location.state.contact);
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">jorge</div>
          <div className="description">jorge@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
