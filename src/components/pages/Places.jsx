import React, { Component } from 'react'
import Hero from '../Hero'
import Client from '../../Safaris'
import SingleSafari from './SingleSafari'
import loadGif from '../../images/load.gif'
class Places extends Component {
  state = {
    safaris: [],
    curentPage: 1,
    postPerpage: 10,
    loading: true,
  }
  componentDidMount() {
    Client.getEntries({
      content_type: 'safaris',
    }).then((res) => {
      this.setState({
        safaris: [...res.items],
        loading: false,
      })
    })
  }
  render() {
    const safaris = this.state.safaris.map((safari) => (
      <SingleSafari key={safari.sys.id} safari={safari} />
    ))
    return (
      <>
        <Hero heroText="Safaris" />
        <div className="container my-5">
          {this.state.loading ? (
            <div className="d-flex justify-content-center align-items-center">
              <div style={{width:"200px"}} className="">
                <img src={loadGif} alt="load gif"/>
              </div>
            </div>
          ) : (
            <div className="section-center featured-center">{safaris}</div>
          )}
        </div>
      </>
    )
  }
}
export default Places
