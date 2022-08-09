import React from 'react'
import './InstructionCards.css'


function Cards({image, instruction, title, details}) {
  return (
    <div className="inst-card">
      <div className="inst-card__img">
        <img src={image}/>
      </div>
      <div className='inst-card__text'>
        <h3> {instruction}</h3>
        <div className='inst-card__details'>
            <h1>{title}</h1>
            <p>{details}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards;
