import React from "react";
import "../styles/heading.css"
export default function Heading(props){
    return(
        <div className="head flex justify-center">
            <div className="heading">
                {props.title}
            </div>
        </div>
    )
}