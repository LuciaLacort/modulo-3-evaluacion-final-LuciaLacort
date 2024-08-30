
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CharacterDetail = ({ characterDetail }) => {
  if (!characterDetail) {
    return <p>No hemos encontrado al personaje</p>;
  }
  const statusEmoji = characterDetail.alive === true ? "✅" : "☠️";
 

  return (
    <div className="detail">
      <Link className="detail__link" to="/"> Volver </Link>
      <div className="detail__data">
        <div >
          <img 
            className="detail__img"
            src={characterDetail.image} 
            alt={`Foto del personaje: ${characterDetail.name}`} 
          />
        </div>
        <div className="detail__items">
          <h2>{characterDetail.name}</h2>
          <p>Ancestry: {characterDetail.ancestry}</p>
          <p>House: {characterDetail.origin}</p>
          <p>Status: {statusEmoji}</p>
          <p>Actor: {characterDetail.episodes}</p>
        </div>
      </div>
    </div>
  );
};

CharacterDetail.propTypes = {
  characterDetail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    alive: PropTypes.bool.isRequired,
    ancestry: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    episodes: PropTypes.string.isRequired
  })
};

export default CharacterDetail;
