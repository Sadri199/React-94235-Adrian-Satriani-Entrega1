import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder' //armando placeholder
import ItemCount from "./ItemCount"

function ItemDetail({product}) {

    
    if(!product){
        return (<Card aria-hidden="true" border="secondary" style={{ width: '50%', height: '30%' }}>
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={12} />
                    </Placeholder>
                    <Placeholder as={Card.Subtitle} animation="glow">
                        <Placeholder xs={12} />
                    </Placeholder>
                </Card.Body>
            </Card>)
    }

    return (
        <Container >
            <Row className='d-flex fluid justify-content-center'>
                <Col sm={12} md={10}>
                    <Card key={product?.id} >
                        <Card.Body className='w-100 h-100 overflow-auto'>
                            <Card.Img className='h-50 w-100 fluid rounded' variant="top" src={product?.images} />
                            <Card.Title className='mb-4' as={'h2'}>{product?.title}</Card.Title>
                            <Card.Subtitle className="mb-4 text-muted text-capitalize">Category: {product?.category}</Card.Subtitle>
                            <Card.Text className='mb-4'>Description: {product?.description}</Card.Text>
                            <Card.Text className='mb-4'>Price: ${product?.price}</Card.Text>
                            <Card.Text className='mb-4'>Brand: {product?.brand}</Card.Text>
                            <Card.Text className='mb-4 text-decoration-underline'>Return Policy: {product?.returnPolicy}</Card.Text>
                            <ItemCount/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail