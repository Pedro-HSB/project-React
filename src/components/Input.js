import { useState } from "react"
import Br from "./Br"

// const [letra, setLetra] = useState()
// const [nome, setBome] = useState()
// const [numero, setBumero] = useState()

function Input() {
    return (
        <>
            <input type="text" placeholder="fala uma letra"></input>
            <input type="text" placeholder="seu nome"></input>
            <input type="number" placeholder="fala um numero"></input>
            <Br/>
        </>
    )

}

export default Input

// onChange = {(e) => setLetra(e.target.value)} 
// onChange = {(e) => setNome(e.target.value)} 
//  onChange={(e) => setNumero(e.target.value)}