import React from "react";
import ProgressBar from "./ProgressBar";
import FeverIsYourFriendPageHeader from "./FeverIsYourFriendPageHeader";
import FeverIsYourFriendPageVideo from "./FeverIsYourFriendPageVideo";
import FeverIsYourFriendPageNextButton from "./FeverIsYourFriendPageNextButton";
import "./FeverIsYourFriendVideoPage.css";
const FeverIsYourFriendVideoPage = () => {
  return (
    <div className="container">
      <ProgressBar />
      <FeverIsYourFriendPageHeader />
      <FeverIsYourFriendPageVideo />
      <FeverIsYourFriendPageNextButton />
    </div>
  );
};
export default FeverIsYourFriendVideoPage;