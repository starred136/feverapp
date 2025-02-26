import React from "react";
import { useNavigate } from "react-router-dom";

const FeverIsYourFriendPageNextButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="FeverIsYourFriendPageNextButton"
      onClick={() => navigate("/when-should-i-see-a-doctor-1")}
    >
      Next
    </button>
  );
};

export default FeverIsYourFriendPageNextButton;
