import "./ContactCard.css";

import { useContext } from "react";
import { ChatContext } from "../../contexts/ChatContext";

const ContactCard = ({ contact }) => {
  const { setSelectedChat } = useContext(ChatContext);
  const openChat = () => {
    setSelectedChat(contact);
  };
  return (
    <div className="contactcard" onClick={openChat}>
      <img className="user-img" src={contact.photoUrl} />
      <div className="contactcard__username">
        <h3> {contact.name} </h3>
      </div>
    </div>
  );
};

export default ContactCard;
