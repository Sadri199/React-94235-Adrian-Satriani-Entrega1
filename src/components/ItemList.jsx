import { Link } from "react-router" 
import { CornerDownRight } from "lucide-react"
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Placeholder from 'react-bootstrap/Placeholder'

function ItemList({products}) {

    if(products.length==0){
        return(
            <Card aria-hidden="true" border="secondary" style={{ width: '50%', height: '30%' }}>
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={12} />
                    </Placeholder>
                    <Placeholder as={Card.Subtitle} animation="glow">
                        <Placeholder xs={12} />
                    </Placeholder>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div>
            <Row className="g-4">
                {products.map((product)=>
                <Col xs lg={true} key={product?.id} className="ms-5 ms-md-2">
                <Card key={product?.id} border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={product?.thumbnail} />
                        <Card.Title>{product?.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{product?.category}</Card.Subtitle>
                        <Card.Link className="text-bg-light link-body-emphasis link-underline link-underline-opacity-0" as={Link} to={`/product/${product?.id}`}>
                                <CornerDownRight/>See More
                        </Card.Link>
                    </Card.Body>
                </Card>
                </Col>
            )}
            </Row>
        </div>
    )
}

export default ItemList