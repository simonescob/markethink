import React from 'react'

interface CardArticleBigProps {
  img: string;
  title: string;
  date: string;
}

function CardArticleBig(props: CardArticleBigProps) {
  const { img, title, date } = props;
  return (
    <div className='w-[540px] h-[585px] space-y-5'>
      <div className="">
        <img src={img} alt="" />
      </div>
      <div className="text-gray-400">{date}</div>
      <div className="text-[#253D32] font-semibold text-[25px]">{title}</div>
      <button className='bg-transparent text-[#A3B938] font-semibold border-[1px] border-[#A3B938] px-8 py-2 rounded-full'>Read more</button>
    </div>
  )
}

export default CardArticleBig;