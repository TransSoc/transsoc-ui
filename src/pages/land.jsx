import React from "react";
import {NavLink} from "react-router-dom"
import "../styles/land.css"
export default function Land(){
    return(
        <div className="land ">
            <div className="land-nav flex justify-evenly">
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