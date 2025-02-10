// src/InstallPrompt.js
import React, { useState, useEffect } from "react";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Vérifie si l'application est installée
    const checkIfInstalled = () => {
      if (window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches) {
        setIsInstalled(true); // Marque l'application comme installée
      }
    };

    checkIfInstalled();

    const handler = (event) => {
      event.preventDefault(); // Empêche la bannière native
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    // Affiche la bannière d'installation
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("PWA installed successfully");
      setIsInstalled(true); // Marque l'application comme installée après succès
    } else {
      console.log("PWA installation dismissed");
    }

    setDeferredPrompt(null); // Réinitialise le prompt
  };

  // Bloque l'accès si l'application n'est pas installée
  if (isInstalled) {
    return null; // Accès autorisé si l'application est installée
  }

  // Affiche le pop-up si l'application n'est pas installée
  return (
    <div style={styles.overlay}>
      <div style={styles.modalContent}>
        <img src="/assets/icons/logo.png" alt="App Logo" style={styles.logo} />
        <p style={styles.text}>Install this app on your mobile phone to continue</p>
        <button style={styles.installButton} onClick={handleInstall}>
          INSTALL
        </button>
      </div>
    </div>
  );
};

// Styles en ligne
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)", // Fond semi-transparent
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "24px", // Ajoute un espacement pour éviter que le pop-up touche les bords
  },
  modalContent: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    maxWidth: "400px",
    width: "100%",
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
  installButtonHover: {
    backgroundColor: "#0056b3",
  },
};

export default InstallPrompt;
