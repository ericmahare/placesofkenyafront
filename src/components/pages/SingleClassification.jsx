import React from 'react'

const SingleClassification = ({ poster }) => {
  const { title } = poster.fields
  const { url } = poster.fields.image.fields.file

  return (
    <div className="col-12 col-md-6 my-4 text-center">
      <div className="classified-img-container">
        <h3>{title}</h3>
        <img src={url} alt="" />
      </div>
    </div>
  )
}
export default SingleClassification
