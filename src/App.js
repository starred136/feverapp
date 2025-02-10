import React from "react";
import AppRoutes from "./routes/AppRoutes";
import InstallPromptModal from "./components/InstallPromptModal";

function App() {
  return (
    <div className="App">
      <InstallPromptModal /> {/* Ajout de la boîte modale */}
      <AppRoutes />
    </div>
  );
}

export default App;
