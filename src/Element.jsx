import './Element.scss';
import SortIcon from '@mui/icons-material/Sort';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Element(props){
    return(
        <div className="element" style={{backgroundColor:props.couleur}}>
            <div className="container-image">
                <img className="image" src={"images/elm" + props.id + ".png"} alt={props.nom} />
            </div>
            <div>
                <h2>{props.nom}</h2>
                <p>Modifié: {props.date}</p>
            </div>
            <SortIcon className="sort svg" />
            <MoreVertIcon className="more svg" />
        </div>
    );
}