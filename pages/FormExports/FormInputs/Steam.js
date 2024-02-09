import Form from '../../../styles/Formulario.module.css'
import Styles from '../../../styles/Home.module.css'
import Discord from '../Refs/DiscordRef'
import validator from "../validator"
import Scrambled from '../ScrambledTexts/ScrambledDiscord';

/*This is the all inputs and registry formats and sends the data to the API form*/
const Steam = () => (
    <main className={Styles.main}>
        <div className={Styles.container}>
            <div className={Form.form}>
                <Scrambled />
                <form action="/api/form" method="post" className={Form.formulario}>   
                    <br /> 
                    <label htmlFor='first'>Steam Code:</label>
                    <br />
                    <input required type="text" id="first" className={Form.steam} name="first" />
                    <br />
                    <button type="submit"> Done! </button>
                </form>
                <Discord />
            </div>

        </div>
    </main>
    
)
         
export default Steam;