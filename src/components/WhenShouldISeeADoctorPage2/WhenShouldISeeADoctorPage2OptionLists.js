import React from "react";
import { useNavigate } from "react-router-dom";
import "./WhenShouldISeeADoctorPage2.css";

const WhenShouldISeeADoctorPage2OptionLists = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/please-consult-a-doctor");
  };

  return (
    <div className="WhenShouldISeeADoctorPage2OptionLists">
      <button
        className="OptionButton AlteredConsciousnessButton"
        onClick={handleRedirect}
      >
        Altered consciousness
      </button>
      <button
        className="OptionButton NonBlanchingRashButton"
        onClick={handleRedirect}
      >
        Non-blanching rash
      </button>
      <button
        className="OptionButton FeverOver40CButton"
        onClick={handleRedirect}
      >
        Fever over 40°C in the morning
      </button>
      <button
        className="OptionButton FeverForOver3DaysButton"
        onClick={handleRedirect}
      >
        Fever for over 3 days
      </button>
      <button
        className="OptionButton VeryConcernedButton"
        onClick={handleRedirect}
      >
        You are very concerned
      </button>
    </div>
  );
};

export default WhenShouldISeeADoctorPage2OptionLists;
