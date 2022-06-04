import ipapyhg from "./assets/ipapyhg.jpeg";
import wipapyh from "./assets/wipapyh.jpeg";
import diegobeer from "./assets/diegobeer.jpeg";
import hempipa from "./assets/ipashirhopper.webp";
import apaokc from "./assets/apaokc.jpeg";


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