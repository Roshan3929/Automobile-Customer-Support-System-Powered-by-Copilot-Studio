import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FAQPage() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/questions");
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        if (data.success) {
          setQuestions(data.data);
        } else {
          console.error("Error fetching questions:", data.message);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

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
          width: "450px",
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
          Frequently Asked Questions
        </h2>

        {loading ? (
          <p>Loading...</p>
        ) : questions.length === 0 ? (
          <p>No questions available.</p>
        ) : (
          <div>
            {questions.map((question) => (
              <div key={question._id} style={{ borderBottom: "1px solid #d1d5db", paddingBottom: "12px", marginBottom: "12px" }}>
                <Link
                  to={`/faq/${question._id}`}
                  style={{ color: "#2563eb", textDecoration: "none", fontSize: "18px", fontWeight: "600" }}
                  onMouseOver={(e) => (e.target.style.color = "#1e40af")}
                  onMouseOut={(e) => (e.target.style.color = "#2563eb")}
                >
                  {question.title}
                </Link>
              </div>
            ))}
          </div>
        )}

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
