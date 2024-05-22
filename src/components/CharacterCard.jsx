import React from 'react'

const CharacterCard = ({data}) => {
  return (
    <article className='character__card'>
        <img src={data.image} alt="" />
        <span>{data.name}</span>
        <span>{data.species}</span>
    </article>
  )
}

export default CharacterCard