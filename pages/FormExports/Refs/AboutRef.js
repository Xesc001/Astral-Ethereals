import React from 'react';
import Link from 'next/link'

const Info = React.forwardRef(({onClick, href} ,ref ) => {
    return(
        <a href={href} onClick={onClick} ref={ref}>
            About
        </a>
    )
})

function About() {
    return (
      <Link href="../FormExports/FormInputs/About" passHref>
        <Info />
      </Link>
    )
}

export default About;