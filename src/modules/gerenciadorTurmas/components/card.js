function Card(props) {
    return(
        <div className="card__turma bg-white shadow m-2 p-5 text-dark">
            <div className="font-md font-weight-bold">
                {props.turma}
            </div>
            <div className="font-md-sm">
                {props.curso}
            </div>
            <div className="font-sm ">
                {props.descript}
            </div>
            <div className="d-flex mt-5">
                <div className="button bg-danger mr-2">
                
                </div>
                <div className="button bg-info mr-2">
                
                </div>
            </div>
        </div>
    )
}

export default Card;