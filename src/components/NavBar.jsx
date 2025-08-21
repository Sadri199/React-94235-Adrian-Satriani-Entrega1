import CartWidget from "./CartWidget"
import "../App.css"

function NavBar () {
    const styleLi = {
        listStyle: "none",
        marginRight: "15%",
        padding: 0,
        display: "inline",
        fontSize: "1.4rem",
        overflowWrap: "break-word"
    }
    const styleA = {
        textDecoration: "inherit",
        color: "inherit"
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
            flexDirection: "row",
            paddingBottom: 20
        }}>
        <p style={{
            display: "inline",
            fontSize:"1.3rem",
            textWrap: "wrap",
            wordBreak: "break-word"
        }}>Ravens Black Market</p>
        <ul style={{
            flexGrow: 1,
            flexBasis: "100%",
        }}>
            <li className="oxanium-li" style={styleLi}>
                <a href="#" style={styleA}>AC Parts</a></li>
            <li className="oxanium-li" style={styleLi}>
                <a href="#" style={styleA}>Weapons</a></li>
            <li className="oxanium-li" style={styleLi}>
                <a href="#" style={styleA}>Optional Parts</a></li>
        </ul>
        <CartWidget />
        </div>
    )
}

export default NavBar