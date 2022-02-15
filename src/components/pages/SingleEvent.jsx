import React from 'react'
import { useNavigate } from 'react-router'
const SingleEvent = ({ event }) => {
  let navigate = useNavigate()
  const { name, location, datePosted } = event.fields
  const { url } = event.fields.image.fields.file
  const { id } = event.sys

  const adate = datePosted.slice(8, 10)
  const bdate = datePosted.slice(0, 4)
  const sdate = datePosted.slice(11, 16)
  let data = parseInt(datePosted.slice(6, 7))
  let date
  switch (data) {
    case 1:
      date = `${adate},Jan ${bdate} (${sdate})`
      break
    case 2:
      date = `${adate},Feb ${bdate} (${sdate})`
      break
    case 3:
      date = `${adate},Mar ${bdate} (${sdate})`
      break
    case 4:
      date = `${adate},Apr ${bdate} (${sdate})`
      break
    case 5:
      date = `${adate},May ${bdate} (${sdate})`
      break
    case 6:
      date = `${adate},June ${bdate} (${sdate})`
      break
    case 7:
      date = `${adate},July ${bdate} (${sdate})`
      break
    case 8:
      date = `${adate},Aug ${bdate} (${sdate})`
      break
    case 9:
      date = `${adate},Sep ${bdate} (${sdate})`
      break
    case 10:
      date = `${adate},Oct ${bdate} (${sdate})`
      break
    case 11:
      date = `${adate},Nov ${bdate} (${sdate})`
      break
    case 12:
      date = `${adate},Dec ${bdate} (${sdate})`
      break
    default:
      date = 'no date'
      break
  }
  return (
    <article
      className="tour-card"
      onClick={() => {
        navigate(`/eventdescription/${id}`)
      }}
    >
      <div className="tour-img-container">
        <img src={url} className="tour-img" alt="" />
        <p className="tour-date">Event Date: {date}</p>
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

export default SingleEvent
