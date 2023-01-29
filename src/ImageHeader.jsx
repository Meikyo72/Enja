import landingpuzzle from './assets/landingpuzzle.png';
import { Link } from 'react-router-dom';
import Seo  from './seo/Seo';
import EnjaAB from './assets/EnJa-AB.png';

function ImageHeader() {

return (

<div className="image-header" id="hem">
    <Seo title="EnJa AB" description="Vi designar och utför koncept utifrån kundens förutsättningar, behov och de effekter som ska uppnås." image={EnjaAB} url="https://enja.se" />
    <div className="image-headertext">
        <h1>EnJa AB</h1>
        <p><q>Vi designar och utför koncept utifrån kundens förutsättningar, behov och de effekter som ska uppnås.</q></p>
    </div>
     <div className='image-table'>
        <img src={landingpuzzle} alt='orange puzzle'  />
        <table className="bannerTable">
            <thead>
                <tr>
                    <th><h3>EnJa är ett nybildat konsultbolag med vilja och ambition att driva förändring och skapa förutsättningar för önskvärda effekter och bestående värde utifrån kundens behov inom näringsliv och offentlig sektor.</h3></th>
                </tr>
            </thead>
        <tbody>
        <tr>
        <td>
            <h3>Vi erbjuder stöd och tjänster inom:</h3>
        </td>
        </tr>
        <tr>
        <td>
            <Link to="/services">
            <h3>Strategi-, organisations- och affärsutveckling</h3>
            </Link>
        </td>
        </tr>
        <tr>
        <td>
            <Link to="/services">
            <h3>Ledarskap, projekt- och förändringsledning</h3>
            </Link>
        </td>
        </tr>
        <tr>
        <td>
            <Link to="/services">
            <h3>Digital transformation</h3>
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