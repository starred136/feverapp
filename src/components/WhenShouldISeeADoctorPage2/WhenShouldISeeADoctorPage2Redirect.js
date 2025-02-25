import React from "react";
import { useNavigate } from "react-router-dom";

const WhenShouldISeeADoctorPage2Redirect = ({ children, targetPath }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(targetPath);
  };

  return (
    <div className="WhenShouldISeeADoctorPage2Redirect" onClick={handleRedirect}>
      {children}
    </div>
  );
};

export default WhenShouldISeeADoctorPage2Redirect;
