import React from "react";
import AppRoutes from "./routes/AppRoutes";
import InstallPrompt from "./routes/InstallPrompt"; // adjust path as needed


const App = () => {
  return (
    <div className="App">
      <AppRoutes />
      <InstallPrompt />
    </div>
  );
};

export default App;
