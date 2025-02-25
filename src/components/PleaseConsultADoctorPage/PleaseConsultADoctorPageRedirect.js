import React from "react";
import { useNavigate } from "react-router-dom";

const PleaseConsultADoctorPageRedirect = ({ children, targetPath }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(targetPath);
  };

  return (
    <div className="PleaseConsultADoctorPageRedirect" onClick={handleRedirect}>
      {children}
    </div>
  );
};

export default PleaseConsultADoctorPageRedirect;
