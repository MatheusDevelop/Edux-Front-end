import { useEffect ,useState} from "react";
import { Container ,Row,Col} from "react-bootstrap";
import Card from "../components/card";
import Header from "../../gerenciadorTurmas/components/header";
import CreateCurso from "../components/createCurso";

function GerenciadorCursosPage() {
    const [curso, setCurso] = useState([]);
    
    useEffect(() => {
        const url="https://localhost:44356/api/curso"

        fetch(url)
            .then((res)=>{
                if(res.status==200){
                    return res.json()
                }else{
                    alert("Deu ruim")
                }
            })
            .then((json)=>{
                setCurso(json)
            })
    }, []);

    const list = curso.map((obj)=>{
        return(
            <Card title={obj.titulo} setter={setCurso} remove={obj.idCurso} subtitle={obj.idInstituicaoNavigation.nome}/>
        )
    })

    return(
        <>
            <Header />
            <Container fluid className="px-5 box__gerenciador fadeIn">
                <Row>
                    <div className="font-lg font-weight-bold text-white">
                        Gerenciador<br />de
                        cursos
                    </div>
                </Row>
                <Row>
                    <Col>
                        <CreateCurso json={curso} setter = {setCurso}/>
                    </Col>
                    <Col lg={7} className="d-flex align-items-center read_scroll justify-content-center">
                        {list}
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default GerenciadorCursosPage;