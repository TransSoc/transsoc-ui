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
import db from "../components/firebase";
import { collection,doc,getDocs,getDoc} from "firebase/firestore";
export default function Epl(){
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
        setData(docSnap.data().linked)
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      window.scrollTo({top: 100, left: 0, behavior: 'smooth'});
}
    return(
        <div className="epl">
        <Heading title={"ENGLISH PREMIER LEAGUE"}/>
        <div className="staimg">
        {
        data.map((ele) => <div>{ele.name}</div>)
        }
        </div>
        <div className="frame">  
            <div className="team-icons pt-20 pl-20 grid grid-cols-4 ">
                <button className="col-span-2" onClick={()=>handleClick("wolves")}><img src={wol}/></button>    
                <button onClick={()=>handleClick("arsenal")}><img src={ars}/></button>
            </div>
            <div className="team-icons grid grid-cols-4 gap-20">
                <button className="col-start-2 col-span-2" onClick={()=>handleClick("brighton")}><img src={bright}/></button>
                <button onClick={()=>handleClick("manci")}><img src={manci}/></button>
            </div>
            <div className="team-icons pl-20 grid grid-cols-4 gap-20"> 
                <button className="col-span-2" onClick={()=>handleClick("manu")}><img src={manu}/></button>
                <button onClick={()=>handleClick("liverpool")}><img src={liv}/></button>
            </div>
            <div className="team-icons grid grid-cols-4 gap-20">
                <button className="col-start-2  col-span-2" onClick={()=>handleClick("newcastle")}><img src={newc}/></button>
                <button onClick={()=>handleClick("brentford")}><img src={brent}/></button>
            </div>
                
           
            
        </div>
        </div>
    )
}