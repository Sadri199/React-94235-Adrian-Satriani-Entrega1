function ItemListContainer ({text}) {

    return (
        <>
        <p style={{
            fontSize:"1.4rem",
            wordBreak: "break-word",
            whiteSpace: "pre-line",
            borderStyle: "inset",
            backgroundColor: "#323287", 
            color: "rgb(208, 225, 225)"}}>{text}</p>
        </>
    )
}

export default ItemListContainer