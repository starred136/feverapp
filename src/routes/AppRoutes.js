import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import FeverIsYourFriendVideoPage from "../components/FeverIsYourFriendVideoPage/FeverIsYourFriendVideoPage";
import WhenShouldISeeADoctorPage1 from "../components/WhenShouldISeeADoctorPage1/WhenShouldISeeADoctorPage1";
import WhenShouldISeeADoctorPage2 from "../components/WhenShouldISeeADoctorPage2/WhenShouldISeeADoctorPage2";
import PleaseConsultADoctorPage from "../components/PleaseConsultADoctorPage/PleaseConsultADoctorPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fever-is-your-friend" element={<FeverIsYourFriendVideoPage />} />
        <Route path="/when-should-i-see-a-doctor-1" element={<WhenShouldISeeADoctorPage1 />} />
        <Route path="/when-should-i-see-a-doctor-2" element={<WhenShouldISeeADoctorPage2 />} />
        <Route path="/please-consult-a-doctor" element={<PleaseConsultADoctorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
