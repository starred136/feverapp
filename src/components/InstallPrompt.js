import { useEffect, useState } from "react";

const InstallPrompt = () => {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [showUpdateNotification, setShowUpdateNotification] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        setShowUpdateNotification(true);
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowInstallPrompt(true);
    });
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setShowInstallPrompt(false);
      });
    }
  };

  return (
    <>
      {showInstallPrompt && (
        <div className="install-popup">
          <p>📲 Install the app for a better experience!</p>
          <button onClick={handleInstallClick}>Install</button>
        </div>
      )}
      {showUpdateNotification && (
        <div className="update-popup">
          <p>🔄 A new update is available. Please update and reinstall the app.</p>
          <button onClick={() => window.location.reload()}>Update</button>
        </div>
      )}
    </>
  );
};

export default InstallPrompt;
