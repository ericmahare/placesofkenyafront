import React, { useState, useEffect } from 'react'
import Hero from '../Hero'
import Client from '../../Safaris'
import loadGif from '../../images/load.gif'
import SingleService from './SingleService'

const Consult = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Client.getEntries({
      content_type: 'consultancy',
    }).then((res) => {
      setServices([...res.items])
      setLoading(false)
    })
  }, [])

  const allServices = services.map((service) => (
    <SingleService key={service.sys.id} service={service} />
  ))
  return (
    <>
      <Hero heroText="consult us now" />
      <div className="container my-5">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <div style={{ width: '200px' }} className="">
              <img src={loadGif} alt="load gif" />
            </div>
          </div>
        ) : (
          <div className="section-center featured-center">{allServices}</div>
        )}
      </div>
    </>
  )
}
export default Consult
