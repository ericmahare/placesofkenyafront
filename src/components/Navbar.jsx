import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
const Navbar = () => {
  return (
    //Navbar
    <nav className="navbar navbar-expand-md navbar-light shadow p-0">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </NavLink>
        {/* toggle button for mobile nav */}
        <span
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </span>
        {/* navbar links */}
        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link me-3">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="places" className="nav-link me-3">
                Safaris
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="hotels" className="nav-link me-3">
                Accommodation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="classified" className="nav-link me-3">
                Classified
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="events" className="nav-link me-3">
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="consultancy" className="nav-link me-3">
                Consultancy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contact" className="nav-link me-3">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    //end of navbar
  )
}
export default Navbar
