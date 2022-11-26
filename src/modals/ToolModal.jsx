
const ToolModal = ({setToolOpen}) => {
    return (
        <div className="teamModal">
        <div className='modalHeader'>
            <h1>Vår verktygslåda</h1>
        </div>
        <div className='modalBody'>
        <div className='modalImage'>
        </div>
        <div className='modalText'>
            <p>
            På EnJa AB håller vi oss ständigt uppdaterade vad gäller forskning och har till exempel i frågor om 
            digitalisering ett givande samarbete med ”Digital förvaltning på Göteborgs universitet”. 
            Vår verktygslåda är full med metoder som är baserade på forskning och best practice. 
            Exempelvis är Effektkartor en väl beprövad metod som vi ofta använder i våra uppdrag. 
            Metoden används för att bättre förstå vilka effekter som man vill uppnå med en viss tjänst eller produkt. 
            Effektkartor ger vägledning i hur prioriteringar ska göras för att uppnå önskad effekt. Effektkartor bidrar till att förändringsarbetet får ett tydligt fokus.​
            </p>
        </div>
        </div>
        <div className='modalFooter'>
        <button onClick={() => setToolOpen(false)}>Stäng</button>
        </div>
        </div>
    );
}

export default ToolModal;