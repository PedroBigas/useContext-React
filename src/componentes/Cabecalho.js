import React, { useContext } from "react";
import {contadorContexto} from '../contadorContexto'

function Cabecalho(props) {

const [contagem, setContagem] = useContext(contadorContexto)

    return(
     <div className="cabecalho">
        <h3>Contador</h3>
        <div>{contagem}</div>
     </div>
    )

}


export default Cabecalho;