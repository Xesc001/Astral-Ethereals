import TextScrambler  from 'react-scramble-text'

/* Instructions(Text Scrambler) called from a library*/

export default function Scrambled(){   
    const welcome =  ["Primeramente", "Ingrese su Steam ID:"]
    return(
        <TextScrambler phrases={welcome}
                          speed={150}
                          pauseTime={1000}
                          repetitions={1}
                          symbolColor={'rgb(255, 88, 218)'}
                          chars={"인간이 폭정과 억압에"}
                          
         />
    ) 

}
