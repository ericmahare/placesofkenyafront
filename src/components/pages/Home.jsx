import React, { useState, useEffect } from 'react'

import Header from '../Header'
import aboutImg from '../../images/about.jpeg'
import tourOne from '../../images/tour-1.jpg'
import tourTwo from '../../images/tour-2.jpg'
import tourThree from '../../images/tour-3.jpg'
import tourFour from '../../images/tour-4.jpeg'
import tourFive from '../../images/tour-5.jpeg'
import tourSix from '../../images/tour-6.jpg'
import tourSeven from '../../images/tour-7.jpg'
import tourEight from '../../images/tour-8.jpg'
import loadGif from '../../images/load.gif'

import { useNavigate } from 'react-router-dom'
import Client from '../../Safaris'
import SingleSafari from './SingleSafari'

const Home = () => {
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

  const places = safaris.map((safari) => {
    if (safari.fields.featured) {
      return (
        <SingleSafari
          key={safari.sys.id}
          safari={safari}
          onClick={() => navigate('/singleElement')}
        />
      )
    } else {
      return null
    }
  })
  return (
    <>
      <Header />
      {/* About section */}
      <div className="container-fluid my-5 about">
        <div className="title-wrapper">
          <h2 className="title">
            About <span className="subtitle">us</span>
          </h2>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col col-md-6 about-img text-center">
              <img src={aboutImg} alt="about" className="about-photo" />
            </div>
            {/* about info */}
            <article className="about-info  col-md-6 mt-5 mt-md-0">
              <h3>explore the difference</h3>
              <p className='lead'>
                Discover Kenya's natural beauty wrapped in her rich scenery
                .Such as, the diverse cultures of her people and wide range of
                her wildlife that will make your holiday enjoyable.
              </p>
              <p className='lead'>
                It is usally the total experience that we offer that heightens the enjoyment of our guests who come to East Africa. Travelling through this wonderful land from the animals to the colourful birdlife, the different languages and the traditional cultures all combine to give our client a thrill and exitement of a lifetime.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* Services section */}
      <section className="section services" id="services">
        {/* title  */}
        <div className="title-wrapper">
          <h2 className="title">
            our <span className="subtitle">services</span>
          </h2>
        </div>
        {/* end of title */}

        <div className="section-center services-center container text-center">
          {/* single service */}
          <div className="row">
            <article className="service col-md-4">
              <span className="service-icon">
                <i className="fas fa-wallet fa-fw"></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">Events</h4>
                <p className="service-text lead">
                Whether you're a local, new in town or just cruising through we've got loads of great tips and events for you.
                </p>
              </div>
            </article>
            {/* end of single service */}
            {/* single service */}
            <article className="service col-md-4">
              <span className="service-icon">
                <i className="fas fa-elephant fa-fw"></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">Safaris</h4>
                <p className="service-text lead">
                At Places of Kenya, we are perfectly equipped to bring you a seamless Kenya safari tour.
                </p>
              </div>
            </article>
            {/* end of single service */}
            {/* single service */}
            <article className="service col-md-4">
              <span className="service-icon">
                <i className="fas fa-hotel fa-fw"></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">Accomodation</h4>
                <p className="service-text lead">
                We will help you find your Perfect accomodation and help you Compare the Best Deals on amazing Hotels.
                </p>
              </div>
            </article>
            {/* end of single service */}
          </div>
        </div>
      </section>
      {/* end of services */}
      {/*Featured tours*/}
      <section className="container-fluid">
        {/* title  */}
        <div className="title-wrapper">
          <h2 className="title">
            Featured <span className="subtitle">Safaris</span>
          </h2>
        </div>
        {/* end of title */}
        <div className="section-center featured-center">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center">
              <div style={{ width: '200px' }} className="">
                <img src={loadGif} alt="load gif" />
              </div>
            </div>
          ) : (
            <>{places}</>
          )}
        </div>
      </section>
      {/* end of tours section */}
      <section id="gallery" className="gallery">
        {/* title */}
        <div className="title-wrapper">
          <h2 className="title">
            our <span className="subtitle ">gallery</span>
          </h2>
        </div>
        {/* end of title */}
        <div className="gallery-center">
          {/* single item */}
          <div className="gallery-img-container">
            <img src={tourOne} className="gallery-img" alt="" />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          {/* end of single item */}
          {/* single item */}
          <div className="gallery-img-container">
            <img src={tourTwo} className="gallery-img" alt="" />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          {/* end of single item */}
          {/* single item */}
          <div className="gallery-img-container">
            <img src={tourThree} className="gallery-img" alt="" />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          {/* end of single item */}
          {/* single item */}
          <div className="gallery-img-container">
            <img src={tourFour} className="gallery-img" alt="" />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          {/* end of single item */}
          {/* single item */}
          <div className="gallery-img-container">
            <img src={tourFive} className="gallery-img" alt="" />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          {/* end of single item */}
          {/* single item */}
          <div className="gallery-img-container">
            <img src={tourSix} className="gallery-img" alt="" />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          {/* end of single item */}
          {/* single item */}
          <div className="gallery-img-container">
            <img src={tourSeven} className="gallery-img" alt="" />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          {/* end of single item */}
          {/* single item */}
          <div className="gallery-img-container">
            <img src={tourEight} className="gallery-img" alt="" />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          {/* end of single item */}
        </div>
      </section>
      {/* end of gallery */}
    </>
  )
}
export default Home
