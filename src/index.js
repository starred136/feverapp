// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Import the registration file
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

window.addEventListener('load', () => {
  clearAllSiteData();
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker for PWA functionality
serviceWorkerRegistration.register();

// Existing code for performance measuring
reportWebVitals();

function clearCookies() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
}

// Function to clear Local Storage
function clearLocalStorage() {
  localStorage.clear();
}

// Function to clear Session Storage
function clearSessionStorage() {
  sessionStorage.clear();
}

// Function to clear IndexedDB
function clearIndexedDB() {
  if ('indexedDB' in window) {
      indexedDB.databases().then((databases) => {
          for (let db of databases) {
              indexedDB.deleteDatabase(db.name);
          }
      });
  }
}

// Function to clear Cache Storage
function clearCacheStorage() {
  if ('caches' in window) {
      caches.keys().then((names) => {
          for (let name of names) {
              caches.delete(name);
          }
      });
  }
}

// Function to unregister Service Workers
function unregisterServiceWorkers() {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (let registration of registrations) {
              registration.unregister();
          }
      });
  }
}

// Function to clear everything
function clearAllSiteData() {
  clearCookies();
  clearLocalStorage();
  clearSessionStorage();
  clearIndexedDB();
  clearCacheStorage();
  unregisterServiceWorkers();
}