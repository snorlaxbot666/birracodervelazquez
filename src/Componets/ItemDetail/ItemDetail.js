
import "../ItemDetail/ItemDetail.css";
import Contador from "../Contador/Contador"

const ItemDetail = ({ nombre, precio, img, descripcion }) => {


    return (
        <div className="producto">
            <div className="imagen">
                <img style={{ maxWidth: "100%" }} src={img} alt="" />
            </div>
            <div className="producto-info">
                <h3>{nombre}</h3>
                <h3 className="precio">Precio ${precio}</h3>
                <Contador inicio={0} tipoFlex="space-between" />
            </div>
            <div className="descripcion">
                <h3>{descripcion}</h3>
            </div>
        </div>
    )
}

export default ItemDetail