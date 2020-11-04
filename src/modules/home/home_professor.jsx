import Typewriter from "t-writer.js";
import { useEffect } from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap'

const { default: Footer } = require("../../template/footer/footer")
const { default: Header } = require("../gerenciadorTurmas/components/header")



const HomeProfessor = () => {
    return (
        <div>
            <Header />
            <Container fluid className="margin_home fadeIn">
                <Row>
                    <div className="font-lg font-weight-bold text-white">
                        Olá professor,<br />Bem vindo ao<br />
                        Edux.
               </div>
                </Row>
                <Row >
                    <div className=" margin_home_2 font-weight-bold text-white">Você tem notificações em seu feed</div>

                </Row>
                <Row>
                    <Button variant="primary"   >Ver feed</Button>{' '}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default HomeProfessor;