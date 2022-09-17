import Link from 'next/link'
import React from 'react'
import Styles from '../../../styles/Home.module.css';

const Steam = React.forwardRef(({onClick, href} ,ref ) => {
    return(
        <a href={href} onClick={onClick} ref={ref} className={Styles.a}>
            Sign Up
        </a>
    )
})
function Home() {
    return (
      <Link href="../FormExports/FormInputs/Steam" passHref>
        <Steam />
      </Link>
    )
}
export default Home;