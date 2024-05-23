import CharacterList from "./CharacterList";
import Filters from "./Filters";
import PropTypes from 'prop-types';


const Main = ({characters, handleFilter, input, setInput, genderFilter, setGenderFilter,}) => {
  
  return (
    <main>
     <Filters handleFilter={handleFilter} input={input} setInput={setInput} genderFilter={genderFilter} setGenderFilter={setGenderFilter}/>
     <CharacterList characters={characters}/>
    </main>  
 )
}
Main.propTypes = {
  characters: PropTypes.array.isRequired,
  handleFilter: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  genderFilter: PropTypes.string.isRequired,
  setGenderFilter: PropTypes.func.isRequired
};


export default Main