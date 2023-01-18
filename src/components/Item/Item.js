


const Item = ({name, image, description, price, id}) => {
 
    return(
            <div className="col-4">
              <img src={image} alt={name} />
              <h4>{name}</h4>
              <p>{description}</p>
              <p>Precio: <b>${price}</b></p>
            </div>
    )
}

export default Item