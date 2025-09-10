function ItemList({products}) {

    return (
        <>
        <p style={{ //acá va una card
            fontSize:"1.4rem",
            wordBreak: "break-word",
            whiteSpace: "pre-line",
            borderStyle: "inset",
            color: "rgb(208, 225, 225)"}} className="bg-primary">{products}</p>
        </>
    );
}

export default ItemList;