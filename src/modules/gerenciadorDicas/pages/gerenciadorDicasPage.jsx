import React from 'react';
import Footer from '../../../template/footer/footer';
import Header from '../components/header';
import {Row, Col ,NavDropdown, Container} from "react-bootstrap";


const GerenciadorDicasPage = () => {

    return (
        <div>
            <Header />
            <Container fluid className="px-5 box__gerenciador">
                <Row>
                    <div className="font-lg font-weight-bold text-white">
                        Gerenciador<br />de
                        dicas
               </div>
                </Row>
                
            </Container>
            
            <Footer />
        </div>

    )

}

export default GerenciadorDicasPage;