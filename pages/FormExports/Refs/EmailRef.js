import Link from 'next/link'
import React from 'react'

const Email = React.forwardRef(({onClick, href} ,ref ) => {
    return(
        <a href={href} onClick={onClick} ref={ref}>
            Email!
        </a>
    )
})
function Home() {
    return (
      <Link href="../FormInputs/Email" passHref>
        <Email />
      </Link>
    )
}
export default Home;