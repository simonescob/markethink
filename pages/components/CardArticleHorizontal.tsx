import React from 'react'
import eyesIcon from "../assets/eyes-icon.svg"

interface CardArticleHorizontalProps {
  img: string;
  title: string;
  date: string;
  little_info: string;
}

function CardArticleHorizontal(props: CardArticleHorizontalProps) {
  const { img, title, date, little_info } = props;
  return (
    <div className='w-[270px] h-[585px] space-y-5'>
      <div className="">
        <img src={img} alt="" />
      </div>
      <div className="text-gray-400">{date}</div>
      <div className="text-[#253D32] font-semibold text-[23px]">{title}</div>
      <div className="text-gray-400 text-[18px]">{little_info}</div>
      <button className='bg-transparent text-[#A3B938] font-semibold border-[1px] border-[#A3B938] p-2 rounded-full'>
        <img src={eyesIcon} alt="" />
      </button>
    </div>
  )
}

export default CardArticleHorizontal