import { NavLink, Link } from "react-router"
import CartWidget from "./CartWidget"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Spinner from 'react-bootstrap/Spinner'
import { Origami } from "lucide-react"


function NavBar ({categoryName, brandName}) {

    if(categoryName.length==0){
        return (
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-2">
                <Container fluid>
                    <Navbar.Brand as={Link} to={"/"}>Ravens Black Market</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="mx-4" id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Our Categories" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item className="d-flex justify-content-center">
                                        <Spinner animation="border" variant="secondary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="mx-4" id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Our Partners" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item className="d-flex justify-content-center">
                                        <Spinner animation="border" variant="secondary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>    
        )
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-2">
            <Container fluid>
                <Navbar.Brand as={Link} to={"/"}>
                    <Origami />Ravens Black Market
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="mx-4" id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Our Categories" id="collapsible-nav-dropdown">
                            {categoryName.map((category) => 
                                <NavDropdown.Item className="text-capitalize" as={NavLink} to={`/category/${category.categoryName}`} key={category.id} >
                                    {category.categoryName.replaceAll('-', ' ')}
                                </NavDropdown.Item>
                            )}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="mx-4" id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Our Partners" id="collapsible-nav-dropdown">
                            {brandName.map((brand) => 
                                <NavDropdown.Item className="text-capitalize" as={NavLink} to={`/brand/${brand.brandName}`} key={brand.id} >
                                    {brand.brandName.replaceAll('-', ' ')}
                                </NavDropdown.Item>
                            )}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar