import React from "react";
import { useNavigate } from "react-router-dom";
import "./WhenShouldISeeADoctorPage1.css";

const WhenShouldISeeDoctorPage1SkipButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="SkipButton"
      onClick={() => navigate("/when-should-i-see-a-doctor-2")}
    >
      Skip
    </button>
  );
};

export default WhenShouldISeeDoctorPage1SkipButton;
