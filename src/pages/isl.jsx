import React, { useState } from "react";
import wol from "../assets/images/image 7.svg"
import ars from "../assets/images/image 5.svg"
import bright from "../assets/images/image 6.svg"
import manci from "../assets/images/image 9.svg"
import manu from "../assets/images/image 8.svg"
import liv from "../assets/images/image 10.svg"
import newc from "../assets/images/image 12.svg"
import brent from "../assets/images/image 11.svg"
import Heading from "../components/heading";
import "../styles/epl.css"
import "../styles/Card.css"
import db from "../components/firebase";
import { collection,doc,getDocs,getDoc} from "firebase/firestore";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import Card from "../components/Card";

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

export default function Isl(){
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
        <div className="isl">
        <Heading title={"Indian Super League"}/>
        
        <div className="staimg">
           
             <div className="cards-list">
             <Slider {...settings}>
                {cards}
            </Slider>
            </div>
        </div>

        <div className="frame grid grid-cols-4 items-center ">  
                <button className="h-[25vh] flex items-center justify-center" onClick={()=>handleClick("wolves")}><img  src={wol} className="h-[100%]"/></button>    
                <button className="col-start-3 h-[25vh] flex items-center justify-center"  onClick={()=>handleClick("arsenal")}><img src={ars} className="h-[100%]"/></button>
                <button className="col-start-2 h-[25vh] flex items-center justify-center" onClick={()=>handleClick("brighton")}><img src={bright} className="h-[100%]" /></button>
                <button className="col-start-4 h-[25vh] flex items-center justify-center" onClick={()=>handleClick("manci")}><img src={manci} className="h-[100%]" /></button>
                <button className="h-[25vh] flex items-center justify-center" onClick={()=>handleClick("manu")}><img src={manu} className="h-[100%]"/></button>
                <button className="col-start-3 h-[25vh] flex items-center justify-center" onClick={()=>handleClick("liverpool")}><img src={liv} className="h-[100%]"/></button>
                <button className="col-start-2 h-[25vh] flex items-center justify-center" onClick={()=>handleClick("newcastle")}><img src={newc} className="h-[100%]"/></button>
                <button className="col-start-4 h-[25vh] flex items-center justify-center" onClick={()=>handleClick("brentford")}><img src={brent} className="h-[100%]"/></button> 
        </div>


        </div>
    )
}