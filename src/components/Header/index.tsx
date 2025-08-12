import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import styles from './header.module.css'

 export function Header (){
    return (
        <div className={styles.container}>
            <Link to={"/"}>
              <img src={logo} alt='Logo de Controle de gado' className={styles.img_logo}/>
            </Link>   
        </div>
    );
}