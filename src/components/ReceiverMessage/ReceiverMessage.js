import { useState } from "react";
import "./ReceiverMessage.css";
import { AiFillLike } from "react-icons/ai";

const ReceiverMessage = ({ message }) => {
  const [like, setlike] = useState(0);
  const handleLikes = () => {
    setlike(like + 1);
  };
  return (
    <div className="receivermessage">
      <p>{message.content}</p>
      <span>
        {message.timestamp}
        <AiFillLike onClick={handleLikes} /> <p>{like}</p>
      </span>
    </div>
  );
};

export default ReceiverMessage;
