import React from 'react'
import imgFooter from "../assets/back-img-footer.png"
import imgDecoration from "../assets/form-decoration.png"
import logo from "../assets/logo-markethink.png"
import logoColored from "../assets/logo-colored.svg"
import logos from "../assets/collect-logos.png"
import ButtonCTA from '../components/ButtonCTA'

function Footer() {

  const footerItems = [
    {
      title: 'Menu',
      items: [
        'Home',
        'Feature',
        'Pricing About',
        'Contact Us',
      ],
    },
    {
      title: 'Services',
      items: [
        'Content Strategy',
        'Content Development',
        'Content Creation',
        'Content Optimization',
      ],
    },
    {
      title: 'Company',
      items: [
        'Site Map',
        'Terms of Use',
        'Privacy Notice',
        'Cookies',
        'Modern Slavery',
      ],
    },
  ] 

  return (
    <footer className='flex flex-col justify-center items-center pb-10'>

      <div className="relative mb-16">
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
      <div className="max-w-6xl w-full grid grid-flow-col auto-cols-auto">
        <div className="col-end-2 flex flex-col items-start space-y-7 w-[350px]">
          <img className='' src={logoColored} alt="" />
          <p className='text-[#78847D]'>
            Marketing is a company that focus <br /> on developing company’s strategy <br /> for increase digital marketing
          </p>
          <img src={logos} alt="" />
        </div>

        {footerItems.map(item => (
          <div className="space-y-6 w-[180px]">
            <div className="text-[#253D32] text-xl font-semibold">{item.title}</div>
            <div className="space-y-3 text-[#78847D] text-[15px]">
              {item.items.map(subItem => (
                <div className="cursor-pointer">{subItem}</div>
              ))}
            </div>
          </div>
        ))}


      </div>
    </footer>
  )
}

export default Footer;