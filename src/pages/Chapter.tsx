import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Chapter = () => {
    const location = useLocation()
    const data = location.state
    console.log(data);
    
  return (
    <div>
        {data.map((item:any, index:number)=>(
            <div key={index}>
                <img style={{width:'50%', height:'60%'}} src={item?.image} alt="" />
                <p>{item.pageNo}</p>
            </div>
        ))}
    </div>
  )
}

export default Chapter