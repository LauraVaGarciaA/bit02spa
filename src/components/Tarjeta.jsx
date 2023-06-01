
export const Tarjeta = ({articulo}) => {
    const agregarAlCarrito = (item) =>{
        console.log(item);
    }

  return (
    <div className="articulo">
        <figure>
            <img src={articulo.imagen} alt={articulo.nombre} />
            <figcaption>{articulo.nombre} </figcaption>
        </figure>
    <div>$ {articulo.precio}</div>
    <button onClick={() => agregarAlCarrito(articulo)}>Agregar</button>
  </div>
  ) 
};
