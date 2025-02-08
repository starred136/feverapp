import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import FeverIsYourFriendVideoPage from "../components/FeverIsYourFriendVideoPage/FeverIsYourFriendVideoPage";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fever-is-your-friend" element={<FeverIsYourFriendVideoPage />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;