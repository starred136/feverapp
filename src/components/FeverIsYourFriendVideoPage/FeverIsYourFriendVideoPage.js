import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import FeverIsYourFriendPageHeader from "./FeverIsYourFriendPageHeader";
import FeverIsYourFriendPageVideo from "./FeverIsYourFriendPageVideo";
import FeverIsYourFriendPageNextButton from "./FeverIsYourFriendPageNextButton";
import "./FeverIsYourFriendVideoPage.css";

const FeverIsYourFriendVideoPage = () => {
  return (
    <div className="container">
      <ProgressBar backLink="/" skipLink="/when-should-i-see-a-doctor-1" />
      <FeverIsYourFriendPageHeader />
      <FeverIsYourFriendPageVideo />
      <FeverIsYourFriendPageNextButton />
    </div>
  );
};

export default FeverIsYourFriendVideoPage;
