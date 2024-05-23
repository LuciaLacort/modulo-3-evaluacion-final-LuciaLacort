

const Filters = ({handleFilter, input, setInput, genderFilter, setGenderFilter}) => {

    const handleInput = (event) => {
        event.preventDefault()
        handleFilter(event.target.value)
        console.log(event.target.value)
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
          <select onChange={handleChange} value={genderFilter} >
              <option value="">Seleccione</option>
              <option value="Female">Mujer</option>
              <option value="Male">Hombre</option>
              <option value="Genderless">Sin género</option>
              <option value="unknown">Desconocido</option>
          </select>
      </div>
    </form>
  )
}

export default Filters