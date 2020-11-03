import { useEffect, useState } from "react";
import { Container, Row, Col,Toast } from "react-bootstrap";
import '../style/style.css'
import { Link } from 'react-router-dom'
import LeftSide from "../components/leftSide";
import LogoEdux from '../../../assets/Ativo 1.svg'
function LoginPage() {

    const [toast,setToast] = useState(false);

    let url = "https://localhost:44356/api/login";

    let handleLogin = () => {
        let email = document.getElementById("login_email").value
        let pass = document.getElementById("login_pass").value

        document.getElementById("login_email").value = ""
        document.getElementById("login_pass").value = ""

        let myHeaders = new Headers({
            "Content-Type": 'application/json',

        });

        let obj = {
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
                    console.log("Autorizado")
                }
            })
            .then((json)=>{
                
                console.log(json())
            })
            .catch(() => {
                setToast(true)
            })




    }
    return (
        <>
            <Toast show={toast} onClose={()=>{setToast(false)}} className="fixed-top position-absolute">
                <Toast.Header>

                </Toast.Header>
                <Toast.Body className="font-weight-bold font-md text-roxo">
                    Oops, usuario ou senha invalido
                </Toast.Body>
            </Toast>
            <Container fluid className="box">
                <Row>
                    <LeftSide/>
                    <Col className="box__right roxo-gradient fadeIn">
                        <div>
                            <img src={LogoEdux}/>
                        </div>
                        <div className="box__right__form--tittle font-md font-weight-bold text-white mb-2">
                            Log in
                        </div>
                        <div className="box__right__form shadow-lg font-md-sm ">
                            <div>
                                <div>
                                    <label>Email</label>
                                </div>
                                <input type="email" id="login_email" className="shadow" />
                            </div>
                            <div className="mt-5">
                                <div>
                                    <label>Senha</label>
                                </div>
                                <input type="password" id="login_pass" className="shadow" />
                            </div>
                            <div className="text-right mt-3">
                                <Link to="/cadastrar" className="text-dark font-sm">Não tem uma conta? Cadastre-se agora</Link>
                            </div>                       

                            <div className="mt-5  mb-5 d-flex justify-content-center">
                                <div onClick={handleLogin} className="button azul d-flex justify-content-around align-items-center text-white text-center font-weight-bold shadow ">
                                    <div>
                                        Log in
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

export default LoginPage;