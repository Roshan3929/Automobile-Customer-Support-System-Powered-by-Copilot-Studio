import React from "react";
import ReactDOM from "react-dom/client"; // For React 18+
import App from "./App"; // Import your main app component

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root element
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
