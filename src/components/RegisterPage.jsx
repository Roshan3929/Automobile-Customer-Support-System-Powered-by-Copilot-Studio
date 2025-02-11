import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        console.log("Registration successful:", response.data);
        navigate("/login"); // Redirect to login page after successful registration
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("Registration error. Please try again.");
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
      {/* Registration Form */}
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
          Register
        </h2>
        {error && (
          <p style={{ color: "red", marginBottom: "16px" }}>{error}</p>
        )}
        <form onSubmit={handleRegister}>
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
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            Register
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