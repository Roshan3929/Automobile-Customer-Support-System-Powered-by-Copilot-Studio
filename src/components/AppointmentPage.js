import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AppointmentPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAppointmentSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert("Error booking appointment.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "linear-gradient(to right, #3b82f6, #9333ea)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        color: "white",
      }}
    >
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
          Book an Appointment
        </h2>
        <form onSubmit={handleAppointmentSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Book Appointment</button>
        </form>
        <button onClick={() => navigate("/bot")} style={buttonStyle}>Back</button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "16px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "16px",
};

const buttonStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  padding: "10px",
  borderRadius: "8px",
  fontSize: "16px",
  width: "100%",
  border: "none",
  cursor: "pointer",
  marginTop: "16px",
};