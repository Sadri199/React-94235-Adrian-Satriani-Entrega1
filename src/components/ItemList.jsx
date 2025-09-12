import { CornerDownRight } from "lucide-react"
import { Link } from "react-router"
import Card from 'react-bootstrap/Card'

function ItemList({products}) {

    return (
        <div>
            {products.map((product)=>
                <Card key={product?.id} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={product?.thumbnail} />
                        <Card.Title>{product?.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{product?.category}</Card.Subtitle>
                        <Card.Link as={Link}>
                            <Link to={`/product/${product?.id}`}>
                                <CornerDownRight/>See More
                            </Link>
                        </Card.Link>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}

export default ItemList