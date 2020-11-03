import React, {useState,useEffect} from 'react';
import Footer from '../../../template/footer/footer';
import Header from '../components/header';
import {Row, Col ,NavDropdown, Container, Card} from "react-bootstrap";
import CrudDicas from '../components/crudDicas';
import { url } from '../../../utils/constanturl';




const GerenciadorDicasPage = () => {

    const[dica,setDica] = useState([]);

    useEffect(() => {
        listar();
    },[]);

    const listar = () => {

        fetch(`${url}/dica`)
            .then(response => response.json())
            .then(dados => {
                setDica(dados.data);
                
                
            })
            .catch(err => console.error(err));
    }


    let list = dica.map((item)=>{ 
               
        return(
            <Card descript={item.descricao} dica={item.idUsuarioNavigation.titulo}/>
        )
    })

    return (
        <div>
            <Header />
            <Container fluid className="px-5 box__gerenciador">
                <Row>
                    <div className="font-lg font-weight-bold text-white">
                        Gerenciador<br />de
                        dicas
               </div>
                </Row>
                <Row>
                    <Col>
                        <CrudDicas setter ={setDica}/>
                    </Col>
                    <Col lg={7} className="d-flex align-items-center">
                        <Row className="flex-wrap read__scroll">
                            {list}
                        </Row>
                    </Col>
                </Row>
                
            </Container>
            
            <Footer />
        </div>

    )

}

export default GerenciadorDicasPage;