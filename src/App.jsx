import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navegacion } from "./components/Navegacion";
import { PaginaInicio } from "./components/PaginaInicio";
import { PaginaAcerca } from "./components/PaginaAcerca";
import { PaginaProductos } from "./components/PaginaProductos";
import { PaginaRegistro } from "./components/PaginaRegistro";
import { PaginaNoEncontrada } from "./components/PaginaNoEncontrada";
import { PaginaPrivada } from "./components/PaginaPrivada";

function App() {

  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path='/' element={<PaginaInicio />} />
        <Route path='/acerca-de' element={<PaginaAcerca />} />
        <Route path='/productos' element={<PaginaProductos />} />
        <Route path='/registro' element={<PaginaRegistro />} />
        <Route path='/privada' element={<PaginaPrivada />} />
        <Route path='*' element={<PaginaNoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
