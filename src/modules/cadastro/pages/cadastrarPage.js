import { useEffect, useState } from "react";
import { Container, Row, Col,Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import LeftSide from "../../login/components/leftSide";
function CadastrarPage() {

    const [toast,setToast] = useState(false);
    const [toast2,setToast2] = useState(false);
    const [toast3,setToast3] = useState(false);

    let url = "https://localhost:44356/api/cadastrar";

    let handleLogin = () => {
        let email = document.getElementById("cadastro_email").value
        let pass = document.getElementById("cadastro_pass").value
        let nome = document.getElementById("cadastro_nome").value
        let confpass = document.getElementById("cadastro_confpass").value

        if(confpass != pass ){
            setToast2(true)
            return
        }

        document.getElementById("cadastro_email").value = ""
        document.getElementById("cadastro_nome").value = ""
        document.getElementById("cadastro_pass").value = ""
        document.getElementById("cadastro_confpass").value = ""

        let myHeaders = new Headers({
            "Content-Type": 'application/json',

        });

        let obj = {
            Nome:nome,
            Email: email,
            senha: pass
        }

        fetch(url, {
            method: 'post'
            , headers: myHeaders
            , body: JSON.stringify(obj)
        })
            .then((res) => {
                if (res.status != 200) {
                    setToast(true)
                } else {
                    setToast3(true)
                }
            })
            .catch(() => {
            })




    }
    return (
        <>
            <Toast show={toast} onClose={()=>{setToast(false)}} className="fixed-top position-absolute">
                <Toast.Header>

                </Toast.Header>
                <Toast.Body className="font-weight-bold font-md text-roxo">
                    Oops, usuario já existente
                </Toast.Body>
            </Toast>
            <Toast show={toast2} onClose={()=>{setToast2(false)}} className="fixed-top position-absolute">
                <Toast.Header>

                </Toast.Header>
                <Toast.Body className="font-weight-bold font-md text-roxo">
                    Confirme sua senha, elas estão diferentes...
                </Toast.Body>
            </Toast>
            <Toast show={toast3} onClose={()=>{setToast3(false)}} className="fixed-top position-absolute">
                <Toast.Header>

                </Toast.Header>
                <Toast.Body className="font-weight-bold font-md text-roxo">
                        Parabens, voce é um novo usuario do Edux
                </Toast.Body>
            </Toast>
            <Container fluid className="box">
                <Row>
                    <LeftSide />
                    <Col className="box__right roxo-gradient fadeIn">
                        <div className="box__right__form--tittle font-md font-weight-bold text-white mb-2">
                            Sign up
                        </div>
                        <div className="box__right__form shadow-lg font-md-sm ">
                            <div>
                                <div>
                                    <label>Nome</label>
                                </div>
                                <input type="text" id="cadastro_nome" className="shadow" />
                            </div>
                            <div className="mt-5">
                                <div>
                                    <label>Email</label>
                                </div>
                                <input type="email" id="cadastro_email" className="shadow" />
                            </div>
                            <div className="mt-5">
                                <div>
                                    <label>Senha</label>
                                </div>
                                <input type="password" id="cadastro_pass" className="shadow" />
                            </div>
                            <div className="mt-5">
                                <div>
                                    <label>Confirmar senha</label>
                                </div>
                                <input type="password" id="cadastro_confpass" className="shadow" />
                            </div>
                            <div className="text-right">
                                <Link to="/login" className="text-dark font-sm">Ja tem conta? fazer login</Link>
                            </div>

                            <div className="mt-5  mb-5 d-flex justify-content-center">
                                <div onClick={handleLogin} className="button azul d-flex justify-content-around align-items-center text-white text-center font-weight-bold shadow ">
                                    <div>
                                        Sign up
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div class="material-icons">arrow_right_alt</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>



    )
}

export default CadastrarPage;