import React, { useState, useEffect } from "react";

const InstallPromptModal = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null); // État pour stocker l'événement
  const [showModal, setShowModal] = useState(false); // État pour afficher la boîte modale

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Empêche l'affichage par défaut de l'invite
      setDeferredPrompt(e); // Stocke l'événement pour le déclencher plus tard
      setShowModal(true); // Affiche la boîte modale
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Déclenche l'invite d'installation
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
          if (window.gtag) {
            window.gtag("event", "install_accepted");
          }
        } else {
          console.log("User dismissed the install prompt");
          if (window.gtag) {
            window.gtag("event", "install_dismissed");
          }
        }
        setDeferredPrompt(null); // Réinitialise l'événement
      });
    }
    setShowModal(false); // Ferme la boîte modale
  };

  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <p>Install this app on your desktop or mobile device?</p>
          <button onClick={handleInstall}>INSTALL</button>
          <button onClick={() => setShowModal(false)}>CLOSE</button>
        </div>
      </div>
    )
  );
};

export default InstallPromptModal;
