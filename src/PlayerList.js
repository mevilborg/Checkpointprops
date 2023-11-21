import React from "react";

import players from "./players";
import Player from "./player";
const PlayerList =() =>{
    return (
      <div className="PlayersList">
        {players.map((el)=> (
            <Player el={el} />

        
))}
   </div>
    )
}
export default PlayerList;