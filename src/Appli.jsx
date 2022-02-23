import './Appli.scss';
import Entete from './Entete';
import ElementsListe from './ElementsListe'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

export default function Appli() {
  return (
    <div className="Appli">
      <Entete />
      <ElementsListe />
      <div className="fabConteneur">
        <Fab className="fab">
          <AddIcon />
        </Fab >
          {/* Gabarit de base d'une Application React */}
      </div>
    </div>
  );
}
