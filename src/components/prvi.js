import React from 'react';
import {Link} from "react-router-dom";
import banner from "../banner.png"
import blank from "../blank.png";

  function Prvi(){ 
    return (
    <div className="jedan">

	<div className="div1">
	<img src={blank} className="detalji"></img>
	<img src={blank} className="detalji2"></img>
	
	<img src={banner} id="slikapocetna"></img>
	</div> <br></br>
	<p className="tekst1"><u>APEX LEGENDS INFO</u></p>
	<p className="tekst1">Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. It was released for Windows, PlayStation 4 and Xbox One on February 4, 2019, without any prior announcement or marketing.

In Apex Legends, up to 20 three-person squads land on an island and search for weapons and supplies before attempting to defeat all other players in combat. The available play area on the island shrinks over time, forcing players to keep moving or else find themselves outside the play area which can be fatal. The final team alive wins the round. The game is set in the same science fiction universe as Respawn Entertainment's Titanfall and Titanfall 2.</p>
	<br></br><br></br>
    <Link to ='/drugi'class="link">Gun Info ></Link>
    
    </div>
  );
  }

export default Prvi;
