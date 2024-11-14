import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArtworkModal from '../components/ArtworkModal'; // Chemin à ajuster selon ton arborescence de fichiers
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';



const Oeuvres = () => {
  const [oeuvres, setOeuvres] = useState([]);
  const [selectedArtwork, setSelectedArtwork] = useState(null); // Œuvre sélectionnée pour la modale
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchOeuvres = async () => {
      try {
        const response = await axios.get('https://groupe2.triptyk.eu/wp-json/wp/v2/oeuvre?per_page=20');
        const data = response.data;

        const oeuvresWithImages = await Promise.all(
          data.map(async (oeuvre) => {
            if (oeuvre.featured_media) {
              const mediaResponse = await axios.get(`https://groupe2.triptyk.eu/wp-json/wp/v2/media/${oeuvre.featured_media}`);
              const mediaData = mediaResponse.data;
              return { ...oeuvre, imageUrl: mediaData.source_url };
            } else {
              return { ...oeuvre, imageUrl: 'https://via.placeholder.com/150' };
            }
          })
        );

        setOeuvres(oeuvresWithImages);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchOeuvres();
  }, []);

  const openModal = (oeuvre) => {
    setSelectedArtwork(oeuvre);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedArtwork(null);
    setIsModalOpen(false);
  };

  const handleNext = () => {
    const currentIndex = oeuvres.findIndex(oeuvre => oeuvre.id === selectedArtwork.id);
    const nextIndex = (currentIndex + 1) % oeuvres.length;
    setSelectedArtwork(oeuvres[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = oeuvres.findIndex(oeuvre => oeuvre.id === selectedArtwork.id);
    const prevIndex = (currentIndex - 1 + oeuvres.length) % oeuvres.length;
    setSelectedArtwork(oeuvres[prevIndex]);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-display text-3xl text-primary'>Mes créations</h1>
      <ul className='flex flex-col items-center gap-5'>
        {oeuvres.map((oeuvre) => (
          <li key={oeuvre.id} onClick={() => openModal(oeuvre)} className="cursor-pointer flex items-center">
            <img src={oeuvre.imageUrl} alt={oeuvre.title.rendered} style={{ width: '150px', height: 'auto' }} />
            <h2 className='font-display -rotate-90'>{oeuvre.title.rendered}</h2>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <ArtworkModal
          artwork={selectedArtwork}
          onClose={closeModal}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};


export default Oeuvres;
