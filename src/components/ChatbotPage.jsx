import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChatPopup() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const goToBotPage = () => {
    navigate("/bot"); // Navigate to the bot page
  };

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
      {/* Chat Popup Content */}
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
          Chat with Us
        </h2>

        {/* Go to Bot Page Button */}
        <button
          onClick={goToBotPage}
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
          Go Back
        </button>

        {/* Chat Button */}
        <button
          onClick={toggleChat}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "16px",
            width: "100%",
            border: "none",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          {isChatOpen ? "Close Chat" : "Open Chat"}
        </button>

        {/* Chat Popup */}
        {isChatOpen && (
          <div
            style={{
              position: "fixed",
              bottom: "16px",
              right: "16px",
              width: "350px",
              height: "400px",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              zIndex: 50,
            }}
          >
            <iframe
              title="AMAZING CHATBOT"
              src="https://copilotstudio.microsoft.com/environments/Default-df7206db-cabc-4b49-b065-e787466975f2/bots/cr124_autoCareAssistant/webchat?__version__=2"
              frameBorder="0"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}