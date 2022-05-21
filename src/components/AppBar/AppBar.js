import Navigation from '../Navigation/Navigation';
import s from './Appbar.module.css';
import { useNavigate } from 'react-router-dom';
import Button from './../Button/Button';

export default function Appbar() {
   const history = useNavigate();
   return (
      <header className={s.header}>
         <Navigation />
         <div className={s.btn}>
            <Button onClick={() => history(-1)} title="Go back" />
         </div>
      </header>
   );
}
