import CriacaoDeDica from "./criacaoDeDica"

function CartaoDeDica(props) {
    
    const editarObjeto = (id) => {
        
    }

    const removerObjeto = (id)=>{

        let url = `https://localhost:44356/api/dica/${id}`

        fetch(url,{method:'DELETE'})
            .then((res)=>{
                if(res.status == 200){
                    Update()
                    alert("Item removido com sucesso")
                }else{
                    alert("Deu merda")
                }
        })
        
        const Update = () => {
            let url = "https://localhost:44356/api/dica"
            fetch(url)
                .then(res => res.json())
                .then((json) => {
                    props.setter(json);
                })
        }
            
        
    }

    return (
        <div className="card__turma bg-white shadow m-2 p-5 text-dark fadeIn">
            <div className="font-md-sm font-weight-bold">
                {props.tituloDinamico}
            </div>

            <div className="d-flex mt-5">
                <div onClick={()=>{removerObjeto(props.id)}} className="button bg-danger mr-2 font-weight-bold d-flex justify-content-around text-white align-items-center">
                    <div>
                        Remover
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="material-icons">
                            delete
                        </div>
                    </div>
                </div>
                <div className="button bg-warning mr-2 font-weight-bold d-flex justify-content-around text-white align-items-center">
                    <div>
                        Editar
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="material-icons">
                            create
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default CartaoDeDica;