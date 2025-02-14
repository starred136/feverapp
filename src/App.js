import React from "react";
import AppRoutes from "./routes/AppRoutes";
import InstallPrompt from "./components/InstallPrompt";

const App = () => {
  return (
    <div className="App">
      <InstallPrompt />
      <AppRoutes />
    </div>
  );
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js").then((registration) => {
    registration.addEventListener("updatefound", () => {
      const newWorker = registration.installing;
      newWorker.addEventListener("statechange", () => {
        if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
          alert("✨ A new update is available! Please refresh the app.");
        }
      });
    });
  });
}

export default App;
