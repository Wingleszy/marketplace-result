import React, { useState } from 'react'
import Services from './Services/Services'
import Slider from '../Slider/Slider'
import News from '../News/News'
import HeadeLogoField from '../Header-logo-field/HeaderLogoField'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './main.css'

export default function Main() {


  return (

  <div className="header-logo">
<<<<<<< HEAD
    <div className="header-logo-field">
=======
    <div className="header-cont">
>>>>>>> 412c004 (fix)
      <HeadeLogoField/>
    </div>
    <div className="container">
      <Header /> 
      <main className='main'>
        <div className='main-field'> 
          <div>
            <Slider/>
          </div>
          <div>
            <Services/>
          </div>
          <div>
            <News/>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  </div>
  )
}

