import Form from '../../styles/Formulario.module.css'
import Inputs from './Inputs'
import Title from './FormTitle'
import Continue from './FormContinueButton'
import Link from 'next/link'

export default function Main(){
    return(
            <div className={Form.form}>
                <header>
                    <Title />
                </header>
                <Link href="/Inputs">Continue</Link>
            </div>
        
    )
}
