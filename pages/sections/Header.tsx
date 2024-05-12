import React from 'react'
import ButtonCTA from '../components/ButtonCTA'
import Navbar from '../components/Navbar'
import bgHero from '/bg-Img-hero.png'
import figuresHero from '/figures-hero.svg'

function Header() {
  const sections = [
    {name: 'features', url: '/features'},
    {name: 'Pricing', url: '/pricing'},
    {name: 'About', url: '/about'},
    {name: 'Contact Us', url: '/contact'},
  ]
  return (
    <header 
      className='bg-gradient-to-br from-[#395C4D] to-[#132D1F] h-screen relative'>
      <img className='absolute top-0 left-0 -z-0 w-full h-full' src={bgHero} alt="" />
      <img className='absolute top-[35vh] left-0 -z-0 w-full' src={figuresHero} alt="" />
      <div className="relative z-10 flex flex-col items-center justify-start text-white py-10">
        <Navbar items={sections}/>
        <div className="text-center pt-20">
          <div className="space-y-3 pb-12">
            <div className="text-3xl font-medium opacity-70">The Best</div>
            <div className="text-[90px] font-semibold">Digital Marketing</div>
            <div className="opacity-70 text-xl">
              Completely synergize resource taxing relationships via premier <br /> niche markets. Professionally cultivate one-to-one customer
            </div>
          </div>
        <ButtonCTA text="get started"/>
        </div>
      </div>
    </header>
  )
}

export default Header