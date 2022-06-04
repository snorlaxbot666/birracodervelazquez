import ipapyhg from "../Assets/ipapyh.jpeg";
import wipapyh from "../Assets/wipapyh.jpeg";
import diegobeer from "../Assets/diegobeer.jpeg";
import hempipa from "../Assets/hempsirhopper.png";
import apaokc from "../Assets/apaokc.jpeg";


const productos = [
    {id: '1', nombre: 'Ipa Palo y Hueso', precio: 380, img: ipapyhg},
    {id: '2', nombre: 'Wipa Palo y Hueso', precio: 500, img: wipapyh},
    {id: '3', nombre: 'Diego Beer Cerveceria Tacuara', precio: 500, img: diegobeer},
    {id: '4', nombre: 'Hemp Ipa Sir Hopper', precio: 300, img: hempipa},
    {id: '5', nombre: 'Apa Carancho Okcidenta', precio: 600, img: apaokc}
    
]

export const getProducto = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos)
        }, 2000)
    })
}