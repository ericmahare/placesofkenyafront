import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="container-fluid ml-5">
      <div className="row footer-container">
        <div className="col-12 col-md-8 col-lg-6">
          <h5 className="mb-3">Discover Kenya</h5>
          <p>
          It is usally the total experience that we offer that heightens the enjoyment of our guests who come to East Africa. Travelling through this wonderful land from the animals to the colourful birdlife, the different languages and the traditional cultures all combine to give our client a thrill and exitement of a lifetime.
          </p>
        </div>
        <div className="col-12 col-md-4 col-lg-3">
          <h5 className="mb-3">Quick Links</h5>
          <ul>
            <li>
              <Link to="safaris">Safaris</Link>
            </li>
            <li>
              <Link to="hotels">Accommodation</Link>
            </li>
            <li>
              <Link to="classified">Classified</Link>
            </li>
            <li>
              <Link to="events">Events</Link>
            </li>
            <li>
              <Link to="consultancy">Consultancy</Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 col-lg-3">
          <h5 className="mb-3">Social links</h5>
          <ul>
            <li>
              <a href="https://www.facebook.com/PlacesOfKenya" target="_blank">
                <i className="fab fa-facebook text-lg"></i> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B254725588607&text&app_absent=0"
                target="_blank"
              >
                {' '}
                <i className="fab fa-whatsapp"></i> Whatsapp
              </a>{' '}
            </li>
            <li>
              <a
                href="https://www.instagram.com/placesofkenya/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className='text-center mt-5'>&#169;placesofkenya 2022 || Designed by <a href="https://www.toskins.co.ke/" target="_blank">Toskins Solutions</a></p>
    </footer>
  )
}
export default Footer
