import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import ImageHeader from './ImageHeader'
import TeamContainer from './TeamContainer'
import Services from './Services'
import AboutRow from './AboutRow'
import Contact from './Contact'
import Footer from './Footer'
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className='Content'>
      <Navbar />
      <Routes>
        <Route path="/" element={<ImageHeader />} />
        <Route path="/team" element={<TeamContainer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutRow />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
