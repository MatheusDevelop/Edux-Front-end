function Card(props) {
    const remove = (id)=>{
        let myHeaders = new Headers({
            'Content-Type': 'application/json',

        });
        let url = `https://localhost:44356/api/curso/${id}`
        fetch(url,{method:'delete'})
        .then(() => {
            Update()
            alert("Turma removida");
        }
        )
        .catch(() => {
            alert("Erro ao remover turma")
        })
    }
    const Update = () => {
        let url = "https://localhost:44356/api/curso"
        fetch(url)
            .then(res => res.json())
            .then((json) => {
                props.setter(json);
            })
    }
    return(
         <div className="card__turma bg-white shadow m-2 p-5 text-dark fadeIn">
            
            <div className="font-md-sm">
                {props.title}
            </div>
            <div className="font-sm  text__box__descript">
                {props.subtitle}
            </div>
            <div className="d-flex mt-5">
                <div onClick={()=>{remove(props.remove)}}className="button bg-danger mr-2 font-weight-bold d-flex justify-content-around text-white align-items-center">
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

export default Card;