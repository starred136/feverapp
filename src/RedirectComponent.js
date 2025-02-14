import { useEffect, useState } from "react";

const RedirectComponent = () => {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(display-mode: standalone)").matches) {
      setShowInstallPrompt(true);
    }
  }, []);

  return (
    <>
      {showInstallPrompt && (
        <div className="install-popup">
          <p>📲 Install the app for a better experience!</p>
          <button onClick={() => setShowInstallPrompt(false)}>OK</button>
        </div>
      )}
    </>
  );
};

export default RedirectComponent;
