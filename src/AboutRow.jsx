import Tillsammans1 from './assets/Tillsammans1.png';
import Seo from './seo/Seo';
import EnjaAB from './assets/EnJa-AB.png';

function AboutRow() {

return (

<div className="about-container">
<Seo title="Om EnJa" description="EnJa är ett nybildat svenskt konsultbolag med vilja och ambition att driva förändring och skapa förutsättningar för önskvärda effekter och bestående värde utifrån kundens behov inom näringsliv och offentlig sektor." image={EnjaAB} url="https://enja.se/about" />
<h1>Om <span className='enjaLogo'>EnJa</span></h1>
<img src={Tillsammans1} alt="Tillsammans" />
<p>
EnJa är ett nybildat svenskt konsultbolag med vilja och ambition att driva förändring och skapa förutsättningar för önskvärda effekter och bestående värde utifrån kundens behov inom näringsliv och offentlig sektor.
</p>
<p>   
Vi stödjer kunden genom att skapa och ge förutsättningar för ökad kunskap – insikt – handling. Det gör vi genom att konkret realisera den förbättringspotential som finns i verksamheten. Vi skapar driv i förändringsarbetet genom att tydliggöra nuläge och önskvärt läge, utveckla och införa strategier.
</p>
<p> 
Vi har mångårig erfarenhet av strategisk verksamhetsutveckling, utredningsarbeten, leda och stödja verksamhets- och organisationsförändringar.
</p>
<p>
Vi utgår alltid från kundens behov och designar ett ändamålsenligt helhetskoncept utifrån förutsättningar och mognadsgrad. Vår verktygslåda grundar sig i metoder baserat på forskning och best practice.  
</p>
</div>
);

}

export default AboutRow;