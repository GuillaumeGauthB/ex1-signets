import './Entete.scss';
import Profil from './Profil';



export default function Entete(){
    return(
        <header className="header">
            <h1>Signets</h1>
            <Profil />
        </header>
    );
}