import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const ArtworkPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const artwork = location.state?.artwork;

  if (!artwork) {
    return <p>Erreur : aucune œuvre sélectionnée</p>;
  }

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)} // Retour à la page précédente
        className="mb-4 text-gray-600 text-lg"
      >
        <FaChevronLeft /> Retour
      </button>

      <h1 className="text-3xl font-display font-bold text-primary mb-4">
        {artwork.title}
      </h1>

      {artwork.images && artwork.images.length > 0 ? (
        <img
          src={artwork.images[0]}
          alt={artwork.title}
          className="w-full h-auto object-contain rounded mb-4"
        />
      ) : (
        <p>Aucune image disponible</p>
      )}

      <p className="text-gray-700 leading-relaxed">{artwork.description}</p>
    </div>
  );
};

export default ArtworkPage;
