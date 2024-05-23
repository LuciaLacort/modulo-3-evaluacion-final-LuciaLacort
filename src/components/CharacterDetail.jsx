
import { Link } from "react-router-dom";

const CharacterDetail = ({ characterDetail }) => {
  if (!characterDetail) {
    return <p>No hemos encontrado al personaje</p>;
  }
  const statusEmoji = characterDetail.status === "Dead" ? "☠️" : "✅";
  const speciesEmoji = characterDetail.species === "Human" ? "🧑🏻‍🦳" : "👽";

  return (
    <div className="character-detail">
      <h2>{characterDetail.name}</h2>
      <img 
        src={characterDetail.image} 
        alt={`foto del personaje: ${characterDetail.name}`} 
      />
      <p>Species: {speciesEmoji}</p>
      <p>Status: {statusEmoji}</p>
      <p>Origin: {characterDetail.origin}</p>
      <Link to="/"> Volver al listado de personajes</Link>
    </div>

  );
};

export default CharacterDetail;
