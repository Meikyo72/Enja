import trappa from '../assets/trappa.png';

const DigitalModal = ({setDigitalOpen}) => {
    return (
        <div className='modalBg'>
        <div className="teamModal digitalModal">
        <div className='modalHeader'>
            <h1>Digital transformation:</h1>
        </div>
        <div className='modalBody digitalModalBody'>
        <div className='digitalModalImage'>
            <img src={trappa} alt="digital trappa" />
        </div>
        <div className='modalText'>
            <p> 
            Vi ger stöd och hjälper er att skapa förutsättningar för en mer ändamålsenlig styrning av organisationens digitaliseringsarbete i syfte att få ut så hög nytta och effekt av de möjligheter digitalisering kan ge. 
            </p>
            <p>
            Vi definierar digitalisering som en metod för verksamhetsutveckling. Det omfattar mer än den rent tekniska aspekten och är det vi kallar digital transformation.</p>
            <p> 
            Digital transformation innebär dels att utforska nya möjligheter för hur verksamheten bättre kan genomföras med stöd av digitala lösningar. Det innebär även att säkerställa omformning av verksamhetens processer, organisering, kultur och ledarskap för att kunna ta tillvara potentialen i digitalisering. </p>
            <p>
            EnJa kan erbjuda myndigheter, regioner, kommuner och näringsliv stöd i det arbete som är nödvändigt för att främja en mer ändamålsenlig digitalisering. Exempelvis genomför vi fördjupad analys av mognadsmätningar, underlag för prioritering och värdering och kan ge rekommendationer för det vidare arbetet. Vi är stolta över ett nära samarbete med Digital Förvaltning som är ett forskningskonsortium som sammanför offentliga organisationer kring digitaliseringsfrågor och har som målsättning att stärka kunskapsläget och främja lärande.
            </p>
            <p>
            EnJa erbjuder dessutom stöd i att utveckla innovationsstrategier, etablera innovationsprocesser samt utgöra stöd vid förändring/omställning för en mer ändamålsenlig styrning av innovation. Att våga förändra och utmana traditionella arbetssätt är en nödvändig förutsättning för att utveckla en innovationskultur.
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