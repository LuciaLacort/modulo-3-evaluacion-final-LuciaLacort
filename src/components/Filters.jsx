import PropTypes from 'prop-types';

const Filters = ({handleFilter, input, setInput, genderFilter, setGenderFilter}) => {

    const handleInput = (event) => {
        event.preventDefault()
        handleFilter(event.target.value)
        setInput(event.target.value)
    }
    const handleSubmit = (event) => {
      event.preventDefault();
    };
    const handleChange = (ev) => {
      setGenderFilter(ev.target.value)
  }

  return (
    <form  className='form' onSubmit={handleSubmit}>
      <label className='form__label' htmlFor="input">Introduce el nombre de un personaje</label>
     <input className='input' id="input" type='text' value={input} onChange={handleInput}/>
        <div>
            <label className='form__label' htmlFor="select"> Filtrar por género</label>
            <select className='select' id="select"onChange={handleChange} value={genderFilter} >
                <option value="">Seleccione</option>
                <option value="female">Mujer</option>
                <option value="male">Hombre</option>
            </select>
        </div>
    </form>
  )
}

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  genderFilter: PropTypes.string.isRequired,
  setGenderFilter: PropTypes.func.isRequired
};


export default Filters