// import React, { useEffect, useState } from 'react';

// const PWAInstallIos = () => {
//   const [isInstalled, setIsInstalled] = useState(false);

//   useEffect(() => {
//     if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
//       setIsInstalled(true);
//     }
//   }, []);

//   return (
//     <div style={styles.overlay}>
//         <div style={styles.modalContent}>
//             <img src="assets/logo.png" alt="App Logo" styles={styles.logo} />
//       {!isInstalled ? (
//         <p>Please open the installed PWA.</p>
//       ) : (
//         <p style={styles.instructions}>To install this PWA on your iOS device, tap <img style={styles.shareIcon} src="assets/share.png" alt="Share Icon"></img> the Share button and select "Add to Home Screen".</p>
//       )}
//     </div>
//     </div>
//   );
// };

// const styles = {
//     overlay: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       background: "rgba(0, 0, 0, 0.7)",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       zIndex: 1000,
//     },
//     modalContent: {
//       background: "white",
//       padding: "20px",
//       borderRadius: "10px",
//       textAlign: "center",
//       boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
//       maxWidth: "70%",
//     },
//     logo: {
//       width: "80px",
//       height: "auto",
//       marginBottom: "15px",
//     },
//     text: {
//       fontSize: "16px",
//       marginBottom: "15px",
//       color: "#333",
//     },
//     instructions: {
//       fontSize: "14px",
//       marginBottom: "20px",
//       textAlign: "center",
//     },
//     shareIcon: {
//       width: "20px",
//       height: "20px",
//       marginHorizontal: "5px",
//     },
//     installButton: {
//       padding: "10px 20px",
//       backgroundColor: "#007BFF",
//       color: "white",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontSize: "16px",
//     },
//     closeButton: {
//       padding: "10px 20px",
//       backgroundColor: "#ccc",
//       color: "white",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontSize: "16px",
//       marginTop: "10px",
//     },
//   };
// export default PWAInstallIos;


import React, { useEffect, useState } from 'react';

const PWAInstallIos = () => {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setIsInstalled(true);
    }
  }, []);

 if (!isInstalled) return (
    <div style={styles.overlay}>
        <div style={styles.modalContent}>
            <img src="assets/logo.png" alt="App Logo" styles={styles.logo} />
      
        {/* <p>Please open the installed PWA.</p> */}
        <p style={styles.instructions}>To install this PWA on your iOS device, tap <img style={styles.shareIcon} src="assets/share.png" alt="Share Icon"></img> the Share button and select "Add to Home Screen".</p>
    </div>
    </div>
  );
};

const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modalContent: {
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      maxWidth: "70%",
    },
    logo: {
      width: "80px",
      height: "auto",
      marginBottom: "15px",
    },
    text: {
      fontSize: "16px",
      marginBottom: "15px",
      color: "#333",
    },
    instructions: {
      fontSize: "14px",
      marginBottom: "20px",
      textAlign: "center",
    },
    shareIcon: {
      width: "20px",
      height: "20px",
      marginHorizontal: "5px",
    },
    installButton: {
      padding: "10px 20px",
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
    closeButton: {
      padding: "10px 20px",
      backgroundColor: "#ccc",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      marginTop: "10px",
    },
  };
export default PWAInstallIos;