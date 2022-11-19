import ulrica1 from './assets/ulrica1.png';
import asa2 from './assets/asa2.png';
import {useState} from 'react';
import UModal from './modals/UModal';
import AModal from './modals/AModal';

function TeamContainer() {
    const [usetIsOpen, setuIsOpen] = useState(false);
    const [asetIsOpen, setaIsOpen] = useState(false);
return (

<div className="team-container" id="team">
    <div className="team-header">
    <h1>EnJa</h1>
    </div>
<div className='card-container'>
<div className="card">
    <img src={ulrica1} alt="Ulrica" />
    <h1>Ulrica<br/> Enderberg</h1>
    <p className="title">
        CFO & Grundare, Konsult
    </p>
    <p> Ulrica har sin bakgrund inom utbildningsområdet.
        Hon har arbetat många år som rektor, som kvalitets- 
         och utvecklingschef, planeringsledare på strategisk nivå och är certifierad projektledare.
    </p>
    <p><button className="button" onClick={()=> setuIsOpen(true)}>Läs mer om Ulrika</button></p>
</div>
<div className="card">
    <img src={asa2} alt="Asa" />
    <h1>Åsa<br/> Jahnsson</h1>
    <p className="title">
        CEO & Grundare, Konsult
    </p>
    <p>
        Åsa har närmare 20 års erfarenhet av organisations- och verksamhetsutvecklingsfrågor 
        både i rollen som linjechef, utredare, förändringsledare och certifierad projektledare. 
    </p>
    <p><button className="button" onClick={()=> setaIsOpen(true)}>Läs mer om Åsa</button></p>
</div>
</div>
<div className='modalContainer'>
    {usetIsOpen && <UModal setuIsOpen={setuIsOpen} />}
    {asetIsOpen && <AModal setaIsOpen={setaIsOpen} />}
    </div>
</div>

);
}

export default TeamContainer

