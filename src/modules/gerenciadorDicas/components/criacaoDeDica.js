function CriacaoDeDica(props) {

    const Update = () => {
        let url = "https://localhost:44356/api/dica"
        fetch(url)
            .then(res => res.json())
            .then((json) => {
                props.setter(json);
            })
    }

    
    const adicionarDica = ()=>{
        let url ="https://localhost:44356/api/dica"
        let valorDoTextArea = document.getElementById("categoria_description").value;

        document.getElementById("categoria_description").value = ""

        let objetoEmJavascript = {
            texto:valorDoTextArea
        }

        let myHeaders = new Headers({
            'Content-Type': 'application/json'
        });

        fetch(url,{
            method:"POST",
            headers:myHeaders,
            body:JSON.stringify(objetoEmJavascript)
        })
        .then((res)=>{
            if(res.status == 200){
                Update()
                alert("Deu tudo certo")
            }else{
                alert("Deu merda")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        

    }
    
    
    return (
        <div className="box__gerenciador__form bg-white shadow-lg font-sm pl-5 mb-5 ">
            <div className="font-md font-weight-bold text-roxo mb-3">
                Adicionar nova<br />categoria
                            </div>
            <div className="font-weight-bold text-dark">
                <label>Tipo de categoria</label>
            </div>
            <textarea className="shadow" id="categoria_description" maxLength="245">

            </textarea>
            <div className="mt-5 d-flex justify-content-start">
                <div onClick={adicionarDica} className="button azul text-white d-flex justify-content-between px-3 align-items-center font-weight-bold shadow px-2">
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

export default CriacaoDeDica;