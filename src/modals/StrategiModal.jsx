import Strategy from '../assets/Strategy.png';

const StrategiModal = ({setStrategiOpen}) => {
    return (
        <div className='modalBg'>
        <div className="teamModal">
        <div className='modalHeader'>
            <h1>Strategi-, organisations- och affärsutveckling</h1>
        </div>
        <div className='modalBody serviceModalBody'>
        <div className='modalImage'>
        <img src={Strategy} alt="Strategy" />
        </div>
        <div className='modalText'>
            <p>
             Vår omvärld är i ständig utveckling, vilket har en stor påverkan på organisationer och affärsområden inte minst vad gäller arbetet med förändring och omställning. på 
             EnJa stödjer vi er i arbetet med övergripande strategiska planer, organisationsutredningar och affärsplaner.
            </p>
            <p>
                Konstakta oss så berättar vi mer om våra erfarenheter och referenser inom detta området.
            </p>
        </div>
        </div>
        <div className='modalFooter'>
        <button onClick={() => setStrategiOpen(false)}>Stäng</button>
        </div>
        </div>
        </div>
    );
}

export default StrategiModal;