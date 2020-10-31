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
                            <Nav.Link href="https://github.com/MatheusDevelop" target="_blank" className="d-flex align-items-center">Feed Social</Nav.Link>
                            <Nav.Link href="https://github.com/MatheusDevelop" target="_blank" className="d-flex align-items-center">Objetivos</Nav.Link>
                            <Nav.Link href="https://github.com/MatheusDevelop" target="_blank" className="d-flex align-items-center">Dicas</Nav.Link>
                            <Nav.Link href="https://github.com/MatheusDevelop" target="_blank" className="d-flex align-items-center">Turmas</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </Container>
        </header>

    )
}

export default Header;