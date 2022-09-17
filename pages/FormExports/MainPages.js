import Form from '../../styles/Formulario.module.css'
import Title from './FormTitle'
import Styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Continue from './Refs/SteamRef'
import About from './Refs/AboutRef';
/* Exports called by other files*/
const Main = () =>(
    <div className={Form.form}>   
            <Title />
            <footer className={Styles.final}> 
                <ul className={Styles.buttonLayout}>
                    <li className={Styles.button}><Continue /></li>
                </ul>      
                <ul className={Styles.buttonLayout}>
                    <li className={Styles.button}><About /> </li>
                </ul>
                <ul className={Styles.buttonLayout}>
                    <li className={Styles.button}>Steam</li>
                </ul>

            </footer>
            
    </div>
)

export default Main;