import React from 'react'
import tour2 from '../images/tour-2.jpeg'
const Tour = () => {
  return (
      <article className="tour-card">
        <div className="tour-img-container">
          <img src={tour2} className="tour-img" alt="" />
          <p className="tour-date">october 1th, 2019</p>
        </div>
        {/* tour footer  */}
        <div className="tour-footer">
          <h4 className="tour-title">best of java</h4>
          {/* tour info  */}
          <div className="tour-info">
            <p className="tour-country">
              <span>
                <i className="fas fa-map"></i>
              </span>{' '}
              indonesia
            </p>
            <div className="tour-details">
              <p>10 days</p>
              <p>from $4100</p>
            </div>
          </div>
          </div>
      </article>
  )
}
export default Tour
