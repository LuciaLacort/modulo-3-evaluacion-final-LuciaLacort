import { Link } from "react-router-dom"

const CharacterCard = ({data}) => {
  return (
    <article className='character__card'>
      <Link to={`/characterDetail/${data.id}`}>
        <img src={data.image} alt="imagen de personaje" />
        <span>{data.name}</span>
        <span>{data.species}</span>
      </Link>
    </article>
  )
}

export default CharacterCard