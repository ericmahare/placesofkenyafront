import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../../Safaris'
import loadGif from '../../images/load.gif'

const EventDescription = () => {
  let params = useParams()
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    Client.getEntries({
      content_type: 'events',
    }).then((res) => {
      setEvents([...res.items])
      setLoading(false)
    })
  }, [])
  if (!loading) {
    const data = events.find((event) => event.sys.id === params.id)
    console.log(data)
    const { url } = data.fields.image.fields.file
    const { name, description } = data.fields

    console.log(url);
    return (
      <>
        <div className="container my-5">
          <h1 className="singleElement-header text-center mb-5 text-bold">
            {name}
          </h1>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="safari-img-container">
                <img src={url} alt="singleElement" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <p className='lead'>{description}</p>
              <button
                className="btn btn-success"
                onClick={() => navigate('/contact')}
              >
                <i className="fas fa-phone"></i> Contact us
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div style={{ width: '200px' }} className="">
        <img src={loadGif} alt="load gif" />
      </div>
    </div>
  )
}
export default EventDescription