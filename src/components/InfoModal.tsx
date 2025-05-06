import AnimatedSection from "@/components/AnimatedSection";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
      onClick={onClose} // Close on overlay click
    >
      <AnimatedSection
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        <h2 id="info-modal-title" className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6 whitespace-pre-line">{message}</p>
        <button 
          onClick={onClose}
          className="bg-[#31734D] hover:bg-[#285f3f] text-white font-semibold py-2 px-6 rounded-lg transition-colors w-full"
          aria-label="Close dialog"
        >
          Close
        </button>
      </AnimatedSection>
    </div>
  );
};

export default InfoModal; 