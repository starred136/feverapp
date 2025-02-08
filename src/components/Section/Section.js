import React from 'react';
import './Section.css';

const Section = ({ sectionId, image, text, link, customClass = '' }) => {
  return (
    <a href={link} className={`carts ${customClass}`} id={sectionId}>
      <div className="section">
        <div className="circle">
          <img src={image} alt={text} />
        </div>
        <p>{text}</p>
      </div>
    </a>
  );
};

export default Section;
