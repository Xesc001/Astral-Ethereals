import Form from '../../styles/Formulario.module.css'
import Inputs from './Inputs'
import Title from './FormTitle'
import Link from 'next/link'
import Continue from './FormContinueButton'
/* Exports called by other files*/
const Main = () =>(
    <div className={Form.form}>
        <header>
            <Title />
        </header>
        <Link href='Inputs'>Si</Link>
    </div>
)

export default Main;