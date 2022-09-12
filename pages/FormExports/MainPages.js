import Form from '../../styles/Formulario.module.css'
import Title from './FormTitle'
import Link from 'next/link'
import Continue from './Refs/SteamRef'
/* Exports called by other files*/
const Main = () =>(
    <div className={Form.form}>   
            <Title />
            <Continue />
    </div>
)

export default Main;