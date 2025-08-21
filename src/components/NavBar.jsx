import CartWidget from "./CartWidget"

function NavBar () {
    const styleLi = {
        listStyle: "none",
        marginRight: "15%",
        padding: 0,
        display: "inline",
        fontSize: "1.4rem",
        wordBreak: "break-word"
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row"
        }}>
        <p style={{
            display: "inline",
            fontSize:"1.4rem",
            textWrap: "wrap",
            wordBreak: "break-word"
        }}>Nerves Concord Shop</p>
        <ul style={{
            flexGrow: 1
        }}>
            <li style={styleLi}>AC Parts</li>
            <li style={styleLi}>Weapons</li>
            <li style={styleLi}>Optional Parts</li>
        </ul>
        <CartWidget />
        </div>
    )
}

export default NavBar