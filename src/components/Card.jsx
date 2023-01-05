import React from 'react'
import "../styles/Card.css"
import player from "../assets/Players/player1.svg";
import star from "../assets/images/Star.png"

function Card(props) {
  return (
    <div className="card-container">
        <div className='cardAbout'>
          <div><span>Contract Upto : </span>{props.contract_upto}</div>
          <div><span>Probable Transfer To : </span>{props. Probable_transfer_to}</div>
          <div><span>Transfer possibility : </span>{props.Transfer_possibility}</div>
          <div><span>Pos : </span>{props.pos}</div>
        </div>
        <img className='star' src={star}/>
        {/* <img className='star1' src={star}/> */}
        <div className='playerImg'>
          <img src={player} />
        </div>
        <div className='cardName'>{props.name}</div>
    </div>
  )
}

export default Card