import Form from '../../../styles/Formulario.module.css'
import Styles from '../../../styles/Home.module.css'
const Email = () => (
    <main className={Styles.main}>
        <div className={Styles.container}>
            <div className={Form.form}>
                <form method="POST" className={Form.formulario}> 
                    <label id="Email">Email:</label>
                    <br />
                    <input type="text" requiered className={Form.Email} name="Email" />
                    <br />
                    <button type="submit"> Done! </button>
                </form>
            </div>
        </div>
    </main>
)
export default Email;