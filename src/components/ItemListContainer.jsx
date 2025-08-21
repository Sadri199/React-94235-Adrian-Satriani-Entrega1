function ItemListContainer ({text}) {

    return (
        <>
        <p style={{
            paddingTop:25,
            display: "inline",
            fontSize:"1.4rem",
            textWrap: "wrap",
            wordBreak: "break-word"}}>{text}</p>
        </>
    )
}

export default ItemListContainer