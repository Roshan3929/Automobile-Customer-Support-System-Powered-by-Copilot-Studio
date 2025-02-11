import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FeedbackPage() {
  const navigate = useNavigate();
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");

  const handleFeedbackSubmit = async (event) => {
    event.preventDefault();

    const feedbackData = { rating, comment };

    try {
      const response = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        alert("Feedback submitted! Thank you for your response.");
        setRating("5");
        setComment("");
      } else {
        alert("Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred. Please try again later.");
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
          Submit Feedback
        </h2>
        <form onSubmit={handleFeedbackSubmit}>
          <select
            required
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "16px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          >
            <option value="5">Excellent</option>
            <option value="4">Good</option>
            <option value="3">Average</option>
            <option value="2">Poor</option>
            <option value="1">Very Bad</option>
          </select>
          <textarea
            placeholder="Your comments..."
            rows="4"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "16px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          ></textarea>
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
            Submit Feedback
          </button>
        </form>
        <button
          onClick={() => navigate("/bot")}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "16px",
            width: "100%",
            border: "none",
            cursor: "pointer",
            marginTop: "16px",
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
