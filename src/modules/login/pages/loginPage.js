import {Container, Row,Col} from "react-bootstrap";
import '../style/style.css'
function loginPage() {

    return (
        <>
            <Container fluid className="box">
                <Row>
                    <Col className="box__left p-5 text-white" lg={7}>
                        <div className="box__left--subtext font-md-sm">
                            Bem vindo ao Edux
                        </div>
                        <div className="font-lg font-weight-bold mb-5">
                            Uma plataforma<br/>
                            de estudante <br/>
                            para estudante.
                        </div>
                    </Col>
                    <Col className="box__right roxo">
                        <div className="box__right__form--tittle font-md font-weight-bold text-white mb-2">
                              Log in  
                        </div>
                        <div className="box__right__form shadow-lg font-md-sm ">
                            <div>
                                <div>
                                    <label>Email</label>
                                </div>
                                <input type="email" className="shadow"/>
                            </div>
                            <div className="mt-5">
                                <div>
                                    <label>Senha</label>
                                </div>
                                <input type="password" className="shadow"/>
                            </div>
                            <div className="text-right">
                                <a href="#" className="text-dark font-sm">Esqueci a senha</a>
                            </div>

                            <div className="mt-5 d-flex justify-content-center">
                                <div className="button azul text-white text-center font-weight-bold shadow px-2">
                                    Login
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>



    )
}

export default loginPage;