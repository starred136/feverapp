// src/InstallPrompt.js
import React, { useState, useEffect } from "react";
import "./InstallPromptModal.css"; // Updated CSS file with new styles
import logo from "../assets/logo.png"; // Ensure the logo exists in this path

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      console.log("beforeinstallprompt event fired");
      e.preventDefault(); // Prevent the native mini-infobar from appearing
      setDeferredPrompt(e); // Save the event for later use
      setShowModal(true);   // Show our custom install prompt modal
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the native install prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null); // Clear the deferred prompt
      });
    }
    setShowModal(false); // Hide the modal after the install attempt
  };

  // If the modal should not be shown, render nothing
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Logo above the message */}
        <img src={logo} alt="App Logo" className="modal-logo" />
        <p className="modal-text">Install this app on your mobile phone</p>
        <button className="install-button" onClick={handleInstall}>
          INSTALL
        </button>
      </div>
    </div>
  );
};

export default InstallPrompt;
