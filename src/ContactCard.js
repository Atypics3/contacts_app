import React, { useState } from "react";

const ContactCard = (props) => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={props.avatarURL} alt="avatarURL"></img>
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>

        <button onClick={() => setShowAge(!showAge)}>Show Age</button>
        {/* if showAge == true, then show <p>. if not show nothing */}
        {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  );
};

export default ContactCard;
