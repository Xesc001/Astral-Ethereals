import Form from '../../styles/Formulario.module.css'
import Scrambled from './ScrambledLabel';

/*This is the all inputs and registry formats*/
const Inputs = () => (
    <div>
        <form method="POST" className={Form.formulario}>
                <label id="props"><Scrambled /></label>
                <input type="text" className={Form.steam} name="Steam"/>
                <br /> 
                <label id="Discord">Discord Tag:</label>
                <br />
                <input type="text" className={Form.discord} name="Discord" />
                <br />
                <label id="Correo">Email:</label>
                <br />
                <input type="text" className={Form.mail} name="Email" />
                <br />
                <input type="submit" title='Done'/>
        </form>
    </div>
    
)
         
export default Inputs;