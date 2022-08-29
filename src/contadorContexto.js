import React, {useState, createContext} from "react";



export const contadorContexto = createContext()

export function ContadorProvider(props){

    const [contagem, setContagem] = useState(0)

    return(
        <contadorContexto.Provider value={[contagem, setContagem]}>
            {props.children}
        </contadorContexto.Provider>
    )

}