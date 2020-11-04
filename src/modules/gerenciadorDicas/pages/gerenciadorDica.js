import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartaoDeDica from "../components/cartaoDeDica";
import CartaoDeCategoria from "../components/cartaoDeDica";
import CriacaoDeDica from "../components/criacaoDeDica";
import CriacaoDeCategoria from "../components/criacaoDeDica";

const { default: Header } = require("../../gerenciadorObjetivo/components/header");

function GerenciadorDicasPage() {

    const [dica, setDica] = useState([]);

    useEffect(()=>{
        let url ="https://localhost:44356/api/dica"

        fetch(url)
            .then((res)=>{
                if(res.status == 200){
                    return res.json()
                }else{
                    alert("Deu merda")
                }
            })
            .then((json)=>{
                setDica(json)
            })
            

    }, []);

    let list = dica.map((objeto)=>{
        return(
            <CartaoDeDica tituloDinamico={objeto.tipo} id={objeto.idDica} setter={setDica}/>
            
        )
    })

    return (
        <>
            <Header />
            <Container fluid className="px-5 box__gerenciador">
                <Row>
                    <div className="font-lg font-weight-bold text-white">
                        Gerenciador<br />de
                        categorias
                    </div>
                </Row>
                <Row>
                    <Col>
                        <CriacaoDeDica setter={setDica}/>
                    </Col>
                    <Col lg={7} className="d-flex align-items-center">
                        <Row className="flex-wrap read__scroll">
                            {list}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default GerenciadorDicasPage;