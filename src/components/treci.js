import React from 'react';
import {Link} from "react-router-dom";
import "../App.css";
import prowler from "../prowler.png";
import prowlertab from "../prowlertab.PNG"
import blank from "../blank.png";

function Treci() {
  return(
  <div className="tri">
  <img src={blank} className="detalji"></img>
	<img src={blank} className="detalji2"></img>
    <img src={prowler} id="slikapuska2"></img>
	<h1 className="tekst"><u>Prowler Burst PDW</u></h1>
	<p className="tekst">The Prowler Burst PDW is a sub machine gun that uses Heavy Rounds heavy rounds.It fires in a 5-round burst unless it is equipped with the Selectfire Receiver.svg Selectfire Receiver Hop-Up attachment, which enables the weapon to switch to fully automatic fire.</p><br></br>
	<h1 className="tekst"><u>Trivia</u></h1>
	<p className="tekst">The Prowler is based on two "personal defense weapons" (PDWs) from real life: the FN P90 and the Magpul PDR-C. It also a homage to Seburo, Masamune Shirow's fictional arms manufacturer from Ghost in the Shell and Appleseed.
The Prowler also bears a striking similarity to the MA5 series of assault rifles form the Halo universe; the triangular ammo counter and bull-pup frame are the most noticeable aspects that both weapons share. More so, the maximum magazine size of the Prowler when fitted with a Level 3 Extended Heavy Mag comes close to that of the current iteration of the MA5 series from Halo 5: Guardians; at 35 rounds and 36 rounds, respectively.</p>
	<br></br><img src={prowlertab} id="slikatablica"></img>
	<br></br><br></br><br></br><br></br>
	<Link to ='/drugi' class="link">Previous</Link>
<Link to ='/cetvrti'class="link">Next</Link>
    </div>
    )
}

export default Treci;