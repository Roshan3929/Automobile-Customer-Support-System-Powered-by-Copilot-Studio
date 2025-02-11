import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function LandingPage() {
  const navigate = useNavigate(); // Initialize navigate

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
      {/* Heading */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "800",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        AutoCare Assistant
      </h1>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <button
          onClick={() => navigate("/login")} // Navigate to login page
          style={{
            backgroundColor: "white",
            color: "#2563eb",
            padding: "12px 24px",
            borderRadius: "12px",
            fontSize: "1rem",
            fontWeight: "600",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            border: "none",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
        >
          Log In
        </button>
        <button
          onClick={() => navigate("/register")} // Navigate to register page
          style={{
            backgroundColor: "white",
            color: "#16a34a",
            padding: "12px 24px",
            // borderRadius: "12px",
            fontSize: "1rem",
            fontWeight: "600",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            border: "none",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
        >
          Register
        </button>
      </div>

      {/* Chatbot Info */}
      <p
        style={{
          fontSize: "1.25rem",
          textAlign: "center",
          lineHeight: "1.5",
        }}
      >
        Discover our AutoCare Assistant chatbot! It’s here to help you solve
        issues with your car and provide guidance on car maintenance.
      </p>
    </div>
  );
}
