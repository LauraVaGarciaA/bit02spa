import { Link } from "react-router-dom";

export const Navegacion = () => {
  return (
    <nav className="navegacion">
      
      <Link to='/bit02spa'>Inicio</Link>
      <Link to='/acerca-de'>Acerca de</Link>
      <Link to='/productos'>Productos</Link>
      <Link to='/registro'>Registro</Link>
      
    </nav>
  )
}
