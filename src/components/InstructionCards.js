import React from 'react'
import './InstructionCards.css'


function Cards({image, instructions, title, details}) {
  return (

<div className='block'>
   <div className="inst-card">
      <div className="inst-card__img">
        <img src={image}/>
      </div>
      <div className='inst-card__text'>
        <h3> {instructions}</h3>
        <div className='inst-card__details'>
            <h1>{title}</h1>
            <p>{details}</p>
        </div>
      </div>
    </div>
 </div>
  )
}

export default Cards;
