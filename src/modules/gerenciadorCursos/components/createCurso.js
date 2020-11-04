import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";

function CreateCurso(props) {
    const [instituicao, setInstituicao] = useState([]) 
    const Update = () => {
        let url = "https://localhost:44356/api/curso"
        fetch(url)
            .then((res) => {
                if (res == 200) {
                    return res.json()
                } else {
                    alert("Deu ruim")
                }
            })
            .then((json) => {
                props.setter(json)
            })

    }

    const handleCreate = ()=>{
        let url ="https://localhost:44356/api/curso"
        let title = document.getElementById("title_course").value;
        document.getElementById("title_course").value = ""
        let obj = {
            Titulo:title,
            IdInstituicao:instituicao[dropindex].idInstituicao
        }
        let myHeaders = new Headers({
            'Content-Type': 'application/json',
        });
        fetch(url,{
            method:"POST",
            headers:myHeaders,
            body:JSON.stringify(obj)
        })
        .then((res)=>{
            if(res.status == 200){
                alert("Cetto")
            }else{
                alert("Erro "+res)
            }
        })
        
    }

    useEffect(() => {
        let url = "https://localhost:44356/api/instituicao"
        fetch(url)
        .then((res) => {return res.json()})
        .then((json) => {
            setInstituicao(json)
        })

    }, [])

    const [dropindex,setDropindex] = useState(-1)

    const list = instituicao.map((obj,index) => {
        if(instituicao.length >=0 ) {
            return (
                <Dropdown.Item onClick={()=>{setDropindex(index)}}>
                    {obj.nome}
                </Dropdown.Item>  
            )          
        }else{            
            return(<span>Carregando...</span>)            
        }
    })
    return (
        <div className="box__gerenciador__form bg-white shadow-lg font-sm pl-5 mb-5 ">
            <div className="font-md font-weight-bold text-roxo mb-3">
                Adicionar novo<br />curso
            </div>
            <div className="font-weight-bold text-dark">
                Instituição
            </div>
            <Dropdown>
                <Dropdown.Toggle variant="transparent" className="roxo" id="dropdown-basic">
                    {dropindex >=0 ? instituicao[dropindex].nome:"Selecione uma instituição "}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {list}
                </Dropdown.Menu>
            </Dropdown>
            <div>
                <div className="font-weight-bold text-dark mt-5">
                    Titulo do curso
                </div>
                <input className="shadow mt-3" id="title_course" />
            </div>

            <div className="mt-5 d-flex justify-content-start">
                <div onClick={handleCreate}className="button azul text-white d-flex justify-content-between px-3 align-items-center font-weight-bold shadow px-2">
                    <div>
                        Salvar
                    </div>
                    <div className="d-flex align-items-center">
                        <div class="material-icons">check_circle</div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CreateCurso;