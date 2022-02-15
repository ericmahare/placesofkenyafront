import React, { useEffect, useState } from 'react'
import Hero from '../Hero'
import Client from '../../Safaris'
import loadGif from '../../images/load.gif'
import SingleHotel from './SingleHotel'

const Hotels = () => {
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    Client.getEntries({
      content_type: 'hotels',
    }).then((res) => {
      setHotels([...res.items])
      setLoading(false)
    })
  }, [])
  const accommodation = hotels.map((hotel) => (
    <SingleHotel key={hotel.sys.id} hotel={hotel} />
  ))
  return (
    <>
      <Hero heroText={'Accomodation'} />
      <div className="container my-5">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center">
              <div style={{width:"200px"}} className="">
                <img src={loadGif} alt="load gif"/>
              </div>
            </div>
          ) : (
            <div className="section-center featured-center">{accommodation}</div>
          )}
        </div>
    </>
  )
}
export default Hotels
