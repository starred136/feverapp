import React from 'react';

const PleaseConsultADoctorPageWarningSign = () => {
    return (
        <div>
            <div className="PleaseConsultADoctorYourChildIsUnder12WarningSign">
                <img src="assets/check-icon.png" alt="Check" className="check-image" />
                <span>Your child is under 12 weeks old, has a fever over 40°C in the morning, and shows signs of altered consciousness.</span>
            </div>
            <div className="PleaseConsultADoctorAllChildrenUnderTheAgeWarningSign">
                <img src="assets/check-icon.png" alt="Check" className="check-image" />
                <span>All children under the age of 12 weeks with fever should be seen by a doctor on the same day.</span>
            </div>
        </div>
    );
};

export default PleaseConsultADoctorPageWarningSign;
