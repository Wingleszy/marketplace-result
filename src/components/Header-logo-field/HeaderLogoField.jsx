import React from 'react'
import './header-logo-field.css'
<<<<<<< HEAD
=======
import logo from '../../img/Header-logo.png'
>>>>>>> 412c004 (fix)

export default function HeadeLogoField() {
  return (
    <div className="header-logo-field">
<<<<<<< HEAD
      <div className="header-logo-field">
        <a href="">
          <img src="../img/Header-logo.png" alt="" />
        </a>
      </div>
=======
        <a href="">
          <img src={logo} alt="" />
        </a>
>>>>>>> 412c004 (fix)
    </div>
  )
}
