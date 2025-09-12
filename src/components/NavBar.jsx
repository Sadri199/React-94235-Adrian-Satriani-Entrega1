import { NavLink, Link } from "react-router"
import CartWidget from "./CartWidget"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar ({categoryName}) {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link}>
                    <Link to={"/"}>Ravens Black Market</Link>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Our Categories" id="basic-nav-dropdown">
                            {categoryName.map((category, index) => 
                                <NavDropdown.Item as={NavLink} to={`/category/${category}`} key={index} >
                                    {category}
                                </NavDropdown.Item>
                            )}
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar