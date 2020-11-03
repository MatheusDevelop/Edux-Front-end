function Card(props) {
    return(
        <div className="card__objetivo bg-white shadow m-2 p-5 text-dark">
            <div className="font-md font-weight-bold">
                {props.objetivo}
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