import React from 'react';

const ArtworkCard = ({ artwork, onClick }) => {
  const { nom } = artwork;
  
  const firstImageUrl = artwork.images[0].url;

  return (
    <div onClick={() => onClick(artwork)} className="artwork-card cursor-pointer flex w-1/2">
      <img src={firstImageUrl} alt={nom} className="w-full h-48 object-scale-down" />
      <h2 className="text-center font-display mt-2 text-lg font-semibold -rotate-90">{nom}</h2>
    </div>
  );
};

export default ArtworkCard;
