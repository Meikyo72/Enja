import ulrica1 from './assets/ulrica1.png';
import asa2 from './assets/asa2.png';
import {useState} from 'react';
import UModal from './modals/UModal';
import AModal from './modals/AModal';
import {FaLinkedin, FaEnvelope} from 'react-icons/fa';
import {IconContext} from 'react-icons';

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
    <h1>Ulrica Enderberg</h1>
    <p className="title">
        CFO & Grundare, Konsult
    </p>
    <div className="social">
    <IconContext.Provider value={{size: '2em', color:'#0072b1', className:'Teamicons'}}>
    <a href='https://www.linkedin.com/in/ulrica-enderberg-b9a918148/' target='_blank'><FaLinkedin /></a>
    <a href='mailto:ulrica.enderberg@enja.se'><FaEnvelope /></a>
    </IconContext.Provider>
    </div>
    <p> Ulrica har sin bakgrund inom utbildningsområdet, med fil. mag. i pedagogik. 
        Hon har många års erfarenhet av att arbeta som rektor, planeringsledare på strategisk nivå, 
        förvaltningscontroller, kvalitets- och utvecklingschef och är certifierad projektledare.
    </p>
    <button className="button" onClick={()=> setuIsOpen(true)}>Läs mer om Ulrica</button>
</div>
<div className="card">
    <img src={asa2} alt="Asa" />
    <h1>Åsa Jahnsson</h1>
    <p className="title">
        CEO & Grundare, Konsult
    </p>
    <div className="social">
    <IconContext.Provider value={{size: '2em', color:'#0072b1', className:'Teamicons'}}>
    <a href='https://www.linkedin.com/in/%C3%A5sa-jahnsson-36959831/' target='_blank' ><FaLinkedin /></a>
    <a href='mailto:asa.jahnsson@enja.se'><FaEnvelope /></a>
    </IconContext.Provider>
    </div>
    <p>
        Åsa har närmare 20 års erfarenhet av organisations- och verksamhetsutvecklingsfrågor 
        både i rollen som förändringsledare, certifierad projektledare, planeringsledare på strategisk nivå och chef. 
    </p>
    <button className="button" onClick={()=> setaIsOpen(true)}>Läs mer om Åsa</button>
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

