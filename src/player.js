import React from "react";
import players from "./players";
import { Card } from "react-bootstrap";
const Player =({el}) => {
    return (
        <Card  className="Card" style={{backgroundColor: "#0d47a1" }}>
            
            
      <Card.Img variant="top" src={el.image} alt={el.name}  />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          Team: {el.team}
          <br />
          Nationality: {el.nationality}
          <br />
          Jersey Number: {el.jerseyNumber}
          <br />
          Age: {el.age}
        </Card.Text>
      </Card.Body>
      
      
    </Card>
    )
};
export default Player;