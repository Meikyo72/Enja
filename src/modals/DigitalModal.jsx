import trappa from '../assets/trappa.png';

const DigitalModal = ({setDigitalOpen}) => {
    return (
        <div className="teamModal">
        <div className='modalHeader'>
            <h1>Digital transformation:</h1>
        </div>
        <div className='modalBody'>
        <div className='modalImage digitalModalImage'>
            <img src={trappa} alt="digital trappa" />
        </div>
        <div className='modalText'>
            <p>
            Digitalisering definierar vi som en metod för verksamhetsutveckling. Förändringen omfattar alltid mer än den rent tekniska aspekten och det vi kallar digital transformation. Aktuell forskning pekar på att både bredd och djup av konsekvenserna ofta underskattas, med följden att digitalisering inte ges de resurser och den uppmärksamhet som den förtjänar, från alla delar i organisationen.</p>
            <p> 
            Digital transformation innebär att både utforska hur verksamheten bättre kan genomföras med stöd av digitala lösningar samt säkerställa omformning av verksamhetens processer, organisering, kultur och ledarskap för att tillfullo ta tillvara potentialen i digitalisering.</p>
            <p> 
            Vi ger stöd och skapar förutsättningar för en mer ändamålsenlig styrning av organisationens digitaliseringsarbete i syfte att få ut så hög nytta och effekt av de möjligheter digitalisering kan ge.
            </p>
        </div>
        </div>
        <div className='modalFooter'>
        <button onClick={() => setDigitalOpen(false)}>Stäng</button>
        </div>
        </div>
    );
}

export default DigitalModal;