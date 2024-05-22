import CharacterList from "./CharacterList";
import Filters from "./Filters";


const Main = ({characters}) => {
  return (
    <main>
     <Filters/>
     <CharacterList characters={characters}/>
    </main>  
 )
}

export default Main