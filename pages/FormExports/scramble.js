import TextScrambler  from 'react-scramble-text'
import React from 'react';

class Scrambled extends React.Component {
    render() {
        const welcome =  ["Bienvenido a", "Astral Ethereals","Somos un grupo de jugadores con una meta en común", "llegar a FPL",  "Seré tu asistente de registro","para unirte a ","As Et"]
        return(
            <TextScrambler 
                          phrases={welcome}
                          speed={60}
                          pauseTime={900}
                          repetitions={6}
                          symbolColor={'rgb(255, 88, 218)'}
                          chars={"인간이 폭정과 억압에"}          
                          
            />
        ) 

    }
  }

export default Scrambled;

