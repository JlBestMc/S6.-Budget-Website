interface InfoModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export default function InfoModal({
  open,
  onClose,
  title,
  message,
}: InfoModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 h-dvh bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl px-4 py-15 max-w-md text-center shadow-lg relative">
        <h2 className="text-xl font-bold mb-5 font-montserrat">{title}</h2>
        <p className="text-gray-700 font-semibold text-center font-montserrat">
          {message}
        </p>
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 text-xl hover:text-black"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
