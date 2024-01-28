import React from 'react'
import '../Anime/AnimeDescription.scss'
import data from '../../test/animeList.json'

const AnimeDescription = () => {
  return (<>
    
        <div className="anime__data__container" >
          <img
            src="https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg"
            width={250}
            height={300}
            alt="img"
          />

          <div className="anime__data__box">
            <p className="anime__title">
              Bleach: Sennen Kessen-hen – Ketsubetsu-tan
            </p>

            <div className="anime__details__box">
              <div className="anime__details">
                <p className="anime__details__heading">Type:</p>
                <p className="anime__details__description">TV</p>
              </div>
              <div className="anime__details">
                <p className="anime__details__heading">Episodes:</p>
                <p className="anime__details__description">13</p>
              </div>
              <div className="anime__details">
                <p className="anime__details__heading">Status:</p>
                <p className="anime__details__description">Ongoing</p>
              </div>
              <div className="anime__details">
                <p className="anime__details__heading">Aired:</p>
                <p className="anime__details__description">
                  Jul 8, 2023 to Sep 30, 2023
                </p>
              </div>
              <div className="anime__details">
                <p className="anime__details__heading">Genres:</p>
                <p className="anime__details__description">
                  Action, Adventure, Fantasy
                </p>
              </div>
              <div className="anime__details">
                <p className="anime__details__heading">Demographic:</p>
                <p className="anime__details__description">Shounen</p>
              </div>
              <div className="anime__details">
                <p className="anime__details__heading">Studios:</p>
                <p className="anime__details__description">Pierrot</p>
              </div>
            </div>

            <div className="anime__description">
              Synopsis
              <p>
                {`After a brutal surprise attack by the forces of Quincy King Yhwach,
            the resident Reapers of the Soul Society lick their wounds and mourn
            their losses. Many of the surviving Soul Reaper captains train to
            battle without their Bankai, the ultimate technique wielded by the
            fiercest warriors. In the previous assault, Ichigo Kurosaki narrowly
            managed to help fend off Yhwach's fearsome wrath. However, to
            ultimately defeat his godly adversary and save his allies, Ichigo
            must now undergo severe training that will push him beyond his
            physical, emotional, and mental limits. Though Yhwach already holds
            the upper hand in this ongoing blood feud, he also successfully
            recruits Uryuu Ishida, Ichigo's close friend and rival, to be his
            successor. Yhwach strikes out once again at the weakened Soul
            Society, intent on finally obliterating his long-standing enemies.
            As Ichigo struggles to attain new power, the Soul Reaper captains
            fight for survival and borrowed time`}
              </p>
            </div>
          </div>
        </div>
      
    </>
    
  )
}

export default AnimeDescription
