import {useState} from 'react';
import StrategiModal from './modals/StrategiModal';
import LedarskapModal from './modals/LedarskapModal';
import DigitalModal from './modals/DigitalModal';
import ToolModal from './modals/ToolModal';
import Dtransformation from './assets/Dtransformation.png';
import Dtoolbox from './assets/Dtoolbox.png';
import Strategy from './assets/Strategy.png';
import Leadership from './assets/Leadership.png';

function Services() {
    const [strategiOpen, setStrategiOpen] = useState(false);
    const [ledarskapOpen, setLedarskapOpen] = useState(false);
    const [digitalOpen, setDigitalOpen] = useState(false);
    const [toolOpen, setToolOpen] = useState(false);
return (

<div className="services-container">
    <h1>Tjänster</h1>
    <div className="card-container">
        <div className="card">
            <div className='card-header'><h2>Strategi-, organisations-  och affärsutveckling</h2></div>
            <div className="small-card-image">
            <img src={Strategy} alt="Strategy" />
            </div>
            <p>Inom området kan vi ge stöd, utveckla och driva:</p>
            <ul>
                <li>Designa förändringskoncept inför genomförande och omställning</li>
                <li>Strategiutveckling</li>
                <li>Organisationsutveckling</li>
                <li>Styrning och ledning med fokus på digital transformation</li>
            </ul>
            <button className="button" onClick={()=> setStrategiOpen(true)}>Läs mer...</button>
        </div>
        <div className="card">
            <div className='card-header'><h2>Ledarskap, projekt-  och förändringsledning</h2></div>
            <div className="small-card-image">
            <img src={Leadership} alt="Leadership" />
            </div>
            <p>Inom området kan vi erbjuda tjänster för bland annat:</p>
            <ul>
                <li>Genomförande av verksamhets- och organisationsförändringar</li>
                <li>Team- och ledarutveckling</li>
                <li>Projektledning</li>
                <li>Processledning</li>
                <li>Förändringsledning / förändringsstöd</li>
                <li>Facilitering / coachning</li>
                <li>Interim chefslösning</li>
                <li>Konflikthantering</li>
            </ul>
            <button className="button" onClick={()=> setLedarskapOpen(true)}>Läs mer...</button>
        </div>
        <div className="card">
            <div className='card-header'><h2>Digital transformation</h2></div>
            <div className="small-card-image">
            <img src={Dtransformation} alt="Digital transformation" />
            </div>
            <p>Digitalisering definierar vi som en metod för verksamhetsutveckling. 
                Vi ger stöd och skapar förutsättningar för en mer ändamålsenlig styrning av organisationens digitaliseringsarbete 
                i syfte att få ut så hög nytta och effekt av de möjligheter digitalisering kan ge.</p>
            <button className="button" onClick={()=> setDigitalOpen(true)}>Läs mer...</button>
        </div>
        <div className="card">
            <div className='card-header'><h2>EnJas verktygslåda</h2></div>
            <div className="small-card-image">
            <img src={Dtoolbox} alt="Tool Box" />
            </div>
            <p>EnJas verktygslåda grundar sig i best practice och utifrån forskning. Ur verktygslådan tar vi stöd av bland annat:</p>
            <ul>
                <li>Förstudier</li>
                <li>GAP-analys</li>
                <li>Omvärldsanalys</li>
                <li>Nulägeanalys</li>
                <li>Processkartläggning</li>
            </ul>
            <button className="button" onClick={()=> setToolOpen(true)}>Läs mer...</button>
        </div>
        <div className='modalContainer'>
            {strategiOpen && <StrategiModal setStrategiOpen={setStrategiOpen} />}
            {ledarskapOpen && <LedarskapModal setLedarskapOpen={setLedarskapOpen} />}
            {digitalOpen && <DigitalModal setDigitalOpen={setDigitalOpen} />}
            {toolOpen && <ToolModal setToolOpen={setToolOpen} />}
        </div>
    </div>
</div>

);
}

export default Services;