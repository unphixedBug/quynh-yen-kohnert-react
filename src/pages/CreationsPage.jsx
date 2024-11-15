import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assure-toi d'utiliser react-router-dom
import axios from 'axios';
import ArtworkModal from '../components/ArtworkModal'; // Chemin à ajuster selon ton arborescence de fichiers

const Oeuvres = () => {
  const [oeuvres, setOeuvres] = useState([]);
  const [selectedArtwork, setSelectedArtwork] = useState(null); // Œuvre sélectionnée pour la modale
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Détecte si on est en mobile
  const navigate = useNavigate(); // Pour naviguer vers une autre page

  // Détecter si l'utilisateur est sur mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Largeur max pour mobile
    };

    handleResize(); // Appel initial
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchOeuvres = async () => {
      try {
        const response = await axios.get("https://groupe2.triptyk.eu/wp-json/wc/v3/products", {
          auth: {
            username: "ck_153d0faed3b3a860c006664cd9f387c0dd61f73f", // Clé client
            password: "cs_0d0c10512e751b5f7f437b91077b1dd07f68ad24" // Clé secrète
          }
        });

        const formattedOeuvres = response.data.map(product => ({
          id: product.id,
          title: product.name,
          description: product.description || "Pas de description disponible",
          images: product.images.map(image => image.src),
          imageUrl: product.images[0]?.src || "https://via.placeholder.com/150" // Première image ou placeholder
        }));

        setOeuvres(formattedOeuvres);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };

    fetchOeuvres();
  }, []);

  const openArtwork = (oeuvre) => {
    if (isMobile) {
      // Navigation vers une nouvelle page sur mobile
      navigate(`/creations/${oeuvre.id}`, { state: { artwork: oeuvre } });
    } else {
      // Ouverture de la modale sur desktop
      setSelectedArtwork(oeuvre);
      setIsModalOpen(true);
    }
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
    <div className="flex flex-col items-center">
      <h1 className="font-display text-3xl text-primary">Mes créations</h1>
      <ul className="flex flex-col items-center gap-5">
        {oeuvres.map((oeuvre) => (
          <li key={oeuvre.id} onClick={() => openArtwork(oeuvre)} className="cursor-pointer flex items-center">
            <img src={oeuvre.imageUrl} alt={oeuvre.title} style={{ width: '150px', height: 'auto' }} />
            <h2 className="font-display -rotate-90">{oeuvre.title}</h2>
          </li>
        ))}
      </ul>

      {isModalOpen && !isMobile && (
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
