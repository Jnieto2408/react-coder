export const Usuario = ({nombre, curso, edad}) => {
    return(
        <div>
            <h2>{nombre}</h2>
            <p>Cursando: <strong>{curso}</strong></p>
            <p>Edad:{edad}</p>
        </div>
    )
}