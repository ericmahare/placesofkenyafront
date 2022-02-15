import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../../Safaris'
import loadGif from '../../images/load.gif'

const ServiceDescription = () => {
  let params = useParams()
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    Client.getEntries({
      content_type: 'consultancy',
    }).then((res) => {
      setServices([...res.items])
      setLoading(false)
    })
  }, [])
  if (!loading) {
    const service = services.find((service) => service.sys.id === params.id)
    const { url } = service.fields.image.fields.file
    const { title, description } = service.fields

    // console.log(url);
    return (
      <>
        <div className="container my-5">
          <h1 className="singleElement-header text-center mb-5 text-bold">
            {title}
          </h1>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="safari-img-container">
                <img src={url} alt="singleElement" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <p>{description}</p>
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
export default ServiceDescription
