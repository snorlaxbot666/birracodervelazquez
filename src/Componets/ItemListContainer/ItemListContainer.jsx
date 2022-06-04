import '../ItemListContainer/ItemListContainer.css';
import { useEffect, useState } from 'react'
import { getProducto } from '../bd'
import ItemList from '../Componets/ItemList/ItemList.jsx'

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