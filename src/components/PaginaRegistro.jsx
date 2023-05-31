import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PaginaRegistro = () => {
  const [userNew, setuserNew] = useState({
    nombre:null,
    correo:null,
    contrasena:null,
    departamento:null,
    municipio:null,
    celular:null
  });

  const navigate = useNavigate()

  const manejarEntrada = (e) => {
    setuserNew({...userNew, [e.target.name]: e.target.value});
  };

  const manejarEnvio = (e) =>{
    e.preventDefault();

    if(!userNew.nombre || !userNew.correo || !userNew.contrasena || !userNew.departamento || !userNew.municipio || !userNew.celular){
      alert('Ingresar la información completa');
      return;
    }
    localStorage.setItem('backend', JSON.stringify(userNew));
    localStorage.setItem('token', JSON.stringify({name: userNew.nombre}));

    navigate('/privada');
  };

  
  
  return <div>
      <form className="myForm" onSubmit={manejarEnvio}>
        
        <input placeholder="Nombre" type="text" onInput={manejarEntrada} name="nombre"/>
        <input placeholder="Correo electrónico" type="email" onInput={manejarEntrada} name="correo" />
        <input placeholder="Contraseña" type="password" onInput={manejarEntrada} name="contrasena"/>
        <input placeholder="Celular" type="text" onInput={manejarEntrada} name="celular"></input>
        <select name="departamento" onInput={manejarEntrada} >
        <option value="" disabled selected>Registrar departamento de residencia</option>
                            <option value="am">Amazonas</option>
                            <option value="an">Antioquia</option>
                            <option value="ar">Arauca</option>
                            <option value="at">Atlántico</option>
                            <option value="bo">Bolívar</option>
                            <option value="by">Boyacá</option>
                            <option value="ca">Caldas</option>
                            <option value="cq">Caquetá</option>
                            <option value="cs">Casanare</option>
                            <option value="cc">Cauca</option>
                            <option value="cr">Cesar</option>
                            <option value="ch">Chocó</option>
                            <option value="co">Córdoba</option>
                            <option value="cu">Cundinamarca</option>
                            <option value="gu">Guainía</option>
                            <option value="gv">Guaviare</option>
                            <option value="hl">Huila</option>
                            <option value="lg">La Guajira</option>
                            <option value="mg">Magdalena</option>
                            <option value="mt">Meta</option>
                            <option value="nñ">Nariño</option>
                            <option value="ns">Norte de Santander</option>
                            <option value="py">Putumayo</option>
                            <option value="qd">Quindío</option>
                            <option value="rd">Risaralda</option>
                            <option value="sa">San Andrés y Providencia</option>
                            <option value="st">Santander</option>
                            <option value="sc">Sucre</option>
                            <option value="tl">Tolima</option>
                            <option value="vl">Valle del Cauca</option>
                            <option value="vp">Vaupés</option>
                            <option value="vc">Vichada</option>
        </select>
        <select name='municipio' onInput={manejarEntrada}>
        <option value="" disabled selected>Registrar municipio de residencia</option>
                            <option value="le">Leticia</option>
                            <option value="md">Medellín</option>
                            <option value="ac">Arauca</option>
                            <option value="bq">Barranquilla</option>
                            <option value="ci">Cartagena de Indias</option>
                            <option value="tj">Tunja</option>
                            <option value="mz">Manizales</option>
                            <option value="fl">Florencia</option>
                            <option value="yp">Yopal</option>
                            <option value="py">Popayán</option>
                            <option value="vl">Valledupar</option>
                            <option value="qb">Quibdó</option>
                            <option value="mt">Montería</option>
                            <option value="bg">Bogotá</option>
                            <option value="in">Inírida</option>
                            <option value="jg">San José del Guaviare</option>
                            <option value="nv">Neiva</option>
                            <option value="rh">Riohacha</option>
                            <option value="sm">Santa Marta</option>
                            <option value="vv">Villavicencio</option>
                            <option value="pt">Pasto</option>
                            <option value="ct">Cúcuta</option>
                            <option value="mc">Mocoa</option>
                            <option value="an">Armenia</option>
                            <option value="pr">Pereira</option>
                            <option value="sp">San Andrés</option>
                            <option value="bm">Bucaramanga</option>
                            <option value="sj">Sincelejo</option>
                            <option value="ib">Ibagué</option>
                            <option value="cl">Cali</option>
                            <option value="mi">Mitú</option>
                            <option value="pc">Puerto Carreño</option>
        </select>
        <button type="submit">Registrar</button>
      </form>
  </div>;
  
}
