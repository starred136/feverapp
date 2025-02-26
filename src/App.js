import React, {useState, useEffect} from "react";
import AppRoutes from "./routes/AppRoutes";
import InstallPrompt from "./routes/InstallPrompt"; // adjust path as needed


const App = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Checking the pwa")
    const beforeInstallPromptHandler = (event) => {
      event.preventDefault();
      console.log("beforeinstallprompt event fired");
  
      // Check the current route
      const currentPath = window.location.pathname;
      console.log('\n\n\nCurrent Path:', currentPath);
  
      // If the current path starts with '/invite', do not show the install prompt
      // if (!currentPath.startsWith('/invite')) {
        // setInstallPromptEvent(event);
        setIsOpen(true); // Open the modal for eligible routes
      // }
    };
  
    // Add event listener
    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);
  
    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    };
  }, []);
  


    const closeModal = () => {
      setIsOpen(false);
    };
  
  return (
    <div className="App">
      <AppRoutes />
      <InstallPrompt modalIsOpen={modalIsOpen} />
    </div>
  );
};

export default App;

