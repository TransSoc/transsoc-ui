import React from "react";
import image7 from "../assets/images/image 7.svg"
import image5 from "../assets/images/image 5.svg"
import image6 from "../assets/images/image 6.svg"
import image9 from "../assets/images/image 9.svg"
import image8 from "../assets/images/image 8.svg"
import image10 from "../assets/images/image 10.svg"
import image12 from "../assets/images/image 12.svg"
import image11 from "../assets/images/image 11.svg"
import Heading from "../components/heading";
import "../styles/epl.css"
export default function Epl(){
    return(
        <div className="epl">
        <Heading title={"ENGLISH PREMIER LEAGUE"}/>
        <div className="staimg">
        </div>
        <div className="frame">  
            <div className="team-icons grid grid-cols-4 gap-20">
                <button className="col-span-2"><img src={image7}/></button>    
                <button><img src={image5}/></button>
            </div>
            <div className="team-icons grid grid-cols-4 gap-20">
                <button className="col-start-2 col-span-2"><img src={image6}/></button>
                <button><img src={image9}/></button>
            </div>
            <div className="team-icons grid grid-cols-4 gap-20"> 
                <button className="col-span-2"><img src={image8}/></button>
                <button><img src={image10}/></button>
            </div>
            <div className="team-icons grid grid-cols-4 gap-20">
                <button className="col-start-2  col-span-2"><img src={image12}/></button>
                <button><img src={image11}/></button>
            </div>
                
           
            
        </div>
        </div>
    )
}