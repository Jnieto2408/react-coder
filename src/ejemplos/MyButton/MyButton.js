import "./MyButton.scss"


const MyButton = ({children, variant = 1}) => {
    return (
        <button className={`mybutton variant-${variant}`}>
            {children}
        </button>
    )
}

export default MyButton