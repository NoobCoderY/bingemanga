import AnimeDescription from '../components/Anime/AnimeDescription'
import AnimeEpisode from '../components/Anime/AnimeEp'
import React from 'react'
import '../styles/Watch.scss'

const Watch = () => {
  return (
    <>
      <AnimeEpisode />
      <AnimeDescription />
    </>
  )
}

export default Watch
