import ulrika from './assets/ulrika.png';
import asa from './assets/asa.png';

function TeamContainer() {
return (

<div className="team-container" id="team">
<h1>Våra Konsulter</h1>
<table className="teamTable">
<thead>
<tr>
<th> Ulrica Enderberg, managementkonsult </th>
<th> Åsa Jahnsson, managementkonsult </th>
</tr>
</thead>
<tbody>
<tr>
<td>
<img src={ulrika} alt="ulrika" />
</td>
<td>
<img src={asa} alt="asa" />
</td>
</tr>
<tr>
<td>
    <ul>
        <li>Ulrica har sin bakgrund inom utbildningsområdet.
             Hon har arbetat många år som rektor, som kvalitets- 
             och utvecklingschef, planeringsledare på strategisk nivå och är certifierad projektledare.<br/><br/>
        </li>
        <li>
        Ulrica brinner för ledarskaps- och utvecklingsfrågor, organisation och  ledning och styrning.
         Hon har många års erfarenhet inom området organisatorisk styrmiljö, kvalitetsledning och framtagande av styrande dokument.<br/><br/>
        </li>
        <li>
        Utifrån sin analytiska och teoretiska förmåga är Ulrica van att snabbt sätta sig in i nya uppdrag och har stor vana att leda uppdrag av utredande karaktär, små som stora.
         Nyfikenhet och lust att lära är en stark drivkraft, liksom leverans och nöjda kunder.<br/><br/> 
        </li>
        <li>
        Under senare år har Ulrica ansvarat för att ta fram och införa strategier, styrning och ledning för digital transformation samt drivit genomförande av program och  planer för digitalisering och innovation.
          Ett annat exempel på uppdrag de senaste åren har varit att projektleda ett tiotal statsbidragsfinansierade innovationsprojekt på en stadenövergripande nivå.<br/><br/>
        </li>
        <li>
        Ulrica har stor erfarenhet att utveckla och leda förändringsarbeten i komplexa och stora organisationer.
        </li>
    </ul>        
</td>
<td>
    <ul>
        <li>
        Åsa har närmare 20 års erfarenhet av organisations- och verksamhetsutvecklingsfrågor 
        både i rollen som linjechef, utredare, förändringsledare och certifierad projektledare.<br/><br/>
        </li>
        <li>
        Genom sina olika uppdrag och roller har hon skapat en gedigen kunskap och erfarenhet. Det kan handla om allt från enklare förändringar i arbetssätt och processer till mer komplexa och omfattande förändringar som att ta fram strategier, 
        planera och genomföra större organisationsförändringar. 
        Åsa har särskilt stor vana att utveckla och leda förändringsarbeten i komplexa och stora organisationer.<br/><br/>
        </li>
        <li>
        Under senare år har Åsa ansvarat för att planera för och projektleda genomförande av 
        större organisationsförändringar samt ta fram och införa strategier, styrning och ledning för digital transformation.<br/><br/>
        </li>
        <li>
        Åsa är mycket van att designa, facilitera och leda olika typer av förändrings- och utvecklingsprocesser.<br/><br/>
        </li>
        <li>
        Hon lägger stort fokus på leverans i rätt tid och med rätt kvalitet.
        </li>
    </ul>     
</td>
</tr>
</tbody>
</table>
</div>

);
}

export default TeamContainer