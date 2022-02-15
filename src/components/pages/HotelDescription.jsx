import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../../Safaris'
import loadGif from '../../images/load.gif'

const SingleElement = () => {
  let params = useParams()
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    Client.getEntries({
      content_type: 'hotels',
    }).then((res) => {
      setHotels([...res.items])
      setLoading(false)
    })
  }, [])
  if (!loading) {
    const hotel = hotels.find((hotel) => hotel.sys.id === params.id)
    const { url } = hotel.fields.hotelImage.fields.file
    const { hotelName,describe} = hotel.fields
    // console.log(url);
    return (
      <>
        <div className="container my-5">
          <h1 className="singleElement-header text-center mb-5 text-bold">
            {hotelName}
          </h1>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="safari-img-container">
                <img src={url} alt="singleElement" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <p>{describe}</p>
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

export default SingleElement
