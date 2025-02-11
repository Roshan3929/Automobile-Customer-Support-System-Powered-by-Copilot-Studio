import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        navigate("/bot"); // Redirect to bot page
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials or login error");
    }
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
      {/* Login Form */}
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
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "16px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "16px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          />
          <button
            type="submit"
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
            Submit
          </button>
        </form>

        {/* Back to Landing Page Button */}
        <button
          onClick={() => navigate("/")} // Navigate to landing page
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "16px",
            width: "100%",
            border: "none",
            cursor: "pointer",
            marginTop: "16px", // Add some space above the button
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Back
        </button>
      </div>
    </div>
  );
}