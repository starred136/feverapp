import React from 'react';
import ProgressBar from "../ProgressBar/ProgressBar";
import PleaseConsultADoctorPageImage from './PleaseConsultADoctorPageImage';
import PleaseConsultADoctorPageHeader from './PleaseConsultADoctorPageHeader';
import PleaseConsultADoctorPageWarningSign from './PleaseConsultADoctorPageWarningSign';
import PleaseConsultADoctorPageNextButton from './PleaseConsultADoctorPageNextButton';
import './PleaseConsultADoctorPage.css';

const PleaseConsultADoctorPage = () => {
    return (
        <div className="container">
            {/* Ajout de ProgressBar avec BackArrowLink */}
            <ProgressBar backLink="/when-should-i-see-a-doctor-2" />
            <PleaseConsultADoctorPageImage />
            <PleaseConsultADoctorPageHeader />
            <PleaseConsultADoctorPageWarningSign />
            <div className="PleaseConsultADoctorPageNextButton">
                <PleaseConsultADoctorPageNextButton />
                </div>
        </div>
    );
};

export default PleaseConsultADoctorPage;
