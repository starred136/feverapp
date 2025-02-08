import React from "react";
import { useNavigate } from "react-router-dom";
const FeverIsYourFriendPageNextButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="FeverIsYourFriendPageNextButton"
      onClick={() => navigate("/")}
    >
      Next
    </button>
  );
};
export default FeverIsYourFriendPageNextButton;