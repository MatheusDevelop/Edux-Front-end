import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartaoDeCategoria from "../components/cartaoDeCategoria";
import CriacaoDeCategoria from "../components/criacaoDeCategoria";

const { default: Header } = require("../../gerenciadorObjetivo/components/header");

function GerenciadorCategoriasPage() {

    const [categoria, setCategoria] = useState([]);

    useEffect(()=>{
        let url ="https://localhost:44356/api/categoria"

        fetch(url)
            .then((res)=>{
                if(res.status == 200){
                    return res.json()
                }else{
                    alert("Deu merda")
                }
            })
            .then((json)=>{
                setCategoria(json)
            })
            

    }, []);

    let list = categoria.map((objeto)=>{
        return(
            <CartaoDeCategoria tituloDinamico={objeto.tipo} id={objeto.idCategoria}/>
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
                        <CriacaoDeCategoria />
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

export default GerenciadorCategoriasPage;