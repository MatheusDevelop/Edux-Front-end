function CreateObjetivo(props) {

    
    const Update = ()=>{
        let url="http://localhost:3001/api/objetivo"
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

        let url="http://localhost:3001/api/objetivo"
        fetch(url,{
            method:'post'
            ,headers:myHeaders
            ,body:JSON.stringify(obj)
        })
        .then(()=>{
                Update()
                alert("Objetivo adicionado");
            }
        )
        .catch(()=>{
            alert("Erro ao adicionar objetivo")
        })
   }    







    return (
        <div className="box__gerenciador__form bg-white shadow-lg font-sm pl-5 mb-5 ">
            <div className="font-md font-weight-bold text-roxo mb-3">
                Adicionar novo<br />objetivo
                            </div>
             <div className="mt-5">
                <div>
                    <label>Nome do objetivo</label>
                </div>
                <textarea className="shadow" id="description">

                </textarea>
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

export default CreateObjetivo;
