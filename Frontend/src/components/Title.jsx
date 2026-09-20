import React from 'react'
import '../CSS/Title.css'

export const Title = ({ text }) => {
  return (
    <div>
      <p className='title'>{text}</p>
    </div>
  )
}
