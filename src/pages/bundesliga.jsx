import React, { useState } from "react";
import Heading from "../components/heading";
import "../styles/epl.css"
import "../styles/Card.css"
import db from "../components/firebase";
import { collection,doc,getDocs,getDoc} from "firebase/firestore";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import Card from "../components/Card";
import real from "../assets/images/real.png";
import rs from "../assets/images/rs.png";
import vila from "../assets/images/vila.png";
import barca from "../assets/images/barca.png";
import atm from "../assets/images/atm.png";
import atc from "../assets/images/atc.png";
import sev from "../assets/images/sev.png";
import rayo from "../assets/images/rayo.png";


const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows : true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };

export default function Bundesliga(){
const[data,setData]=useState()
// async function getTeam(){
// const docSnap = await getDoc(doc(db, "team/akbBER4RsvS9beA0c0ao/manci/wjvwOKqbycpQnG5n8ozm"));
// if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data().linked);
//     setData(docSnap.data().linked)
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }
async function handleClick(team){
    console.log(team)
    const docSnap = await getDoc(doc(db, "team/akbBER4RsvS9beA0c0ao/"+team+"/data"));
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().linked);
        window.scrollTo({top: 100, left: 0, behavior: 'smooth'});
        setData(docSnap.data().linked)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    
}
        const cards= data?.map((ele) => {
            return ( 
                <Card 
                    {...ele} 
                    key={ele}
                />
            )
        })

    return(
        <div className="laliga">
        <Heading title={"Bundesliga"}/>
        
        <div className="staimg">
           
             <div className="cards-list">
             <Slider {...settings}>
                {cards}
            </Slider>
            </div>
        </div>

        <div className="frame grid grid-cols-4 items-center ">  
                <button className="h-[25vh] flex items-center justify-center" onClick={()=>handleClick("wolves")}><img  src={real} className="h-[100%]"/></button>    
                <button className="col-start-3 h-[25vh] flex items-center justify-center"  onClick={()=>handleClick("arsenal")}><img src={barca} className="h-[100%]"/></button>
                <button className="col-start-2 h-[25vh] flex items-center justify-center" onClick={()=>handleClick("brighton")}><img src={atm} className="h-[100%]" /></button>
                <button className="col-start-4 h-[25vh] flex items-center justify-center" onClick={()=>handleClick("manci")}><img src={atc} className="h-[100%]" /></button>
                <button className="h-[25vh] flex items-center justify-center" onClick={()=>handleClick("manu")}><img src={vila} className="h-[100%]"/></button>
                <button className="col-start-3 h-[25vh] flex items-center justify-center" onClick={()=>handleClick("liverpool")}><img src={sev} className="h-[100%]"/></button>
                <button className="col-start-2 h-[25vh] flex items-center justify-center" onClick={()=>handleClick("newcastle")}><img src={rayo} className="h-[100%]"/></button>
                <button className="col-start-4 h-[25vh] flex items-center justify-center" onClick={()=>handleClick("brentford")}><img src={rs} className="h-[100%]"/></button> 
        </div>


        </div>
    )
}