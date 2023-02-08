


const ItemDetail = ({id, name, image, description, price}) => {

    return (
        <div>
            <h2>{name}</h2>
            <img src={image}/>
            <p>{description}</p>
            <p>Precio: ${price}</p>

            {/* ItemCount */}
        </div>
    )
}

export default ItemDetail