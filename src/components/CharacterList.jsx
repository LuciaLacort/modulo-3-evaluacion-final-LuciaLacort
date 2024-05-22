import React from 'react'
import CharacterCard from './CharacterCard'
const CharacterList = ({characters}) => {

  const characterList = characters.map(character =><CharacterCard key={character.id} data={character}/>
  )
  return (
    <section className='characters'>
      {characterList}   
    </section>
  )
}

export default CharacterList