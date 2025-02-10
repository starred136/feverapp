// src/InstallPrompt.js
import React, { useState, useEffect } from 'react';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Listen for the beforeinstallprompt event
    const handler = (event) => {
      event.preventDefault(); // Prevent the default mini-infobar from showing
      setDeferredPrompt(event);
      setShowModal(true);
      console.log('beforeinstallprompt event captured');
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    // Hide the custom install modal
    setShowModal(false);
    // Optionally store that the user has seen the prompt (e.g., using localStorage)
    localStorage.setItem('hasSeenInstallPrompt', 'true');

    // Show the browser install prompt
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response: ${outcome}`);
    // Clear the deferred prompt since it can only be used once.
    setDeferredPrompt(null);
  };

  if (!showModal) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContent: {
      background: 'white',
      padding: '30px',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
      maxWidth: '400px',
      width: '90%',
    },
    logo: {
      width: '100px', // Logo size
      height: 'auto',
      marginBottom: '20px',
    },
    text: {
      fontSize: '18px',
      marginBottom: '20px',
      color: '#333',
    },
    installButton: {
      padding: '10px 20px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modalContent}>
        {/* Logo displayed above the message */}
        <img src="/assets/icons/logo.png" alt="App Logo" style={styles.logo} />
        <p style={styles.text}>Install this app on your mobile phone</p>
        <button style={styles.installButton} onClick={handleInstall}>
          INSTALL
        </button>
      </div>
    </div>
  );
};

export default InstallPrompt;
