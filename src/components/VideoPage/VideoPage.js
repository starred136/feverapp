// src/FeverIsYourFriendVideoPage.js
import React from 'react';
import './VideoPage.css';

function FeverIsYourFriendVideoPage() {
  return (
    <div className="container">
      <div className="header">
        <div className="header_skip">
          <a href="/page1">
            <img src="assets/back-icon.png" alt="Back" id="backIcon" />
          </a>
          <div className="progress-bar">
            <img src="assets/prog-icon.png" alt="Progress" />
          </div>
          <a href="#" className="skip-link">Skip</a>
        </div>
        <h1>Fever is your friend!</h1>
        <p className="p1">Does Fever always need to be treated with Antibiotics?</p>
      </div>

      <div className="video-container">
        <iframe src="https://drive.google.com/file/d/1bEZdIk-X1E_2aajGqq5Wy3axaignE7J6/preview" width="100%" height="280" allow="autoplay"></iframe>
      </div>
      <button className="next-button">Next</button>
    </div>
  );
}

export default FeverIsYourFriendVideoPage;
