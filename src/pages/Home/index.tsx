import styles from './home.module.css';
import { BsSearch } from 'react-icons/bs';
import { useNavigate} from 'react-router-dom';

export function Home (){
    const navigate = useNavigate()
    function handleDetalhes (){
        navigate("/detalhes/animal")
    }
    return (
        <main className={styles.container}>
            <form className={styles.form}>
                <input
                 type='text'
                 placeholder='Digite o numero do animal'
                />
                <button>
                     <BsSearch size={30}/>
                </button>
               
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Data Nascimento</th>
                        <th>Pai</th>
                        <th>Mae</th>
                        <th>Sexo</th>
                        <th>Peso</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.tr_body} onClick={handleDetalhes}>
                        <td>50</td>
                        <td>24\07\2004</td>
                        <td>boi</td>
                        <td>vaca</td>
                        <td>Macho</td>
                        <td>50kg</td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}