import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        email,
        username,
        password,
      });
  
      if (response.status === 200) {
        // Clear fields after successful registration
        setEmail("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
  
        // Redirect to the landing page or login page after registration
        navigate("/login");  // Redirect to login page after successful registration
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("There was an error with registration.");
    }
  };
  

  return (
    <div className="bg-white text-gray-900 p-8 rounded-xl shadow-lg w-96 mx-auto mt-24">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded-lg"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
