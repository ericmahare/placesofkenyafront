import React, { useState, useEffect } from 'react'
import Hero from '../Hero'
import Client from '../../Safaris'
import SingleEvent from './SingleEvent'
import loadGif from '../../images/load.gif'

export const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Client.getEntries({
      content_type: 'events',
    }).then((res) => {
      setEvents([...res.items])
      setLoading(false)
    })
  }, [])
  const allEvents = events.map((event) => (
    <SingleEvent key={event.sys.id} event={event} />
  ))
  return (
    <div>
      <Hero heroText={'Events'} />
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <div style={{ width: '200px' }} className="">
            <img src={loadGif} alt="load gif" />
          </div>
        </div>
      ) : (
        <div className="section-center featured-center">{allEvents}</div>
      )}
    </div>
  )
}
