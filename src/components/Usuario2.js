export const Usuario2 = ({user}) => {
    return(
        <div>
            <h2>{user.nombre}</h2>
            <p>Cursando: <strong>{user.curso}</strong></p>
            <p>Edad:{user.edad}</p>
        </div>
    )
}