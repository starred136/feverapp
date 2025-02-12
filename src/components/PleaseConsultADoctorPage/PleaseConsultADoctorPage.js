import React from "react";
import "./PleaseConsultADoctorPage.css";

const PleaseConsultADoctorPage = () => {
  return (
    <div className="PleaseConsultADoctorPage">
      <img src="assets/doctor-advice.png" alt="Doctor Advice" />
      <h1 className="PleaseConsultADoctorHeader">Please consult a Doctor</h1>
      <ul className="AdviceList">
        <li>Your child has a fever over 40 °C with other warning signs.</li>
        <li>All infants under 12 weeks with fever should see a doctor.</li>
      </ul>
      <button className="NextButton">Next</button>
    </div>
  );
};

export default PleaseConsultADoctorPage;
