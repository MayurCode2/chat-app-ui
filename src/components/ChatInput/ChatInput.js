import "./ChatInput.css";
import { BsEmojiSmile } from "react-icons/bs";
import { useContext, useState } from "react";
import { ChatContext } from "../../contexts/ChatContext";
import Picker from "emoji-picker-react";

const ChatInput = ({ setMessages }) => {
  const { selectedChat } = useContext(ChatContext);
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const sendMessage = (e) => {
    e.preventDefault();
    if (message !== "") {
      const newMessage = {
        type: "sent",
        content: message,
        timestamp: "9:10 AM"
      };
      setMessages([...selectedChat.messages, newMessage]);
      selectedChat.messages.push(newMessage);
      setMessage("");
      setShowPicker(false);
    }
  };
  const togglePicker = () => {
    setShowPicker(!showPicker);
  };
  const addEmoji = (e, emoji) => {
    setMessage(message + emoji.emoji);
  };
  return (
    <div className="chatinput">
      <div className="chatinput__form">
        {showPicker && <Picker onEmojiClick={addEmoji} />}
        <BsEmojiSmile className="emoji" onClick={togglePicker} />
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={message}
            placeholder="Type a message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
