import React from 'react'
import '../styles/Chapter.scss'
import { useLocation } from 'react-router-dom'

const Chapter = () => {
  const location = useLocation()
  const data = location.state

  return (
    <div className="chapter__container">
      {data.map((item: any, index: number) => (
        
          <div key={index} className="chapter__img__container">
            <img
              src={item?.image}
              alt=""
            />
          </div>
        
      ))}
    </div>
  )
}

export default Chapter
