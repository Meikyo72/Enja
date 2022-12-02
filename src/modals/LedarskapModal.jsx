import Leadership from '../assets/Leadership.png';

const LedarskapModal = ({setLedarskapOpen}) => {
    return (
        <div className='modalBg'>
        <div className="teamModal">
        <div className='modalHeader'>
            <h1>Ledarskap, projekt- och förändringsledning</h1>
        </div>
        <div className='modalBody serviceModalBody'>
        <div className='modalImage'>
        <img src={Leadership} alt="Leadership" />
        </div>
        <div className='modalText'>
            <p>
            Utveckling, ledarskap och projektledning tillhör vår vardag på EnJa AB. Att arbeta med förändringsledning är centralt för oss och innebär ett strukturerat sätt att vägleda individer, grupper och organisationer från sin nuvarande situation till ett önskat framtida läge.
            Vi har många års erfarenhet av ledarskap inom offentlig verksamhet och kan därför erbjuda en bredd av tjänster, som till exempel certifierad projektledning, grupputveckling, utbildning och chefsinterimslösningar.
            </p>
            <p>
            Vi håller oss ständigt uppdaterade med forskning, modeller och metoder inom ledarskap och ledarutveckling. Hör av dig, så pratar vi vidare om vad och på vilket sätt vi kan stödja ert arbete!
            </p>
        </div>
        </div>
        <div className='modalFooter'>
        <button onClick={() => setLedarskapOpen(false)}>Stäng</button>
        </div>
        </div>
        </div>
    );
}

export default LedarskapModal;