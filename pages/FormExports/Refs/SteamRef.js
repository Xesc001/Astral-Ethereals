import Link from 'next/link'
import React from 'react'

const Steam = React.forwardRef(({onClick, href} ,ref ) => {
    return(
        <a href={href} onClick={onClick} ref={ref}>
            Adelante!
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