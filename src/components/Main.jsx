import CharacterList from "./CharacterList";

import Filters from "./Filters";

import React from 'react'

const Main = ({characters}) => {
  return (
    <main>
     <Filters/>
     <CharacterList characters={characters}/>
    </main>  
 )
}

export default Main