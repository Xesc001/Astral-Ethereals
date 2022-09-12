import Form from '../../../styles/Formulario.module.css'
import Styles from '../../../styles/Home.module.css'
const Email = () => (
    <main className={Styles.main}>
        <div className={Styles.container}>
            <div className={Form.form}>
                <form method="POST" className={Form.formulario}> 
                    <label id="Email">Email:</label>
                    <br />
                    <input type="text" className={Form.Email} name="Email" />
                    <br />
                    <input type="submit" title='Done'/>
                </form>
            </div>
        </div>
    </main>
)
export default Email;