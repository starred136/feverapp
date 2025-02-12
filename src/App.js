import React, { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import InstallPrompt from "./routes/InstallPrompt";

const App = () => {
  const [newVersionAvailable, setNewVersionAvailable] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js").then((registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                console.log("Nouvelle version détectée !");
                setNewVersionAvailable(true);
              }
            }
          };
        };
      });
    }
  }, []);

  const updateApp = () => {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage("SKIP_WAITING");
      window.location.reload();
    }
  };

  return (
    <div className="App">
      <AppRoutes />
      <InstallPrompt />
      {newVersionAvailable && (
        <div style={styles.updateBanner}>
          <p>🚀 Une nouvelle version est disponible !</p>
          <button style={styles.updateButton} onClick={updateApp}>
            Mettre à jour
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  updateBanner: {
    position: "fixed",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#ffcc00",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
  },
  updateButton: {
    marginLeft: "10px",
    padding: "5px 10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
