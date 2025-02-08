import React from "react";
import HomePageHeader from "./HomePageHeader";
import HomePageOptionSection from "./HomePageOptionSection";
import "./HomePage.css";



const HomePage = () => {
  return (
    <div className="container">
      <HomePageHeader />
      <HomePageOptionSection />
    </div>
  );
};




export default HomePage;