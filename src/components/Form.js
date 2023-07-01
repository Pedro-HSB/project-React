import {useState} from "react"
import Epla from "./Epla"

import Input from "./Input"
import { isCompositeComponent } from "react-dom/test-utils";

// const [musica, setMusica] = useState('ela me engana')

function sub(){
    console.log("so um teste");
}
function echo(e) {
    e.preventDefault();
    alert("to funcionando")
}


function Form() {
    return (
        <>
            <form onSubmit={sub}>
                <Input letra="A"/>
                <Input nome="cleito"/>
                <Input numero={10}/>
                <Epla />
                {/* <input type="text" onChange={(e) => setMusica(e.target.value)} placeholder="fala uma Musica"></input> */}
            </form>
            <button type="submit" onClick={echo}>submit</button>
        </>
    )

}

export default Form