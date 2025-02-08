// import React from "react";
// import { useNavigate } from "react-router-dom";

// const HomePageMedecineSectionOptionItem = () => {
//   const navigate = useNavigate();
//   return (
//     <div
//       className="HomePageMedecineSectionOptionItem"
//       onClick={() => navigate("/fever-is-your-friend")}
//     >
//       <div className="circle large custom-bg">
//         <img
//           src="assets/medications.png"
//           alt="Ibuprofen, Paracetamol, Fever Juice, Antibiotics?"
//         />
//       </div>
//       <p className="IbufofenParacetamolFeverJuiceAntibioticsParagraph">
//         Ibuprofen, Paracetamol, <br /> Fever Juice, Antibiotics?
//       </p>
//     </div>
//   );
// };
// export default HomePageMedecineSectionOptionItem;

// import React from "react";
// const HomePageMedecineSectionOptionItem = () => {
//   return (
//     <div className="HomePageMedecineSectionOptionItem">
//       <div className="circle large custom-bg">
//         <img
//           src="assets/medications.png"
//           alt="Ibuprofen, Paracetamol, Fever Juice, Antibiotics?"
//         />
//       </div>
//       <p className="IbufofenParacetamolFeverJuiceAntibioticsParagraph">
//         Ibuprofen, Paracetamol, <br /> Fever Juice, Antibiotics?
//       </p>
//     </div>
//   );
// };
// export default HomePageMedecineSectionOptionItem;

import React from "react";
const HomePageMedecineSectionOptionItem = () => {
  return (
    <div className="section HomePageMedecineSectionOptionItem">
      <div className="circle large custom-bg">
        <img
          src="assets/medications.png"
          alt="Ibuprofen,Paracetamol, Fever Juice, Antibiotics?"
        />
      </div>
      <p className="IbufofenParacetamolFeverJuiceAntibioticsParagraph">
        Ibuprofen, Paracetamol, <br /> Fever Juice, Antibiotics?
      </p>
    </div>
  );
};
export default HomePageMedecineSectionOptionItem;