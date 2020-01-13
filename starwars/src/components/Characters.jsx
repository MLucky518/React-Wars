import React ,{useState,useEffect} from "react";
import axios from "axios";
import {characterPics,luke,vader} from "../Data";
import CharacterInfo from "./CharacterInfo";
import "./StarWars.css";




const Characters = () =>{

const[character,setCharacter] = useState([]);



 useEffect (() =>{

 axios.get("https://swapi.co/api/people/")

 .then(res =>{
     setCharacter(res.data.results);
     
 })

 .catch(err =>{

   console.log(err, "could not retrieve information from server") 
 })
    
    



 },[]);

 

const characterSet1 = character.filter(char =>{
    if(char.name === "Luke Skywalker" || char.name ==="Darth Vader"  ){
        return char;
    }
})


console.log(characterSet1);


 return( <div className = "mainContainer">


{characterSet1.map((char,idx) =>{

 

return (<CharacterInfo

 src = {characterPics[idx]}
 saberColor = {char.name === "Luke Skywalker" ? "green":"red"}
 forceType = {char.name === "Luke Skywalker" ? "LightSide":"DarkSide"}
 birthYear = {char.birth_year}
 name = {char.name}
 key = {idx}
 power1 ={char.name === "Luke Skywalker" ? luke.power1:vader.power1}
 power2 ={char.name === "Luke Skywalker" ? luke.power2:vader.power2}
 power3 ={char.name === "Luke Skywalker" ? luke.power3:vader.power3}
 power4 ={char.name === "Luke Skywalker" ? luke.power4:vader.power4}
 power5 ={char.name === "Luke Skywalker" ? luke.power5:vader.power5}
 



/>



)
})}

 
</div>
)



}

export default Characters;