import CharacterList from "./CharacterList";
import Filters from "./Filters";


const Main = ({characters, handleFilter, input, setInput, genderFilter, setGenderFilter,}) => {
  
  return (
    <main>
     <Filters handleFilter={handleFilter} input={input} setInput={setInput} genderFilter={genderFilter} setGenderFilter={setGenderFilter}/>
     <CharacterList characters={characters}/>
    </main>  
 )
}

export default Main