import React,{ useState } from "react";
import {NavLink} from "react-router-dom"
import hamburger from "../assets/images/hamburger.svg"
import "../styles/land.css"
export default function Land(){
    const [isMobile,setIsMobile] = useState(false);
    return(
        <div className="land ">
            <button className="hamburger-button" onClick={()=> setIsMobile(!isMobile)}><img src={hamburger}/></button>
            <div 
                className={isMobile ? "land-nav-mobile" : "land-nav flex justify-evenly"}
                onClick={() => setIsMobile(false)}
            >
                <NavLink to="/">EPL</NavLink>
                <NavLink to="/laliga" >Laliga</NavLink>
                <NavLink to="/isl">ISL</NavLink>   
                <NavLink to="/bundesliga">Bundesliga</NavLink>  
            </div>
            <div className="stadium"> 

            </div>
        </div>
    )
}