import Form from '../../../styles/Formulario.module.css'
import Styles from '../../../styles/Home.module.css'
import Discord from '../Refs/DiscordRef'
import Scrambled from '../ScrambledTexts/ScrambledDiscord';

/*This is the all inputs and registry formats*/
const Steam = () => (
    <main className={Styles.main}>
        <div className={Styles.container}>
            <div className={Form.form}>
                <Scrambled />
                <form method="POST" className={Form.formulario}> 
                          
                    <br /> 
                    <label id="Steam">Steam Code:</label>
                    <br />
                    <input type="text" className={Form.steam} name="Steam" />
                    <br />
                    <input type="submit" title='Done'/>
                </form>
                <Discord />
            </div>
            
        </div>
    </main>
    
)
         
export default Steam;