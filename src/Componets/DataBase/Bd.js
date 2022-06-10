import ipapyhg from "../Assets/ipapyh.jpeg";
import wipapyh from "../Assets/wipapyh.jpeg";
import diegobeer from "../Assets/diegobeer.jpeg";
import hempipa from "../Assets/hempsirhopper.png";
import apaokc from "../Assets/apaokc.jpeg";


const producto = [
    {categoryId: 'ipa', id: '1', nombre: 'Ipa Palo y Hueso', category: 'Ipa', precio: 380, img: ipapyhg, descripcion: 'cerveza lupulada'},
    {categoryId: 'wipa', id: '2', nombre: 'Wipa Palo y Hueso', category: 'Ipa', precio: 500, img: wipapyh, descripcion: 'cerveza west coast fuerte'},
    {categoryId: 'especial', id: '3', nombre: 'Diego Beer Tacuara', cateogry: 'Golden', precio: 500, img: diegobeer, descripcion: 'edicion especial golden maradona'},
    {categoryId: 'hemp', id: '4', nombre: 'Hemp Ipa Sir Hopper', category: 'Ipa', precio: 300, img: hempipa, descripcion: 'cerveza lupulada intensa de hernan castelani'},
    {categoryId: 'apa', id: '5', nombre: 'Apa Carancho Okcidenta', category: 'Apa', precio: 600, img: apaokc, descripcion: 'cerveza citrica americana'},
    
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

