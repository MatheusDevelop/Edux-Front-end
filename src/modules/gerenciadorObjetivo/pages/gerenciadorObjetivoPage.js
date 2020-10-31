import {useState,useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import CreateObjetivo from "../components/createObjetivo";
import Header from '../components/header'
import Card from '../components/card'
import '../style/style.css'

function GerenciadorObjetivoPage() {

    const [objetivo, setObjetivo] = useState(
        [
        ]
    );

    useEffect(() => {
       
        let url = "https://localhost:44356/api/objetivo"
        fetch(url)
            .then((res)=>{
                return res.json()
            })
            .then((json)=>{
                setObjetivo(json);
            })
       

    }, []);

    let variavelQualquer= objetivo.map((objeto)=>{

        return(
            <div className="card__objetivo bg-white mx-2">                
                {objeto.tipo}
            </div>
        )
        

    })

    return (
        <>
            <Header />
            <Container fluid className="px-5 box__gerenciador">
                <Row>
                    <div className="font-lg font-weight-bold text-white">
                        Gerenciador<br />de
                        objetivo
                    </div>
                </Row>
                <Row>
                    <Col>
                        <CreateObjetivo/>
                    </Col>
                    <Col lg={7} className="d-flex align-items-center">
                        <Row className="flex-wrap read__scroll">
                            {variavelQualquer}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default GerenciadorObjetivoPage;