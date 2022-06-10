import ipapyhg from "../Assets/ipapyh.jpeg";
import wipapyh from "../Assets/wipapyh.jpeg";
import diegobeer from "../Assets/diegobeer.jpeg";
import hempipa from "../Assets/hempsirhopper.png";
import apaokc from "../Assets/apaokc.jpeg";


const producto = [
    {id: '1', nombre: 'Ipa Palo y Hueso', category: 'Ipa', precio: 380, img: ipapyhg},
    {id: '2', nombre: 'Wipa Palo y Hueso', category: 'Ipa', precio: 500, img: wipapyh},
    {id: '3', nombre: 'Diego Beer Tacuara', cateogry: 'Golden', precio: 500, img: diegobeer},
    {id: '4', nombre: 'Hemp Ipa Sir Hopper', category: 'Ipa', precio: 300, img: hempipa},
    {id: '5', nombre: 'Apa Carancho Okcidenta', category: 'Apa', precio: 600, img: apaokc}
    
]

export const getProducto = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(producto)
        }, 500)
    }
    )
}

export const getProductoByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductoById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto.find(prod => prod.id === id))
        }, 500)
    })
}

