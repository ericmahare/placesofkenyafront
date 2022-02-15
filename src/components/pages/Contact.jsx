import React, { Component } from 'react'
import axios from 'axios'
import loadGif from '../../images/load.gif'
class Contact extends Component {
  state = {
    fullname: '',
    email: '',
    phone: '',
    message: '',
    sbtMsg: '',
    loading: true,
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading:false
      })
    }, 2000)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { fullname, phone, email, message } = this.state
    const data = {
      fullname,
      email,
      message,
      phone,
    }
    this.setState({
      sbtMsg: 'sending...',
    })
    axios
      .post('/api/forma', data)
      .then((res) => {
        this.setState({
          fullname: '',
          phone: '',
          email: '',
          message: '',
          sbtMsg: 'Message sent successfully',
          sent: false,
        })
        setTimeout(() => {
          this.setState({
            sbtMsg: '',
          })
        }, 3000)
      })
      .catch((err) => {
        console.log('Message not sent')
      })
  }
  render() {
    const { name, email, message, phone, sbtMsg,loading } = this.state
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <input
                type="text"
                id="name"
                name="fullname"
                placeholder="Full Name"
                className="mb-1"
                value={name}
                onChange={this.handleChange}
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="mb-1"
                value={email}
                onChange={this.handleChange}
                required
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone number"
                value={phone}
                onChange={this.handleChange}
                required
              />
              <textarea
                id="message"
                cols="8"
                rows="5"
                name="message"
                className="mt-4"
                placeholder="message"
                value={message}
                onChange={this.handleChange}
                required
              ></textarea>
              <div className="my-3">
                <p className="text-success lead fw-bold">{sbtMsg}</p>
              </div>
              <button
                type="submit"
                className="btn btn-success rounded contact-btn"
              >
                Send Your Message
              </button>
            </form>
          </div>
          <div className="col-12 col-lg-6">
            {loading ? (
              <div className="d-flex justify-content-center align-items-center">
                <div className='mb-5'></div>
                <div style={{ width: '200px'}} className="d-flex justify-content-center align-items-center mt-5" >
                  <img src={loadGif} alt="loading..." className='d-block'/>
                </div>
              </div>
            ) : (
              <iframe
                title="Business Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8182986334537!2d37.06959391356526!3d0.0059770644231519135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1787f74b98be997f%3A0xfe906f74974897a2!2sA2Z%20Consultancy-%20Accounting%2C%20Hotels%20and%20Events!5e0!3m2!1sen!2ske!4v1643990160798!5m2!1sen!2ske"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Contact