import React from 'react'
import logos from '/partner.svg'

function Partner() {
  return (
    <section id="partner" className='flex justify-center items-center bg-green-light py-12'>
      <img src={logos} alt="" />
    </section>
  )
}

export default Partner;