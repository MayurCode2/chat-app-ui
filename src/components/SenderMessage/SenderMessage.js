import "./SenderMessage.css";
import { AiFillLike } from "react-icons/ai";
import { useState } from "react";

const SenderMessage = ({ message }) => {
  const [like, setlike] = useState(0);
  const handleLikes = () => {
    setlike(like + 1);
  };
  return (
    <div className="sendermessage">
      <p>{message.content}</p>
      <span>
        {message.timestamp} <AiFillLike onClick={handleLikes} /> <p>{like}</p>
      </span>
    </div>
  );
};

export default SenderMessage;
