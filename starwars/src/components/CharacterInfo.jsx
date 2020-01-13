import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';

const CharacterInfo = ({src,saberColor,forceType,birthYear,name,power1,power2,power3,power4,power5}) =>{

return <div className = "container">

    <img width = "400" height = "400" alt = "character" src = {src}></img>
    <h3>{name}</h3>
    <p> Lightsaber color: {saberColor}</p>
    <p>Force Type: {forceType}</p>
    <p>Age: {birthYear}</p>

   <h1>Powers</h1>
    <ListGroup className = "powers">
      <ListGroupItem>{power1}</ListGroupItem>
      <ListGroupItem>{power2}</ListGroupItem>
      <ListGroupItem>{power3}</ListGroupItem>
      <ListGroupItem>{power4}</ListGroupItem>
      <ListGroupItem>{power5}</ListGroupItem>
    </ListGroup>
  


</div>

}

export default CharacterInfo;