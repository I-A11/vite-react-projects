import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <p>{title}</p>
      <p>{info}</p>
    </div>
  );
};
export default SingleQuestion;
