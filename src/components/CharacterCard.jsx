import { Link } from "react-router-dom"

const CharacterCard = ({data}) => {
  return (
    <article>
      <Link className='character__card' to={`/characterDetail/${data.id}`}>
        <img src={data.image} alt={`Foto del personaje: ${data.name}`}  />
        <span>{data.name}</span>
        <span>{data.species}</span>
      </Link>
    </article>
  )
}

export default CharacterCard