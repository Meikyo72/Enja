import trappa from '../assets/trappa.png';

const DigitalModal = ({setDigitalOpen}) => {
    return (
        <div className='modalBg'>
        <div className="teamModal">
        <div className='modalHeader'>
            <h1>Digital transformation:</h1>
        </div>
        <div className='modalBody digitalModalBody'>
        <div className='modalImage digitalModalImage'>
            <img src={trappa} alt="digital trappa" />
        </div>
        <div className='modalText'>
            <p>
            Vi definierar digitalisering som en metod för verksamhetsutveckling. Det omfattar mer än den rent tekniska aspekten och är det vi kallar digital transformation.</p>
            <p> 
            Digital transformation innebär dels att utforska nya möjligheter för hur verksamheten bättre kan genomföras med stöd av digitala lösningar. Det innebär även att säkerställa omformning av verksamhetens processer, organisering, kultur och ledarskap för att kunna ta tillvara potentialen i digitalisering. </p>
            <p> 
            Vi ger stöd och hjälper er att skapa förutsättningar för en mer ändamålsenlig styrning av organisationens digitalieringsarbete i syfte att få ut så hög nytta och effekt av de möjligheter digitalisering kan ge. 
            </p>
        </div>
        </div>
        <div className='modalFooter'>
        <button onClick={() => setDigitalOpen(false)}>Stäng</button>
        </div>
        </div>
        </div>
    );
}

export default DigitalModal;