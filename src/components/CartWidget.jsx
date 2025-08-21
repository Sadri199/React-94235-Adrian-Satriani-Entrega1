function CartWidget (){

    return (
        <div>
            <img style={{
                position:"relative"
            }}
            src="https://img.icons8.com/?size=100&id=2tUDsxpnBvDz&format=png&color=000000" alt="Icon for a shopping cart" height="58"/>
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