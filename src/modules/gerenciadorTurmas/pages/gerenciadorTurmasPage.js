import {useState,useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import CreateTurma from "../components/createTurma";
import Header from '../components/header'
import Card from '../components/card'
import '../style/style.css'

function GerenciadorTurmasPage() {
    const[turma,setTurma] = useState([]);

    useEffect(() => {

        let url="https://localhost:44356/api/turma"
        fetch(url)
        .then(res=>res.json()) 
        .then((json)=>{
            setTurma(json);            
        })  
           

    },[]);

    let list = turma.map((item)=>{ 
        return(
            <Card descript={item.descricao} setter={setTurma} remove={item.idTurma} curso={item.idCursoNavigation.titulo}/>
        )
    })

    return (
        <>
            <Header />
            <Container fluid className="px-5 box__gerenciador fadeIn">
                <Row>
                    <div className="font-lg font-weight-bold text-white">
                        Gerenciador<br />de
                        turmas
               </div>
                </Row>
                <Row>
                    <Col>
                        <CreateTurma json={turma} setter ={setTurma}/>
                    </Col>
                    <Col lg={7} className="d-flex align-items-center read_scroll justify-content-center">
                        {list}
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default GerenciadorTurmasPage;