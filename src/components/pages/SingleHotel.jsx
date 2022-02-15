import React from 'react';
import { useNavigate } from 'react-router';
const SingleHotel = ({hotel}) =>{
  console.log(hotel)
  const navigate = useNavigate()
  const { hotelName, hotelLocation} = hotel.fields
  const {url} = hotel.fields.hotelImage.fields.file
  const {id} = hotel.sys
  return(
    <article className="tour-card" onClick={()=>{navigate(`/hoteldescription/${id}`)}}>
      <div className="tour-img-container">
        <img src={url} className="tour-img" alt="" />
      </div>
      {/* tour footer  */}
      <div className="tour-footer">
        <h4 className="tour-title">{hotelName}</h4>
        {/* tour info  */}
        <div className="tour-info">
          <p className="tour-country">
            <span>
              <i className="fas fa-map"></i>
            </span>{' '}
            {hotelLocation}
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
export default SingleHotel;