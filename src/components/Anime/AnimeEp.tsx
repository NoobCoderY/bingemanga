import React, { useState } from 'react'
import animeep from '../../test/animeData.json'
import '../Anime/AnimeEp.scss'

const AnimeEpisode = () => {
  const [epNo, setepNo] = useState<number>(0)
  const [animePlayer, setAnimePlayer] = useState<string>(animeep[0].link)

  const handleClick = (ep: string, number: number) => {

    setAnimePlayer(ep)
    setepNo(number)
    console.log(animePlayer)
  }
  const [loading, stillLoading] = useState(true)
  const finishLoading = () => {
      alert('finished loading')
      stillLoading(false)
  }
  return (
    <div className="anime__episode__container">
      <iframe src={animePlayer} width={500} height={300} allowFullScreen onLoad={finishLoading}></iframe>
      <div className="anime__episode">
        {animeep?.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.link, index)}
            style={{ backgroundColor: epNo === index ? 'red' : 'grey' }}
          >
            {item.episode}
          </li>
        ))}
      </div>
    </div>
  )
}

export default AnimeEpisode
