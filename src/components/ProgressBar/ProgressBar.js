// ProgressBar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProgressBar.css";

const ProgressBar = ({ backLink, skipLink }) => {
  const navigate = useNavigate();

  return (
    <div className="ProgressBar">
      {/* BackArrowLink */}
      {backLink && (
        <div className="BackArrowLink" onClick={() => navigate(backLink)}>
          <img className="Back-icon" src="assets/back-icon.png" alt="Back"/>
        </div>
      )}

      {/* ProgressBar Image */}
      <div className="ProgressBarImage">
        <img src="assets/prog-icon.png" alt="Progress Bar" />
      </div>

      {/* SkipLink */}
      {skipLink ? (
        <p className="SkipLink" onClick={() => navigate(skipLink)}>
          Skip
        </p>
      ) : (
        <p className="SkipLink">Skip</p> // Affiche Skip sans redirection
      )}
    </div>
  );
};

export default ProgressBar;
