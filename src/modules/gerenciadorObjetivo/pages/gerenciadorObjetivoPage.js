import {useState,useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import CreateObjetivo from "../components/createObjetivo";
import Header from '../components/header'
import Card from '../components/card'
import '../style/style.css'

function GerenciadorObjetivoPage() {

    
    
    

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

                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default GerenciadorObjetivoPage;