/* eslint-disable react/prop-types */
const ArtworkCard = ({ artwork, onClick }) => {
  const { nom } = artwork;

  const firstImageUrl = artwork.images[0].url;

  return (
    <div
      onClick={() => onClick(artwork)}
      className="artwork-card cursor-pointer flex justify-end w-1/2"
    >
      <img src={firstImageUrl} alt={nom} className="h-48 object-scale-down" />
      <h2 className="text-center font-display mt-2 text-lg font-semibold -rotate-90">
        {nom}
      </h2>
    </div>
  );
};

export default ArtworkCard;
