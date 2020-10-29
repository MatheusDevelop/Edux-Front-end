function CreateTurma(props) {

    
    const Update = ()=>{
        let url="https://localhost:44356/api/turma"
        fetch(url)
        .then(res=>res.json()) 
        .then((json)=>{
            props.setter(json);            
        })  
    }
    
   const handleCreate = ()=>{
        let description = document.getElementById("description").value;

        let myHeaders = new Headers({
            'Content-Type': 'application/json',
            
          });
        let obj = {
            idCurso:'160F248A-06D6-469A-8CFB-7E33DABF59BF',
            descricao:description
        }
        document.getElementById("description").value="";

        let url="https://localhost:44356/api/turma"
        fetch(url,{
            method:'post'
            ,headers:myHeaders
            ,body:JSON.stringify(obj)
        })
        .then(()=>{
                Update()
                alert("Turma adicionada");
            }
        )
        .catch(()=>{
            alert("Erro ao adicionar turma")
        })
   }    







    return (
        <div className="box__gerenciador__form bg-white shadow-lg font-sm pl-5 mb-5 ">
            <div className="font-md font-weight-bold text-roxo mb-3">
                Adicionar nova<br />turma
                            </div>
            <div>
                <div>
                    <label>Cursos</label>
                </div>
                <div>
                    Colocar check de cursos
                </div>

            </div>
            <div className="mt-5">
                <div>
                    <label>Descrição</label>
                </div>
                <textarea className="shadow" id="description">

                </textarea>
            </div>

            <div className="mt-5 d-flex justify-content-start">
                <div onClick={handleCreate} className="button azul text-white d-flex justify-content-center align-items-center font-weight-bold shadow px-2">
                    <div>
                        Salvar
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateTurma;