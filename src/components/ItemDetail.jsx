import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder'
import ItemCountContainer from './ItemCountContainer'

function ItemDetail({product}) {

    
    if(!product){
        return (
        <Container >
            <Row className='d-flex fluid justify-content-center'>
                <Col sm={12} md={10}>
                    <Card key={product?.id} >
                        <Card.Body className='w-100 h-100 overflow-auto'>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={12} />
                            </Placeholder>
                            <Placeholder as={Card.Subtitle} animation="glow">
                                <Placeholder xs={12} />
                            </Placeholder>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        )
    }

    return (
        <Container >
            <Row className='d-flex fluid justify-content-center'>
                <Col sm={12} md={10}>
                    <Card key={product?.id} >
                        <Card.Body className='w-100 h-100 overflow-auto'>
                            <Card.Img className='h-50 w-100 fluid rounded' variant="top" src={product?.image} />
                            <Card.Title className='mb-4' as={'h2'}>{product?.name}</Card.Title>
                            <Card.Subtitle className="mb-4 text-muted text-capitalize">Category: {product?.category}</Card.Subtitle>
                            <Card.Text className='mb-4'>Brand: {product?.brand}</Card.Text>
                            <Card.Img className='h-25 w-25 fluid rounded' variant="top" src={product?.brandPic} />
                            <Card.Text className='mb-4'>Description: {product?.description}</Card.Text>
                            {product.ap ? 
                            <Card.Text className='mb-4'>Armor Points: {product?.ap} AP</Card.Text>
                            : null}
                            {product.energyOutput ? 
                            <Card.Text className='mb-4'>Energy Output: {product?.energyOutput}</Card.Text>
                            : null}
                            {product.attackPower ? 
                            <Card.Text className='mb-4'>Attack Power: {product?.attackPower}</Card.Text>
                            : null}
                            {product.ammo ? 
                            <Card.Text className='mb-4'>Number of Ammo: {product?.ammo}</Card.Text>
                            : null}
                            <Card.Text className='mb-4'>Weight: {product?.weight} Kgs</Card.Text>
                            {product.maxWeight ? 
                            <Card.Text className='mb-4'>Maximum Leg Weight: {product?.maxWeight} Kgs</Card.Text>
                            : null}
                            <Card.Text className='mb-4'>Price: {product?.price} C</Card.Text>
                            <Card.Text className='mb-4 text-decoration-underline'>Return Policy: {product?.returnPolicy}</Card.Text>
                            <ItemCountContainer product={product}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail