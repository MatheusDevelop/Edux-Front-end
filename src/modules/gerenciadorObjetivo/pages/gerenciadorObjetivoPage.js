import {useState,useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import CreateObjetivo from "../components/createObjetivo";
import Header from '../components/header'
import Card from '../components/card'
import '../style/style.css'

function GerenciadorObjetivoPage() {
    const[objetivo,setObjetivo] = useState([]);

    useEffect(() => {

        let url="http://localhost:3001/api/objetivo"
        fetch(url)
        .then(res=>res.json()) 
        .then((json)=>{
            setObjetivo(json);            
        })  
           

    },[]);

    let list = objetivo.map((item)=>{ 
        console.log(objetivo)       
        return(
            <Card descript={item.descricao} objetivo={item.idObjetivoNavigation.titulo}/>
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
                        <CreateObjetivo setter ={setObjetivo}/>
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

export default GerenciadorObjetivoPage;