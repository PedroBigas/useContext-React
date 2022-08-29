import React, { useContext, useState } from "react";
import {contadorContexto} from '../contadorContexto'


function Contador(props){

    const [contagem, setContagem] = useContext(contadorContexto)
    return(
        <div>
            <div>{contagem}</div>
            <button onClick={()=>{setContagem(anterior=>anterior - 1)}}>-</button>
            <button onClick={()=>{setContagem(anterior=>anterior + 1)}}>+</button>
        </div>
    )

}

export default Contador