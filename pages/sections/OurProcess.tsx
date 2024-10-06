import React from 'react'
import img1 from '../../public/our-process-image.svg'

// our-process-image.svg

function OurProcess() {
  return (
    <section id='our-process' className='flex flex-col justify-center items-center bg-[#F6FBF9] py-20 space-y-10'>
      <h1 className='title-section'>How Can We Help You?</h1>
      <p className='text-[#78847D]'>Let's do great work together</p>
      <div className="">
        <img className='pr-12' src={img1} alt="" />
        <div className="flex justify-between text-center text-xl">
          <p className='font-semibold text-[#253D32]'>Update content <br /> on my Website</p>
          <p>Improve User <br /> Experience</p>
          <p>Request Free <br /> Website Review</p>
          <p>Improve your <br /> SEO Rankings</p>
        </div>
      </div>
      <button className="link-section">See more</button>
    </section>
  )
}

export default OurProcess;