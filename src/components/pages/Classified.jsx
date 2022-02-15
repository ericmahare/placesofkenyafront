import React, { useState, useEffect } from 'react'
import Client from '../../Safaris'
import loadGif from '../../images/load.gif'
import SingleClassification from './SingleClassification'
const Classified = () => {
  const [posters, setPosters] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    Client.getEntries({
      content_type: 'classified',
    }).then((res) => {
      setPosters([...res.items])
      setLoading(false)
    })
  }, [])
  const classification = posters.map((poster) => (
    <SingleClassification poster={poster} key={poster.sys.id} />
  ))
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <div style={{ width: '200px' }} className="">
            <img src={loadGif} alt="load gif" />
          </div>
        </div>
      ) : (
        <div className="container my-5">
          <div className="row">{classification}</div>
        </div>
      )}
    </>
  )
}
export default Classified
