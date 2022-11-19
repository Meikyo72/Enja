import ulrica2 from '../assets/ulrica2.png';

const UModal = ({setuIsOpen}) => {
    return (
        <div className="teamModal">
        <div className='modalHeader'>
            <h1>Ulrica Enderberg</h1>
        </div>
        <div className='modalBody'>
            <div className='modalImage'>
                <img src={ulrica2} alt="Ulrica" />
            </div>
            <div className='modalText'>
            <p>
                Ulrica brinner för ledarskaps- och utvecklingsfrågor, organisation och  ledning och styrning.
                Hon har många års erfarenhet inom området organisatorisk styrmiljö, kvalitetsledning och framtagande av styrande dokument.
            </p>
            <p>
                Utifrån sin analytiska och teoretiska förmåga är Ulrica van att snabbt sätta sig in i nya uppdrag och har stor vana att leda uppdrag av utredande karaktär, små som stora.
                Nyfikenhet och lust att lära är en stark drivkraft, liksom leverans och nöjda kunder.
            </p>
            <p>
                Under senare år har Ulrica ansvarat för att ta fram och införa strategier, styrning och ledning för digital transformation samt drivit genomförande av program och  planer för digitalisering och innovation.
                Ett annat exempel på uppdrag de senaste åren har varit att projektleda ett tiotal statsbidragsfinansierade innovationsprojekt på en stadenövergripande nivå.
            </p>
            <p>
                Ulrica har stor erfarenhet att utveckla och leda förändringsarbeten i komplexa och stora organisationer.
            </p>
            </div>
        </div>
        <div className='modalFooter'>
        <button onClick={() => setuIsOpen(false)}>Stäng</button>
        </div>
        </div>
    );
}

export default UModal;