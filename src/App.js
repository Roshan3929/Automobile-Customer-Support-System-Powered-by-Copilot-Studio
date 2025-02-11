import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import BotPage from "./components/BotPage";
import FAQPage from "./components/FAQPage";
import QuestionDetailPage from "./components/QuestionDetailPage";
import FeedbackPage from "./components/FeedbackPage";
import AppointmentPage from "./components/AppointmentPage";
import ChatbotPage from "./components/ChatbotPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/bot" element={<BotPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/faq/:questionId" element={<QuestionDetailPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
