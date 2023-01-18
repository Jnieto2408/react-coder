


const Item = ({prod}) => {
 
    return(
            <div className="col-4">
              <img src={prod.image} alt={prod.name} />
              <h4>{prod.name}</h4>
              <p>{prod.description}</p>
              <p>Precio: <b>${prod.price}</b></p>
            </div>
    )
}

export default Item