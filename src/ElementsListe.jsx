import './ElementsListe.scss';
import signets from './data/signets.json';
import Element from './Element'

export default function ElementsListe(){
    return(
        <div className="elements-liste">
            {signets.map(i => <Element nom={i.nom} date={i.date} couleur={i.couleur} id={i.id} />)}
        </div>
    );
}