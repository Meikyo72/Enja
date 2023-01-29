import {useState} from 'react';
import StrategiModal from './modals/StrategiModal';
import LedarskapModal from './modals/LedarskapModal';
import DigitalModal from './modals/DigitalModal';
import ToolModal from './modals/ToolModal';
import Dtransformation from './assets/Dtransformation.png';
import Dtoolbox from './assets/Dtoolbox.png';
import Strategy from './assets/Strategy.png';
import Leadership from './assets/Leadership.png';
import Seo from './seo/Seo';
import EnjaAB from './assets/EnJa-AB.png';

function Services() {
    const [strategiOpen, setStrategiOpen] = useState(false);
    const [ledarskapOpen, setLedarskapOpen] = useState(false);
    const [digitalOpen, setDigitalOpen] = useState(false);
    const [toolOpen, setToolOpen] = useState(false);
return (

<div className="services-container">
    <Seo title="Tjänster" description="Vi erbjuder stöd och tjänster inom strategi-, organisations- och affärsutveckling, ledarskap, projekt- och förändringsledning samt digital transformation." image={EnjaAB} url="https://enja.se/services" />
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
                <li>Styrning och ledning</li>
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
                <li>Projekt- och processledning</li>
                <li>Förändringsledning / förändringsstöd</li>
                <li>Facilitering / coachning</li>
            </ul>
            <button className="button" onClick={()=> setLedarskapOpen(true)}>Läs mer...</button>
        </div>
        <div className="card">
            <div className='card-header'><h2>Digitalisering och innovation</h2></div>
            <div className="small-card-image">
            <img src={Dtransformation} alt="Digital transformation" />
            </div>
            <p>Inom området kan vi ge stöd, utveckla och driva:</p>
            <ul>
                <li>Förändring/omställning för en mer ändamålsenlig styrning av digitalisering och innovation</li>
                <li>Analysstöd digital mognad och förmåga</li>
                <li>Stöd vid implementering av portföljstyrning i offentlig sektor &#40;PIOS&#41;</li>
            </ul>
            <button className="button" onClick={()=> setDigitalOpen(true)}>Läs mer...</button>
        </div>
        <div className="card">
            <div className='card-header'><h2>EnJas verktygslåda</h2></div>
            <div className="small-card-image">
            <img src={Dtoolbox} alt="Tool Box" />
            </div>
            <p>På EnJa AB håller vi oss ständigt uppdaterade vad gäller forskning. Vår verktygslåda har sin grund i metoder som är baserade på forskning, standarder och best practice.
            Ur verktygslådan tar vi stöd av bland annat:</p>
            <ul>
                <li>Förstudier/utredningar</li>
                <li>Analyser, exempelvis GAP-, omvärlds-, nuläges- och mognadsanalys</li>
                <li>Metoder för förändringsledning och projektstyrning</li>
            </ul>
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