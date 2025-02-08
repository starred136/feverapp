import React from 'react';
import VideoPageRedirect from './VideoPageRedirect';  // Importer le composant VideoPageRedirect
import './HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <h1>What can we help you with?</h1>
      <div className="sections">
        {/* Section 1 : My child has a Fever */}
        <div className="carts">
          <VideoPageRedirect />  {/* Utiliser VideoPageRedirect ici */}
        </div>

        {/* Section 2 : Should I see a Doctor? */}
        <a href="#" className="carts">
          <div className="section">
            <div className="circle small">
              <img src="assets/doctor.png" alt="Should I see a Doctor?" />
            </div>
            <p>Should I see a Doctor?</p>
          </div>
        </a>

        {/* Section 3 : Ibuprofen, Paracetamol, Fever Juice, Antibiotics? */}
        <a href="#" className="carts">
          <div className="section">
            <div className="circle large custom-bg">
              <img src="assets/medications.png" alt="Ibuprofen, Paracetamol, Fever Juice, Antibiotics?" />
            </div>
            <p>Ibuprofen, Paracetamol, <br/>Fever Juice, Antibiotics?</p>
          </div>
        </a>

        {/* Section 4 : Info Library */}
        <a href="#" className="carts">
          <div className="section">
            <div className="circle small custom-bg">
              <img src="assets/info-library.png" alt="Info Library" />
            </div>
            <p>Info Library</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
