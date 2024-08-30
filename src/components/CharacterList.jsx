
import CharacterCard from './CharacterCard'
import PropTypes from 'prop-types';
const CharacterList = ({characters}) => {
  const filteredCharacters = characters.filter(character => character.image && character.image !== 'Unknown');

  const characterList = filteredCharacters.map(character =><CharacterCard key={character.id} data={character}/>
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
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      ancestry: PropTypes.string.isRequired
    })
  ).isRequired
};


export default CharacterList