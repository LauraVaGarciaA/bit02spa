import { Tarjetas } from "./Tarjetas";
import { catalogo } from "../utils/catalogo";

export const PaginaPrivada = () => {
  return (
    <>
    <Tarjetas catalogo={catalogo}/>
    </>
  );
}
