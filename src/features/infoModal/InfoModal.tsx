import React from "react";

interface InfoModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const InfoModal: React.FC<InfoModalProps> = ({ open, onClose, title, message }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md text-center shadow-lg relative">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-xl hover:text-black"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default InfoModal;
