import React from 'react'
import './card.css'

function Card() {
  return (
    <div className='card'>
      <div className='image'>
        <img alt='makeupitem' src='https://images.pexels.com/photos/1369653/pexels-photo-1369653.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
      </div>
      <div className='itemName'><p>Item Name</p></div>
      <div className='itemType'>Essential</div>
    </div>
  )
}

export default Card
