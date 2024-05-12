import React from 'react'

function ButtonCTA(props: { text: any; }) {
  const { text } = props;
  return (
    <button className='btn-cta'>{text}</button>
  )
}

export default ButtonCTA;