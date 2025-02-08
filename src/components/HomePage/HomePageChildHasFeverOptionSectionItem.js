// import React from "react";
// import { useNavigate } from "react-router-dom";
// const HomePageChildHasFeverOptionSectionItem = () => {
//   const navigate = useNavigate();
//   return (
//     <div
//       className="HomePageChildHasFeverOptionSectionItem"
//       onClick={() => navigate("/fever-is-your-friend")}
//     >
//       <div className="circle small">
//         <img src="assets/child-fever.png" alt="My child has a Fever" />
//       </div>
//       <p className="MyChildHasFeverParagraph">My child has a Fever</p>
//     </div>
//   );
// };
// export default HomePageChildHasFeverOptionSectionItem;

// import React from "react";
// import FeverIsYourFriendVideoPageRedirect from "../FeverIsYourFriendVideoPageRedirect";
// const HomePageChildHasFeverOptionSectionItem = () => {
//   return (
//     <FeverIsYourFriendVideoPageRedirect targetPath="/fever-is-your-friend">
//       <div className="HomePageChildHasFeverOptionSectionItem">
//         <div className="circle small">
//           <img src="assets/child-fever.png" alt="My child has a Fever" />
//         </div>
//         <p className="MyChildHasFeverParagraph">My child has a Fever</p>
//       </div>
//     </FeverIsYourFriendVideoPageRedirect>
//   );
// };
// export default HomePageChildHasFeverOptionSectionItem;

import React from "react";
import FeverIsYourFriendVideoPageRedirect from "../FeverIsYourFriendVideoPageRedirect";
const HomePageChildHasFeverOptionSectionItem = () => {
  return (
    <FeverIsYourFriendVideoPageRedirect targetPath="/fever-is-your-friend">
      <div className="section HomePageChildHasFeverOptionSectionItem">
        <div className="circle small">
          <img src="assets/child-fever.png" alt="My child has a Fever" />
        </div>
        <p className="MyChildHasFeverParagraph">My child has a Fever</p>
      </div>
    </FeverIsYourFriendVideoPageRedirect>
  );
};
export default HomePageChildHasFeverOptionSectionItem;