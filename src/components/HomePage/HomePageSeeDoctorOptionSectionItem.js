// import React from "react";
// import { useNavigate } from "react-router-dom";
// const HomePageSeeDoctorOptionSectionItem = () => {
//   const navigate = useNavigate();
//   return (
//     <div
//       className="HomePageSeeDoctorOptionSectionItem"
//       onClick={() => navigate("/fever-is-your-friend")}
//     >
//       <div className="circle small">
//         <img src="assets/doctor.png" alt="Should I see a Doctor?" />
//       </div>
//       <p className="ShouldISeeDoctorParagraph">Should I see a Doctor?</p>
//     </div>
//   );
// };
// export default HomePageSeeDoctorOptionSectionItem;


// import React from "react";
// const HomePageSeeDoctorOptionSectionItem = () => {
//   return (
//     <div className="HomePageSeeDoctorOptionSectionItem">
//       <div className="circle small">
//         <img src="assets/doctor.png" alt="Should I see a Doctor?" />
//       </div>
//       <p className="ShouldISeeDoctorParagraph">Should I see a Doctor?</p>
//     </div>
//   );
// };
// export default HomePageSeeDoctorOptionSectionItem;

import React from "react";
const HomePageSeeDoctorOptionSectionItem = () => {
  return (
    <div className="section HomePageSeeDoctorOptionSectionItem">
      <div className="circle small">
        <img src="assets/doctor.png" alt="Should I see a Doctor?" />
      </div>
      <p className="ShouldISeeDoctorParagraph">Should I see a Doctor?</p>
    </div>
  );
};
export default HomePageSeeDoctorOptionSectionItem;