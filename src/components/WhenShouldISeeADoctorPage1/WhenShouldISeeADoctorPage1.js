import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import WhenShouldISeeADoctorPageHeader from "../WhenShouldISeeADoctorPageHeader/WhenShouldISeeADoctorPageHeader";
import WhenShouldISeeADoctorPage1OptionLists from "./WhenShouldISeeADoctorPage1OptionLists";
import WhenShouldISeeDoctorPage1SkipButton from "./WhenShouldISeeDoctorPage1SkipButton"; // Utilisation du composant
import "./WhenShouldISeeADoctorPage1.css";

const WhenShouldISeeADoctorPage1 = () => {
  return (
    <div className="container">
      <ProgressBar
        backLink="/fever-is-your-friend"
        skipLink="/when-should-i-see-a-doctor-2"
      />
      <WhenShouldISeeADoctorPageHeader />
      <WhenShouldISeeADoctorPage1OptionLists />
      {/* Intégration du composant dédié pour le bouton Skip */}
      <div className="WhenShouldISeeDoctorPage1SkipButton">
        <WhenShouldISeeDoctorPage1SkipButton />
      </div>
    </div>
  );
};

export default WhenShouldISeeADoctorPage1;
