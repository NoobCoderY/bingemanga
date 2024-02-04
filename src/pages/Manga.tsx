import React from 'react'
import '../styles/Manga.scss'
import data from '../test/mangaData.json'
import { useNavigate } from 'react-router-dom'
import { CiRead } from "react-icons/ci";

const Manga = () => {
  const navigate = useNavigate()
  return (
    <div className="manga-container">
      <div className="manga-header">
        <img className="manga-poster" src={data?.animePoster} alt="." />
        <div className="manga-details">
          <h1 className="manga-title">{data?.animeTitle}</h1>
          <p className="manga-description">{data?.description}</p>
        </div>
      </div>
      <div className="manga-chapters">
        <h2 className="chapters-title">Chapters</h2>
        <ul className='chapters__container'>
          {data?.chapters?.map((item:any, index) => (
            <div className='chapter__card' key={index} onClick={()=>navigate(`/manga/${data?.animeTitle}/${item?.chapterNo}`, {state:item.pages})}>
              <p className='chapter__details'>{data?.animeTitle}{` Chapter `}{item?.chapterNo}: {item?.chapterName} </p>
              <div className='read__now'> <CiRead/> Read</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Manga