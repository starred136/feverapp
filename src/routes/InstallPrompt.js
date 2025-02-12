import React, { useState, useEffect } from "react"; 

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(
    localStorage.getItem("isAppInstalled") === "true"
  );

  useEffect(() => {
    // Vérifie si l'application est installée
    const checkIfInstalled = () => {
      if (
        window.navigator.standalone || 
        window.matchMedia("(display-mode: standalone)").matches
      ) {
        setIsInstalled(true);
        localStorage.setItem("isAppInstalled", "true"); // Stocke l'état dans localStorage
      }
    };

    checkIfInstalled();

    const beforeInstallPromptHandler = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", beforeInstallPromptHandler);

    return () => {
      window.removeEventListener("beforeinstallprompt", beforeInstallPromptHandler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("PWA installed successfully");
      setIsInstalled(true);
      localStorage.setItem("isAppInstalled", "true"); // Sauvegarde dans localStorage
    } else {
      console.log("PWA installation dismissed");
    }

    setDeferredPrompt(null);
  };

  // Vérification supplémentaire après un rafraîchissement
  useEffect(() => {
    if (localStorage.getItem("isAppInstalled") === "true") {
      setIsInstalled(true);
    }
  }, []);

  if (isInstalled) {
    return null;
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modalContent}>
        <img src="/assets/logo.png" alt="App Logo" style={styles.logo} />
        <p style={styles.text}>Install this app on your mobile device to continue</p>
        <button
          style={styles.installButton}
          onClick={handleInstall}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
        >
          INSTALL
        </button>
      </div>
    </div>
  );
};

// Styles en ligne pour le composant
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
    padding: "24px",
  },
  modalContent: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    maxWidth: "400px",
    width: "100%",
    transform: "translateY(-20px)",
    margin: "0 16px",
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
  installButton: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default InstallPrompt;
