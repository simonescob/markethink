import React from 'react'
import imgFooter from "../assets/back-img-footer.png"
import imgDecoration from "../assets/form-decoration.png"
import logo from "../assets/logo-markethink.png"
import ButtonCTA from '../components/ButtonCTA'

function Footer() {
  return (
    <footer className='flex justify-center border pb-24'>

      <div className="relative">
        <img src={imgFooter} alt="" />
        <img className='-bottom-[71px] -right-[126px] absolute scale-[80%]' src={imgDecoration} alt="" />
        <div className="top-[130px] left-[140px] absolute space-y-12">
          <p className='text-[32px] text-white font-semibold'>
            Subscribe to get information, latest <br /> news and other interesting offers about 
          </p>
          <img src={logo} alt="" />
          <form className='flex space-x-10'>
            <input className='rounded-full px-4 py-3 outline-none' placeholder='Your name' type="text" />
            <ButtonCTA text={'Suscribe'}/>
          </form>

        </div>
      </div>

    </footer>
  )
}

export default Footer;