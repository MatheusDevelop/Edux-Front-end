function CreateObjetivo() {
    return (
        <div className="box__gerenciador__form bg-white shadow-lg font-sm pl-5 mb-5 ">
            <div className="font-md font-weight-bold text-roxo mb-3">
                Adicionar novo<br />objetivo
                            </div>
             <div className="mt-5">
                <div>
                    <label>Nome do objetivo</label>
                </div>
                <input className="shadow" id="description" />

            </div>
            <div className="mt-5">
                Categoria
            </div>

            <div className="mt-5 d-flex justify-content-start">
                <div className="button azul text-white d-flex justify-content-center align-items-center font-weight-bold shadow px-2">
                    <div>
                        Salvar
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default CreateObjetivo;
