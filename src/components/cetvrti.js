import React from 'react';
import {Link} from "react-router-dom";
import "../App.css";
import r301 from "../r301.png";
import r301tab from "../r301tab.PNG"
import blank from "../blank.png";

function Cetvrti() {
  return(
  <div className="cetiri">
  <img src={blank} className="detalji"></img>
	<img src={blank} className="detalji2"></img>
      <img src={r301} id="slikapuska"></img>
	<h1 className="tekst"><u>R-301 Carbine</u></h1>
	<p className="tekst">The R-301 Carbine is an assault rifle which uses Light Rounds light rounds.</p><br></br>
	<h1 className="tekst"><u>Lore</u></h1>
	<p className="tekst">Manufactured by the Lastimosa Armory and commissioned by the IMC, the R-301 is the successor to the R-101 and R-201 rifles from the Frontier War. In the years after the Battle of Typhon, the IMC felt a need to improve on their very successful and reliable R-201 platform. High volumes of data collected from the R-201 and the R-201-A2's internal CPU's indicated that most mechanical failures were due to the rifle frame's exposure to extreme elements which caused misfires and the occasional feed mechanism malfunction. The internal components have been revised with a lighter and stronger composite as the external framework has been strengthened with a composite metallic weave to better compensate for overheating and structural integrity. The piston system was removed overall and the bolt cycling mechanism is completely controlled by the R-301's integrated AI. What you have with this new and improved platform is a reliable and accurate rifle with minimal maintenance and a larger caliber.</p>
	<br></br><img src={r301tab} id="slikatablica"></img>
	<br></br><br></br><br></br><br></br>
	<Link to ='/treci' class="link">Previous</Link>
<Link to ='/peti'class="link">News Signup</Link>
    </div>
    )
}

export default Cetvrti;