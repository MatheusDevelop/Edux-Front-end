import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    
    return (
        //Usamos uma classe do Bootstrap
        <Container fluid className="px-">
            <footer className="text-center" style={{ marginTop: '70px' }}>
                <h3>DevXS</h3>
                <small>Repositório com os códigos usados: <a href="https://github.com/MatheusDevelop/Edux-Front-end" style={{ color: 'black' }}>Edux</a></small>
            </footer>
        </Container>
    )
    
}

export default Footer;