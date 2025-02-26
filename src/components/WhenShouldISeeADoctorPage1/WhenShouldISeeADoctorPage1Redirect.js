import React from "react";
import { useNavigate } from "react-router-dom";

const WhenShouldISeeADoctorPage1Redirect = ({ children }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/when-should-i-see-a-doctor-1");
  };

  return (
    <div className="RedirectContainer" onClick={handleRedirect}>
      {children}
    </div>
  );
};

export default WhenShouldISeeADoctorPage1Redirect;
