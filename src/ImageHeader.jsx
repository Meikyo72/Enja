import bluepuzzle from './assets/bluepuzzle.jpg';
import { Link } from 'react-router-dom';

function ImageHeader() {

return (

<div className="image-header" id="hem">
    <div className="image-headertext">
        <h1>EnJa AB</h1>
        <p><q>Vi designar och utför koncept utifrån kundens förutsättningar, behov och effekter som ska uppnås.</q></p>
    </div>
    <div className='image-table'>
        <img src={bluepuzzle} alt="bluepuzzle" />
        <table className="bannerTable">
            <thead>
                <tr>
                    <th><h2>Vi erbjuder stöd och tjänster inom:</h2></th>
                </tr>
            </thead>
        <tbody>
        <tr>
        <td>
            <Link to="/services">
            <h2>- Strategi-, organisations- och affärsutveckling</h2>
            </Link>
        </td>
        </tr>
        <tr>
        <td>
            <Link to="/services">
            <h2>- Ledarskap, projekt- och förändringsledning</h2>
            </Link>
        </td>
        </tr>
        <tr>
        <td>
            <Link to="/services">
            <h2>- Digital transformation</h2>
            </Link>
        </td>
        </tr>
        </tbody>
        </table>
    </div>
</div>

);

}

export default ImageHeader;