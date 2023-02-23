import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({id, name, stock, category, image, description, price}) => {

    const { agregarAlCarrito, isInCart } = useCartContext()
    console.log(isInCart(id))

    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        
        const item = {
            id,
            name,
            stock,
            category,
            cantidad,
            image,
            description,
            price
        }
        agregarAlCarrito(item)
    }
    return (
        <div>
            <h2>{name}</h2>
            <img src={image}/>
            <br/>
            <small>Categoria: {category} </small>
            <p>{description}</p>
            <p>Precio: ${price}</p>

            {
                !isInCart(id)
                ? <ItemCount 
                        max={stock}
                        cantidad={cantidad}
                        setCantidad= {setCantidad}
                        onAdd= {handleAgregar}
                    />
                : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
            }

            <hr/>
            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
            {/* ItemCount */}
        </div>
    )
}

export default ItemDetail