import React from "react";
import { useNavigate } from "react-router-dom";

export default function BotPage() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/");
  };


  return (
    <div className="bg-white text-gray-900 p-8 rounded-xl shadow-lg w-96 mx-auto mt-24">
      <h2 className="text-2xl font-bold mb-4 text-center">Bot Page</h2>
      <button
        onClick={goToProfile}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
      >
        Logout
      </button>
    </div>
  );
}
