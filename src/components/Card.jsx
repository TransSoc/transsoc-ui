import React from 'react'
import "../styles/Card.css"

function Card(props) {
  return (
    <div className="card-container flex-col">
        <div className='cardName'>{props.name}</div>
    </div>
  )
}

export default Card