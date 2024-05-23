import CharacterList from "./CharacterList";
import Filters from "./Filters";


const Main = ({characters, handleFilter, input, setInput, }) => {
  
  return (
    <main>
     <Filters handleFilter={handleFilter} input={input} setInput={setInput} />
     <CharacterList characters={characters}/>
    </main>  
 )
}

export default Main