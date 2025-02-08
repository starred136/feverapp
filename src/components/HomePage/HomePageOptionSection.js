import React from "react";
import HomePageChildHasFeverOptionSectionItem from "./HomePageChildHasFeverOptionSectionItem";
import HomePageSeeDoctorOptionSectionItem from "./HomePageSeeDoctorOptionSectionItem";
import HomePageMedecineSectionOptionItem from "./HomePageMedecineSectionOptionItem";
import HomePageInfoLibraryOptionSectionItem from "./HomePageInfoLibraryOptionSectionItem";
import "./HomePage.css";
const HomePageOptionSection = () => {
  return (
    <div className="HomePageOptionSection">
      <HomePageChildHasFeverOptionSectionItem />
      <HomePageSeeDoctorOptionSectionItem />
      <HomePageMedecineSectionOptionItem />
      <HomePageInfoLibraryOptionSectionItem />
    </div>
  );
};
export default HomePageOptionSection;