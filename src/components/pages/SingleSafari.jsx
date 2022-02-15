import React from 'react'
import { useNavigate } from 'react-router-dom'
const SingleSafari = ({ safari }) => {
  const { name, location, dateCreated } = safari.fields
  const { url } = safari.fields.image.fields.file
  const {id} = safari.sys
  const date = dateCreated.slice(0, 10)
  
  let navigate = useNavigate()
  return (
    <article className="tour-card" onClick={()=>{navigate(`/singleElement/${id}`)}}>
      <div className="tour-img-container">
        <img src={url} className="tour-img" alt="" />
        <p className="tour-date">posted:{date}</p>
      </div>
      {/* tour footer  */}
      <div className="tour-footer">
        <h4 className="tour-title">{name}</h4>
        {/* tour info  */}
        <div className="tour-info">
          <p className="tour-country">
            <span>
              <i className="fas fa-map"></i>
            </span>{' '}
            {location}
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
export default SingleSafari
