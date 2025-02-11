import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-screen h-screen relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-50 bg-white rounded-full p-2 shadow-lg"
        >
          &times;
        </button>
        {/* Modal Content */}
        <div className="w-full h-full overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;