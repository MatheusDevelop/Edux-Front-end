import {Navbar,Nav ,NavDropdown,Container} from "react-bootstrap";
function Header() {
    return(
        <header>
        <Container fluid className="px-">
            <Navbar expand="lg" className="roxo shadow" variant="dark">
                    <Navbar.Brand>
                    EDUX 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="menu" />
                    <Navbar.Collapse id="menu" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="https://github.com/MatheusDevelop" target="_blank" className="d-flex align-items-center">Menu</Nav.Link>
                            <Nav.Link href="https://github.com/MatheusDevelop" target="_blank" className="d-flex align-items-center">Menu 2</Nav.Link>
                            <Nav.Link href="https://github.com/MatheusDevelop" target="_blank" className="d-flex align-items-center">Menu 3</Nav.Link>
                            <Nav.Link href="https://github.com/MatheusDevelop" target="_blank" className="d-flex align-items-center">Menu 4</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </Container>
        </header>

    )
}

export default Header;