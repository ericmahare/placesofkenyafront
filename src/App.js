import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Hotels from './components/pages/Hotels'
import SingleEvent from './components/pages/SingleSafari'
import SingleHotel from './components/pages/SingleHotel'
import Error from './components/pages/Error'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/pages/Contact'
import Places from './components/pages/Places'
import Consult from './components/pages/Consult'
import Classified from './components/pages/Classified'

import HotelDescription from './components/pages/HotelDescription'
import SingleElement from './components/pages/SingleElement'
import { Events } from './components/pages/Events'
import EventDescription from './components/pages/EventDescription'
import SingleService from './components/pages/SingleService'
import ServiceDescription from './components/pages/ServiceDescription'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels/" element={<Hotels />} />
        <Route path="/singlesafari/" element={<SingleEvent />} />
        <Route path="/events/" element={<Events />} />
        <Route path="/consultancy/" element={<Consult />} />
        <Route path="/places/" element={<Places />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/classified" element={<Classified />} />
        <Route path="/singlehotel" element={<SingleHotel />} />
        <Route path="/eventdescription/:id" element={<EventDescription />} />
        <Route path="/hoteldescription/:id" element={<HotelDescription />} />
        <Route path="/servicedescription/:id" element={<ServiceDescription/>} />
        <Route path="/singleElement/:id" element={<SingleElement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
