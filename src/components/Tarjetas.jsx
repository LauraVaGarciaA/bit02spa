import { useState } from "react";
import { Tarjeta } from "./Tarjeta";

export const Tarjetas = ({catalogo}) => {
    const [cart, setCart] = useState([])

    const articulos = catalogo.map((articulo)=><Tarjeta key={articulo.id} articulo={articulo} />)

  return (
    <>
    <div className="titulo_catalogo">Catálogo de flores</div>
    <div className="articulos">{articulos}</div>
    </>
  );
};
