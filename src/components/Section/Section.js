import React from 'react';
import './Section.css';

const Section = ({ image, text, link }) => {
  return (
    <a href={link} className="carts">
      <div className="section">
        <div className="circle small">
          <img src={image} alt={text} />
        </div>
        <p>{text}</p>
      </div>
    </a>
  );
};

export default Section;