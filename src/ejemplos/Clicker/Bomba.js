


const Bomba = ({show, counter}) =>{
    return (
      <div>
        {show && (
          <p style={{ fontSize: `${counter * 16}px` }}>
            {counter >= 20 ? "Explosion" : "Bomb"}
          </p>
        )}
      </div>
    );
}

export default Bomba