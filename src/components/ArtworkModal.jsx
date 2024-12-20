import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const ArtworkModal = ({ artwork, onClose, onNext, onPrev }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!artwork) return null; // Si aucune œuvre n'est sélectionnée

  const images = artwork.images || []; // Tableau des images

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        onPrev();
      } else if (event.key === "ArrowRight") {
        onNext();
      } else if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onPrev, onNext, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white p-6 rounded-lg max-w-4xl w-full flex relative h-5/6">
        {/* Navigation précédente */}
        <button
          onClick={onPrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600 text-3xl"
        >
          <FaChevronLeft />
        </button>

        {/* Navigation suivante */}
        <button
          onClick={onNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 text-3xl"
        >
          <FaChevronRight />
        </button>

        {/* Contenu principal */}
        <div className="flex-1 flex flex-col items-center">
          {images[currentImageIndex] ? (
            <img
              src={images[currentImageIndex]}
              alt={artwork.title}
              className="w-full h-auto object-contain rounded mb-4"
            />
          ) : (
            <p>Aucune image disponible</p>
          )}
          <div className="flex space-x-2 mt-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-16 h-16 object-cover rounded cursor-pointer ${
                  currentImageIndex === index
                    ? "border-2 border-red-500"
                    : "border"
                }`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Détails de l'œuvre */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <button
            onClick={onClose}
            className="self-end text-gray-600 text-2xl mb-4"
          >
            <FaTimes />
          </button>
          <h2 className="text-3xl font-display font-bold text-red-500 mb-4">
            {artwork.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {artwork.description}
          </p>
          <button className="self-start mt-auto bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
            Acheter cette œuvre
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtworkModal;
