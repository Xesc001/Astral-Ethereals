import Form from '../../../styles/Formulario.module.css'
import Styles from '../../../styles/Home.module.css'
import Email from '../Refs/EmailRef'
const Discord = () => (
    <main className={Styles.main}>
        <div className={Styles.container}>
            <div className={Form.form}>
                <form method="POST" className={Form.formulario}> 
                    <label id="Discord">Discord Tag:</label>
                    <br />
                    <input type="text" requiered className={Form.discord} name="Discord" />
                    <br />
                    <button type="submit"> Done! </button>
                </form>
                <Email />
            </div>
            
        </div>
    </main>
)
         
export default Discord;