import "./ChatNav.css";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useContext } from "react";
import { ChatContext } from "../../contexts/ChatContext";

const ChatNav = ({ selectedChat }) => {
  const { setSelectedChat } = useContext(ChatContext);
  const clearSelectedChat = () => {
    setSelectedChat(null);
  };
  return (
    <div className="chatnav">
      <div className="chatnav__left">
        <BiArrowBack className="arow" onClick={clearSelectedChat} />
        <img className="img-p" src={selectedChat.photoUrl} />
        <h2> {selectedChat.name} </h2>
      </div>
      <div className="chatnav__right">
        <p>6/100</p>
        <AiOutlineUsergroupAdd className="user" />
      </div>
    </div>
  );
};

export default ChatNav;
