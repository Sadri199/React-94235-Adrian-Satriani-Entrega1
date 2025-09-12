import Card from 'react-bootstrap/Card'
import ItemCount from "./ItemCount"

function ItemDetail({product}) {

    return (
        <div>
            <Card key={product?.id} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={product?.thumbnail} />
                    <Card.Title>{product?.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{product?.category}</Card.Subtitle>
                    <Card.Text>{product?.description}</Card.Text>
                    <Card.Text>${product?.price}</Card.Text>
                    <Card.Text>Brand: {product?.brand}</Card.Text>
                    <Card.Text>Return Policy: {product?.returnPolicy}</Card.Text>
                    <ItemCount/>
                </Card.Body>
            </Card>
        </div>
     )
}

export default ItemDetail