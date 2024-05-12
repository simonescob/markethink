import React from 'react';
import ButtonCTA from './ButtonCTA';
import logo from '/logo-markethink.png'

interface INavbarProps {
  items: {
    name: string,
    url: string,
  }[]
}

function Navbar(props: INavbarProps) {
  const { items } = props
  return (
    <div className='flex justify-between items-center w-[80%]'>
      <div className="">
        <img src={logo} alt="" />
      </div>
      <div className="flex space-x-12">
        {items.map((item: any) =>
          <li className='list-none capitalize'><a href="">{item.name}</a></li> 
        )}
      </div>
      <div className="">
        <button className='btn-navbar'>Free trial</button>
      </div>
    </div>
  )
}

export default Navbar;