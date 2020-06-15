import React from 'react';
import {Link} from 'react-router-dom';
import eva8 from "../eva8.png";
import eva8tab from "../eva8tab.PNG"
import blank from "../blank.png";

function Drugi() {
  return (
    <div className="dva">
	<img src={blank} className="detalji"></img>
	<img src={blank} className="detalji2"></img>
	<img src={eva8} id="slikapuska"></img>
	<h1 className="tekst"><u>EVA-8 Auto</u></h1>
	<p className="tekst">The EVA-8 Auto is a fully automatic magazine-fed shotgun that uses Shotgun Shells Shotgun Shells that fires 9 pellets in the shape of the number 8.</p><br></br>
	<h1 className="tekst"><u>Lore</u></h1>
	<p className="tekst">The EVA-8 Auto is a pump-action/automatic shotgun from the Frontier War designed for extra-vehicular activity and to operate in zero gravity environments. The weapon was developed from the ground up by Wonyeon Interstellar to provide the IMC Orbital Guard Raiding Parties (aka Shipwreckers) with devastating CQB firepower. The EVA-8 has also been widely used by the Frontier Militia and Badlands Pirates, often acquiring the weapons by raiding remote supply convoys to the Outer Colonies. It is now used in the Apex Games where legends in need of massive firepower during the first contact can look no further than the EVA-8.</p>
	<br></br><img src={eva8tab} id="slikatablica"></img>
	<br></br><br></br><br></br><br></br>
	<Link to ='/' class="link">Previous</Link>
<Link to ='/treci'class="link">Next</Link>
    </div>
  );
}

export default Drugi;