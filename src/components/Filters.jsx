

const Filters = ({handleFilter, input, setInput}) => {

    const handleInput = (event) => {
        event.preventDefault()
        handleFilter(event.target.value)
        console.log(event.target.value)
        setInput(event.target.value)
    }
    const handleSubmit = (event) => {
      event.preventDefault();
    };


  return (
    <form  className='form' onSubmit={handleSubmit}>
      <label className='form__label' htmlFor="input">Introduce el nombre de un personaje</label>
        <input className='input' id="input" type='text' value={input} onChange={handleInput}/>
    </form>
  )
}

export default Filters