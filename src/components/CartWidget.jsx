function CartWidget (){

    return (
        <div>
            <p style={{
                position:"relative",
                cursor: "pointer"
            }}>📩</p>
        
            <span style={{
                position:"absolute",
                top: 9,
                right: 7,
                backgroundColor: "#fa3e3e",
                borderRadius: 2,
                color: "white",
                fontSize: 15,
                padding: 1
            }}>5</span>
        </div>
    )
}

export default CartWidget