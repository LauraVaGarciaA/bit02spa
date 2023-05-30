import { useState } from "react";

export const PaginaRegistro = () => {
  const [userNew, setuserNew] = useState({
    nombre:null,
    correo:null,
    contrasena:null
  })

  const manejarEntrada = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

  }
  return <div>
      <form className="myForm">
        
        <input placeholder="Nombre" type="text" onInput={manejarEntrada} name="nombre"/>
        <input placeholder="Correo electrónico" type="email" onInput={manejarEntrada} name="correo" />
        <input placeholder="Contraseña" type="password" onInput={manejarEntrada} name="contrasena"/>
        <button type="submit">Registrar</button>
      </form>
  </div>;
  
}
