import React from 'react'
import '../styles/Manga.scss'
import data from '../test/mangaData.json'
import { useNavigate } from 'react-router-dom'

const Manga = () => {
  const navigate = useNavigate()
  return (
    <div className="anime-container">
      <div className="anime-header">
        <img className="anime-poster" src={data?.animePoster} alt="." />
        <div className="anime-details">
          <h1 className="anime-title">{data?.animeTitle}</h1>
          <p className="anime-description">{data?.description}</p>
        </div>
      </div>
      <div className="anime-chapters">
        <h2 className="chapters-title">Chapters</h2>
        <ul>
          {data?.chapters?.map((item:any, index) => (
            <div key={index} onClick={()=>navigate(`/manga/${data?.animeTitle}/${item?.chapterNo}`, {state:item.pages})}>
              {item?.chapterNo}
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Manga