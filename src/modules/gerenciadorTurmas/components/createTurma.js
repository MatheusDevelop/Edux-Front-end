import { useEffect } from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

function CreateTurma(props) {
    const [curso, setCurso] = useState([])
    const [select, setSelect] = useState(-1)

    useEffect(() => {
        let url = "https://localhost:44356/api/curso"
        fetch(url)
            .then(res => res.json())
            .then((json) => {
                setCurso(json)
            })
    }, []);

    const Update = () => {
        let url = "https://localhost:44356/api/turma"
        fetch(url)
            .then(res => res.json())
            .then((json) => {
                props.setter(json);
            })
    }

    const handleCreate = () => {
        let description = document.getElementById("description").value;

        let myHeaders = new Headers({
            'Content-Type': 'application/json',

        });
        let obj = {
            idCurso: curso[select].idCurso,
            descricao: description
        }
        document.getElementById("description").value = "";

        let url = "https://localhost:44356/api/turma"
        fetch(url, {
            method: 'post'
            , headers: myHeaders
            , body: JSON.stringify(obj)
        })
            .then(() => {
                Update()
                alert("Turma adicionada");
            }
            )
            .catch(() => {
                alert("Erro ao adicionar turma")
            })
    }

    let list = curso.map((obj, index) => {
        if(curso.length >=0 ) {
            return (
                <Dropdown.Item onClick={()=>setSelect(index)}>
                    {obj.titulo}
                </Dropdown.Item>  
            )          
        }else{            
            return(<span>Carregando...</span>)            
        }
    })




    return (
        <div className="box__gerenciador__form bg-white shadow-lg font-sm pl-5 mb-5 ">
            <div className="font-md font-weight-bold text-roxo mb-3">
                Adicionar nova<br />turma
                            </div>
            <div>
                <div  className="font-weight-bold text-dark">
                    Cursos
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="transparent" className="roxo" id="dropdown-basic"> 
                        {select>=0 ? curso[select].titulo : 'Selecione um curso'}                      
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {list}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="mt-5">
                <div className="font-weight-bold text-dark">
                    <label>Descrição</label>
                </div>
                <textarea className="shadow" id="description" maxLength="245">

                </textarea>
            </div>

            <div className="mt-5 d-flex justify-content-start">
                <div onClick={handleCreate} className="button azul text-white d-flex justify-content-between px-3 align-items-center font-weight-bold shadow px-2">
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

export default CreateTurma;