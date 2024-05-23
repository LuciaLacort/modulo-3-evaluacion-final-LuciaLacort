
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CharacterDetail = ({ characterDetail }) => {
  if (!characterDetail) {
    return <p>No hemos encontrado al personaje</p>;
  }
  const statusEmoji = characterDetail.status === "Dead" ? "☠️" : "✅";
  const speciesEmoji = characterDetail.species === "Human" ? "🧑🏻‍🦳" : "👽";

  return (
    <div className="detail">
      <Link className="detail__link" to="/"> Volver </Link>
      <div className="detail__data">
        <div className="detail__img">
          <img 
            src={characterDetail.image} 
            alt={`Foto del personaje: ${characterDetail.name}`} 
          />
        </div>
        <div className="detail__items">
          <h2>{characterDetail.name}</h2>
          <p>Status: {statusEmoji}</p>
          <p>Species: {speciesEmoji}</p>
          <p>Origin: {characterDetail.origin}</p>
          <p>Episodes: {characterDetail.episodes.length}</p>
        </div>
      </div>
    </div>
  );
};

CharacterDetail.propTypes = {
  characterDetail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    episodes: PropTypes.array.isRequired
  })
};

export default CharacterDetail;
