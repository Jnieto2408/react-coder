import { useEffect, useState } from "react"
import Bomba from "./Bomba"



const Clicker = () =>{
    
    const [counter, setCounter] = useState(1)
    const [show, setShow] = useState(true)
    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        if(counter >1){
            setCounter(counter - 1)
        }
    }
    
    const mostrar = () => {
        setShow(!show)
    }

    useEffect(() => {
        console.log("Clicker Montado")

        return () => {
            console.log("Clicker desmontado")
        }
    }, [])
    useEffect(() => {
        console.log("Post Render", counter)
        return() => {
            console.log("Pre Render", counter)
        }
    }, [counter])

    return (
        <div className="container my-5">
            <h2>Clicker</h2>
            <hr/>

            <button className="btn btn-outline-primary" onClick={sumar}>Sumar</button>
            <button className="btn btn-primary mx-3" onClick={restar}>Restar</button>
            <p>{counter}</p>
            <hr/>
            <button className="btn btn-success" onClick={mostrar}>
                {show ? "Ocultar" : "Mostrar"}
            </button>
            <Bomba show={show} counter={counter} />
        </div>
    )
}

export default Clicker