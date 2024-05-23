
import CharacterCard from './CharacterCard'
import PropTypes from 'prop-types';
const CharacterList = ({characters}) => {

  const characterList = characters.map(character =><CharacterCard key={character.id} data={character}/>
  )
  return (
    <section className='characters'>
      {characters.length === 0 ? <h2 className='nochar'>No hay personajes que coincidan con la búsqueda</h2> : null}
      {characterList}   
    </section>
  )
  
}
CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired
    })
  ).isRequired
};


export default CharacterList