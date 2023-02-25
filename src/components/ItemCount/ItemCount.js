import { useState } from "react"



const ItemCount = ({cantidad, max, setCantidad, onAdd}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return(
        <div>
            <button 
            onClick={handleRestar} 
            className={`btn ${cantidad > 1 ? "btn-outline-primary" : "btn-outline-danger"}`}
            disabled={cantidad === 1}>
                -
            </button>
            <span className="mx-3">{cantidad}</span>
            <button 
            onClick={handleSumar} 
            className={cantidad < max ? "btn btn-primary" : "btn btn-danger"}
            disabled={cantidad === max}>
                +
            </button>
            <br/>
            <button className="btn btn-success my-3" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount