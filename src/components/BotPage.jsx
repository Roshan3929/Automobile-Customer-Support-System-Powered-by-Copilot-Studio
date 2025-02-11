import React from "react";
import { useNavigate } from "react-router-dom";

export default function BotPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh", // Ensure the div takes up the full viewport height
        minWidth: "100vw", // Ensure the div takes up the full viewport width
        background: "linear-gradient(to right, #3b82f6, #9333ea)", // Gradient background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        color: "white",
      }}
    >
      {/* Bot Page Content */}
      <div
        style={{
          backgroundColor: "white",
          color: "#1f2937",
          padding: "32px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          AutoCare Assistant
        </h2>

        {/* Navigation Buttons */}
        <button
          onClick={() => navigate("/chatbot")}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "16px",
            width: "100%",
            border: "none",
            cursor: "pointer",
            marginBottom: "16px",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Chat with AutoCare Assistant
        </button>
        <button
          onClick={() => navigate("/feedback")}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "16px",
            width: "100%",
            border: "none",
            cursor: "pointer",
            marginBottom: "16px",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Submit Feedback
        </button>
        <button
          onClick={() => navigate("/appointment")}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "16px",
            width: "100%",
            border: "none",
            cursor: "pointer",
            marginBottom: "16px",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Book Appointment
        </button>
        <button
          onClick={() => navigate("/faq")}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "16px",
            width: "100%",
            border: "none",
            cursor: "pointer",
            marginBottom: "16px",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          FAQ
        </button>
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "16px",
            width: "100%",
            border: "none",
            cursor: "pointer",
            marginBottom: "16px",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Logout
        </button>

        {/* Back to Landing Page Button */}

      </div>
    </div>
  );
}