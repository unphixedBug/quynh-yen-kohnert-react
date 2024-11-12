import React from 'react';

const ArtworkModal = ({ artwork, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full">
        <button onClick={onClose} className="close-button">Fermer</button>
        <h2 className="text-xl font-bold">{artwork.nom}</h2>
        <p className="mt-2">{artwork.description}</p>
        <div className="image-gallery mt-4">
          {/* Affichage des images */}
          {artwork.images.map((image, index) => (
            <img key={index} src={image.url} alt={artwork.nom} className="w-full h-auto mt-2" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtworkModal;
