import React from 'react'
import CardArticleBig from '../components/CardArticleBig';
import img1 from "../assets/big-card-image.png"
import img2 from "../assets/hori-card-image-1.png"
import img3 from "../assets/hori-card-image-2.png"
import CardArticleHorizontal from '../components/CardArticleHorizontal';

function Articles() {
  return (
    <article id="articles" className='py-14  flex justify-center'>
      <div className=" flex flex-col justify-center max-w-6xl w-full">
        
        {/* top section */}
        <div className="flex mb-5">
          <div className="w-1/2">
            <p className='title-section'>Read More Articles <br /> From Our Blog</p>
          </div>
          <div className="w-1/2 flex justify-end items-end  space-x-12 text-lg">
            <div className="flex flex-col items-center cursor-pointer">
              Content Writing
              <div className='bg-[#98AA28] h-[3px] w-[70px]'></div>
            </div>
            <div className="text-gray-400 cursor-pointer">
              Content Marketing
              <div className='bg-transparent h-[3px] w-[50px]'></div>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="flex justify-between">
          <CardArticleBig title='10 Reasons to invest in SEO copywriting services' img={img1} date="AUGUST 17, 2021" />
          <div className="w-[50%] flex justify-between ">
            <CardArticleHorizontal 
              title='How to get hired at a top Digital Marketing' 
              img={img2} 
              date="AUGUST 17, 2021" 
              little_info='Agency life. We’ve all seen the photos posted on social media – the cool...'
            />
            <CardArticleHorizontal 
              title='Copywriting guidelines during the coronavirus' 
              img={img3} 
              date="AUGUST 17, 2021" 
              little_info='Since the coronavirus hit earlier this year, it’s hard to go anywhere...'
            />
          </div>
        </div>

      </div>
    </article>
  )
}

export default Articles;