import React, { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Client from '../../Safaris'
import loadGif from '../../images/load.gif'

const SingleElement = () => {
  let params = useParams()
  const [safaris, setSafaris] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    Client.getEntries({
      content_type: 'safaris',
    }).then((res) => {
      setSafaris([...res.items])
      setLoading(false)
    })
  }, [])
  if (!loading) {
    const safari = safaris.find((safari) => safari.sys.id === params.id)
    const { url } = safari.fields.image.fields.file
    const { name, description } = safari.fields

    // console.log(url);
    return (
      <>
        <div className="container my-5">
        <h1 className='singleElement-header text-center mb-5 text-bold'>{name}</h1>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="safari-img-container">
                <img src={url} alt="singleElement" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <p>{description}</p>
              <button className='btn btn-success' onClick={()=>navigate("/contact")}><i className="fas fa-phone"></i> Contact us</button>
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
