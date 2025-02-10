// src/InstallPrompt.js
import React, { useState, useEffect } from 'react';

function InstallPrompt() {
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

  const handleDismiss = () => {
    setShowModal(false);
    localStorage.setItem('hasSeenInstallPrompt', 'true');
  };

  if (!showModal) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Install This App</h2>
        <p>For a better experience, install this app on your desktop.</p>
        <div>
          <button onClick={handleInstall} style={styles.button}>Install</button>
          <button onClick={handleDismiss} style={styles.button}>Maybe Later</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    textAlign: 'center',
    maxWidth: '400px',
    width: '90%'
  },
  button: {
    margin: '0.5rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer'
  }
};

export default InstallPrompt;
