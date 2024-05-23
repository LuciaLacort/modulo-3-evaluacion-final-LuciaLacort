
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notfound'>
        <h2> El personaje que buscas no existe </h2>
        <Link to="/"> Volver al listado de personajes</Link>
    </div>
  )
}

export default NotFound