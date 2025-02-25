// WhenShouldISeeADoctorPage2.js
import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import WhenShouldISeeADoctorPageHeader from "../WhenShouldISeeADoctorPageHeader/WhenShouldISeeADoctorPageHeader";
import WhenShouldISeeADoctorPage2OptionLists from "./WhenShouldISeeADoctorPage2OptionLists";
import "./WhenShouldISeeADoctorPage2.css";

const WhenShouldISeeADoctorPage2 = () => {
  return (
    <div className="container">
      <ProgressBar backLink="/when-should-i-see-a-doctor-1"/>
      <WhenShouldISeeADoctorPageHeader />
      <WhenShouldISeeADoctorPage2OptionLists />
    </div>
  );
};

export default WhenShouldISeeADoctorPage2;
