import React from "react";
import { useNavigate } from "react-router-dom";
const ProgressBar = () => {
  const navigate = useNavigate();
  return (
    <div className="FeverIsYourFriendNavBar">
      <div className="BackArrowLink" onClick={() => navigate("/")}>
        <img src="assets/back-icon.png" alt="Back" />
      </div>
      <div className="ProgressBar">
        <img src="assets/prog-icon.png" alt="Progress Bar" />
      </div>
      <button className="SkipLink" onClick={() => navigate("/")}>
        Skip
      </button>
    </div>
  );
};
export default ProgressBar;