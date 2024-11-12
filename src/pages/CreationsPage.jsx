import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import ArtworkCard from '../components/ArtworkCard';
import ArtworkModal from '../components/ArtworkModal';
import Title from '../components/Title';
import { useMediaQuery } from 'react-responsive';
import { FaTh, FaGripVertical } from 'react-icons/fa';

const CreationsPage = () => {
  const { data, loading, error } = useFetch('https://quynh-yen-kohnert-strapi.onrender.com/api/oeuvres?populate=*');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [isTwoColumn, setIsTwoColumn] = useState(false); // État pour le mode d'affichage
  const isDesktop = useMediaQuery({ minWidth: 768 });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement des œuvres.</p>;

  const handleClick = (artwork) => {
    if (isDesktop) {
      setSelectedArtwork(artwork);
    } else {
      window.location.href = `/creations/${artwork.id}`; // Redirige vers la page individuelle sur mobile
    }
  };

  const toggleLayout = () => setIsTwoColumn(!isTwoColumn); // Fonction pour basculer l'affichage

  return (
    <>
      <Title>Mes Créations</Title>

      {/* Bouton de changement d'affichage */}
      {isDesktop && (
        <div className="flex justify-end mb-4">
          <button onClick={toggleLayout} className="bg-gray-100 p-2 rounded shadow-md hover:bg-gray-200">
            {isTwoColumn ? <FaGripVertical size={24} /> : <FaTh size={24} />}
          </button>
        </div>
      )}

      {/* Disposition des œuvres */}
      <div className={`creations-page grid place-items-center gap-4 ${isTwoColumn ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        {data?.data.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} onClick={handleClick} />
        ))}
        {isDesktop && selectedArtwork && (
          <ArtworkModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
        )}
      </div>
    </>
  );
};

export default CreationsPage;
