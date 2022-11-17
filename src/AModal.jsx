import asa1 from './assets/asa1.png';

const AModal = ({setaIsOpen}) => {
    return (
        <div className="teamModal">
        <div className='modalHeader'>
            <h1>Åsa Jahnsson</h1>
        </div>
        <div className='modalBody'>
        <div className='modalImage'>
                <img src={asa1} alt="Åsa" />
        </div>
        <div className='modalText'>
            <p>
                Genom sina olika uppdrag och roller har hon skapat en gedigen kunskap och erfarenhet. Det kan handla om allt från enklare förändringar i arbetssätt och processer till mer komplexa och omfattande förändringar som att ta fram strategier, 
                planera och genomföra större organisationsförändringar. 
                Åsa har särskilt stor vana att utveckla och leda förändringsarbeten i komplexa och stora organisationer.
            </p>
            <p>
                Under senare år har Åsa ansvarat för att planera för och projektleda genomförande av 
                större organisationsförändringar samt ta fram och införa strategier, styrning och ledning för digital transformation.
            </p>
            <p>
                Åsa är mycket van att designa, facilitera och leda olika typer av förändrings- och utvecklingsprocesser.
            </p>
            <p>
                Hon lägger stort fokus på leverans i rätt tid och med rätt kvalitet.
            </p>
        </div>
        </div>
        <div className='modalFooter'>
        <button onClick={() => setaIsOpen(false)}>Stäng</button>
        </div>
        </div>
    );
}

export default AModal;