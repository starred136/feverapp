import React from 'react';
import './HomePage.css';  // Import du fichier CSS spécifique à cette page

const HomePage = () => {
  return (
    <div className="container">
      <h1>What can we help you with?</h1>
      <div className="sections">
        <a href="/page2" className="carts">
          <div className="section">
            <div className="circle small">
              <img src="/assets/child-fever.png" alt="My child has a Fever" />
            </div>
            <p>My child has a Fever</p>
          </div>
        </a>
        <a href="/page2" className="carts">
          <div className="section">
            <div className="circle small">
              <img src="/assets/doctor.png" alt="Should I see a Doctor?" />
            </div>
            <p>Should I see a Doctor?</p>
          </div>
        </a>
        <a href="/page2" className="carts">
          <div className="section">
            <div className="circle large custom-bg">
              <img src="/assets/medications.png" alt="Ibuprofen, Paracetamol, Fever Juice, Antibiotics?" />
            </div>
            <p>Ibuprofen, Paracetamol, <br /> Fever Juice, Antibiotics?</p>
          </div>
        </a>
        <a href="/page2" className="carts">
          <div className="section">
            <div className="circle small custom-bg">
              <img src="/assets/info-library.png" alt="Info Library" />
            </div>
            <p>Info Library</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
