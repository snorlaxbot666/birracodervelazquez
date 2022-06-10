import {useState, useEffect } from 'react';
import { getProductoById} from '../DataBase/Bd';
import ItemDetail from '../../Componets/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        getProductoById(id)
        .then(producto => {
            setProducto(producto);
        })
    }, [id]);
    return (
        <>
       
            {producto && <ItemDetail producto = {producto}/>}
        </>
    )
}

export default ItemDetailContainer;