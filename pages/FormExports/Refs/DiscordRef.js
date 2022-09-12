import Link from 'next/link'
import React from 'react'

const Discord = React.forwardRef(({onClick, href} ,ref ) => {
    return(
        <a href={href} onClick={onClick} ref={ref}>
            Siguiente
        </a>
    )
})
function Home() {
    return (
      <Link href="../FormInputs/Discord" passHref>
        <Discord />
      </Link>
    )
}
export default Home;