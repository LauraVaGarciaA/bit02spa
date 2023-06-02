import { useEffect, useState } from "react";
import { Tarjeta } from "./Tarjeta";
import { Carrito } from "./Carrito";

export const Tarjetas = ({catalogo}) => {
    const [carrito, setCarrito] = useState([])

    const articulos = catalogo.map((articulo)=>(
        <Tarjeta key={articulo.id} 
        articulo={articulo} 
        carrito={carrito} 
        setCarrito={setCarrito} />
    ));

    useEffect(() => {
        console.log({carrito});
     
    }, [carrito])
    

  return (
    <>
    <div className="titulo_catalogo">Catálogo de flores</div>
    <Carrito/>
    <div className="articulos">{articulos}</div>
    </>
  );
};
