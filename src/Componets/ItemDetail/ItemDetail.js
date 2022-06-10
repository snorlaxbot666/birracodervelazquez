
const ItemDetail = ({producto}) => {
    return (
        <div className="col-12 col-lg-6">
            <div className="card">
                <img src={producto.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text">Precio: {producto.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;