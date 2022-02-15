import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleService = ({ service }) => {
  const { id } = service.sys
  const { title } = service.fields
  const { url } = service.fields.image.fields.file

  const navigate = useNavigate()
  return (
    <article
      className="tour-card"
      onClick={() => {
        navigate(`/servicedescription/${id}`)
      }}
    >
      <div className="tour-img-container">
        <img src={url} className="tour-img" alt="" />
      </div>
      {/* tour footer  */}
      <div className="tour-footer">
        <h4 className="tour-title">{title}</h4>
        {/* tour info  */}
        <div className="tour-info">
          <p className="tour-country">
            <span>
              <i className="fas fa-map"></i>
            </span>{' '}
          </p>
          <div className="tour-details">
            <p></p>
            <p className="text-primary text-bold">more info..</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SingleService
