
const StrategiModal = ({setStrategiOpen}) => {
    return (
        <div className="teamModal">
        <div className='modalHeader'>
            <h1>StrategiModal</h1>
        </div>
        <div className='modalBody'>
        <div className='modalImage'>
        </div>
        <div className='modalText'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam libero mi, pellentesque id viverra eu, auctor in augue. Phasellus luctus eleifend augue et fermentum. 
            Nam fringilla lectus velit, suscipit rutrum ante commodo sit amet. Donec scelerisque iaculis eros eu scelerisque. Maecenas maximus posuere pretium. 
            In sodales blandit tellus gravida bibendum. Integer ante mauris, tincidunt nec porttitor a, suscipit sed risus. 
            Quisque dignissim metus in neque consequat finibus. Sed vitae nulla vestibulum, blandit risus a, vulputate ante. Curabitur efficitur vitae leo eu egestas.
            </p>
        </div>
        </div>
        <div className='modalFooter'>
        <button onClick={() => setStrategiOpen(false)}>Stäng</button>
        </div>
        </div>
    );
}

export default StrategiModal;