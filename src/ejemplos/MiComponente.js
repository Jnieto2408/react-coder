


export const MiComponente = ({titulo, text: contenido, tel = 55666}) => {
    //const {titulo, text, tel} = props
    return (
        <div>
            <h2>{titulo}</h2>
            <p>{contenido}</p>
            <small>{tel}</small>
            <hr/>
        </div>
    )
}