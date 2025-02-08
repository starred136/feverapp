// src/VideoPageRedirect.js
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importer useNavigate
import './HomePage.css';  // Si nécessaire, importer le CSS

function VideoPageRedirect() {
  const navigate = useNavigate();  // Déclarer useNavigate pour la redirection

  const handleSectionClick = () => {
    navigate('/videopage');  // Rediriger vers VideoPage
  };

  return (
    <div className="section" onClick={handleSectionClick}>  {/* Utiliser onClick pour rediriger */}
      <div className="circle small">
        <img src="assets/child-fever.png" alt="My child has a Fever" />
      </div>
      <p>My child has a Fever</p>
    </div>
  );
}

export default VideoPageRedirect;
