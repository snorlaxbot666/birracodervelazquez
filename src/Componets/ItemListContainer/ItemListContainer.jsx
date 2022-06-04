import '../ItemListContainer/ItemListContainer.css';
import { useEffect, useState } from 'react'
import { getProducto } from '../DataBase/Bd';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({mensaje}) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducto().then(response => {
            setProductos(response)
        })
    }, [])

    return (
        <section>
            <h1 className="titulo">{mensaje}</h1>
            <ItemList productos={productos} />
        </section>
    )
}

export default ItemListContainer