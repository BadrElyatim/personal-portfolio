import React from 'react'
import whiteLogo from '../assets/white-logo.svg'

const Footer = () => {
  return (
    <footer className='py-4 bg-black text-white'>
        <div className='container flex justify-between items-center'>
            <img src={whiteLogo} alt="white logo" />
            <span>@2024</span>
        </div>
    </footer>
  )
}

export default Footer