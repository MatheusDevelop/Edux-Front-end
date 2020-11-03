import React from 'react';
import {Form} from "react-bootstrap";

const CrudDicas = () => {
    
    return (
        <div className="box__gerenciador__form bg-white shadow-lg font-sm pl-5 mb-5 ">
            <div className="font-md font-weight-bold text-roxo mb-3">
                Adicionar nova<br />dica
                            </div>
             
            <div className="mt-5">
                <div>
                    <label>Texto</label>
                </div>
                <textarea className="shadow" id="description">

                </textarea>
            </div>
            <Form.Group controlId="formNome">
                                <Form.File id="fileCategoria" label="Imagem da Dica"  />
                                
                            </Form.Group>

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

export default CrudDicas;