import React from 'react'
import '../styles/Manga.scss'
import data from '../test/mangaData.json'
import { useNavigate } from 'react-router-dom'
import { CiRead } from 'react-icons/ci'

const Manga = () => {
  const navigate = useNavigate()
  return (
    <div className="manga-container">
      <div className="manga__header">
        <section className="manga__section__1">
          <div className="manga__image">
            <img src={data.animePoster} alt="img" />
          </div>

          <div className="manga__details">
            <p>One Piece</p>

            <div className="button">
              <button>START READING</button>
              <button>BOOKMARK</button>
            </div>

            <div className="additional__details">
              <p>Manga Type</p>
              <p>Some other</p>
            </div>

            <p className='manga__description'>Description</p>

            <div className="socials"></div>
          </div>
        </section>

        <section className="manga__section__2">
          <p>Author:Oda, Eiichiro</p>
          <p>Published:Jul 22, 1997 to ?</p>
          <p>Genres:Action, Adventure, Fantasy</p>
          <p>Demographics:Shounen</p>
          <p>Rating: 9.2/10</p>
        </section>
      </div>

      <div className="manga-chapters">
        <h2 className="chapters-title">Chapters</h2>
        <ul className="chapters__container">
          {data?.chapters?.map((item: any, index) => (
            <div
              className="chapter__card"
              key={index}
              onClick={() =>
                navigate(`/manga/${data?.animeTitle}/${item?.chapterNo}`, {
                  state: item.pages,
                })
              }
            >
              <p className="chapter__details">
                {data?.animeTitle}
                {` Chapter `}
                {item?.chapterNo}: {item?.chapterName}{' '}
              </p>
              <div className="read__now">
                {' '}
                <CiRead /> Read
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Manga
