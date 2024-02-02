import React from 'react'
import list from '../../test/animeList.json'
import '../Anime/List.scss'
import { useNavigate } from 'react-router-dom'


const AnimeList = () => {
  const navigate = useNavigate()
  
  return (
    <div className="List__box">
      {list?.map((item, index) => (
        <div className="card__box" key={index} onClick={()=> navigate(`/manga/${item.title}`)}>
          <img src={item.poster} alt="img" height={260} width={200} />
          <p className="title">{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default AnimeList
