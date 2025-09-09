import { Button } from "./ui/button"

function ItemListContainer ({text}) {

    return (
        <>
        <p style={{
            fontSize:"1.4rem",
            wordBreak: "break-word",
            whiteSpace: "pre-line",
            borderStyle: "inset",
            color: "rgb(208, 225, 225)"}} className="bg-primary">{text}</p>
            <Button>ShadCN </Button>
        </>
    )
}

export default ItemListContainer