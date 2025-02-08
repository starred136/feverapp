import React from "react";
import { useNavigate } from "react-router-dom";
const FeverIsYourFriendVideoPageRedirect = ({ targetPath, children }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(targetPath);
  };
  return (
    <div className="FeverIsYourFriendVideoPageRedirect" onClick={handleRedirect}>
      {children}
    </div>
  );
};
export default FeverIsYourFriendVideoPageRedirect;