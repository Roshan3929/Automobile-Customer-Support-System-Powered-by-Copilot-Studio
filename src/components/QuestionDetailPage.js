import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function QuestionDetailPage() {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/questions/${questionId}`);
        const data = await response.json();
        
        if (data.success) {
          setQuestion(data.data);
        } else {
          console.error("Error fetching question:", data.message);
        }
      } catch (error) {
        console.error("Error fetching question:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [questionId]);

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
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : !question ? (
          <p style={{ textAlign: "center" }}>Question not found.</p>
        ) : (
          <>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              {question.title}
            </h2>
            <p style={{ color: "#4b5563", marginBottom: "16px" }}>{question.description}</p>
            <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Answers:</h3>
            {question.answers.length > 0 ? (
              <ul style={{ listStyleType: "disc", paddingLeft: "20px", textAlign: "left" }}>
                {question.answers.map((answer) => (
                  <li key={answer._id} style={{ color: "#4b5563" }}>{answer.content}</li>
                ))}
              </ul>
            ) : (
              <p>No answers yet.</p>
            )}
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
                marginTop: "16px",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
            >
              Back to FAQ
            </button>
          </>
        )}
      </div>
    </div>
  );
}
