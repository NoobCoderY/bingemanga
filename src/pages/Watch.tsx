import AnimeDescription from '../components/Anime/AnimeDescription'
import AnimeEpisode from '../components/Anime/AnimeEp'
import React from 'react'
import '../styles/Watch.scss'
import img from '../../src/assets/8114283.png'

const Watch = () => {
  return (
    <div className='watch__container' style={{backgroundImage:`url(https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg)`}}>
      <AnimeEpisode />
      <AnimeDescription />
    </div>
  )
}

export default Watch
