
import CharacterCard from './CharacterCard'
const CharacterList = ({characters}) => {

  const characterList = characters.map(character =><CharacterCard key={character.id} data={character}/>
  )
  return (
    <section className='characters'>
      {characters.length === 0 ? <h2>No hay personajes que coincidan con la palabra introducida</h2> : null}
      {characterList}   
    </section>
  )
}

export default CharacterList