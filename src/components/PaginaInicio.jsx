import jarron1 from '../assets/images/jarron2.jpg';
import jarron2 from '../assets/images/jarron3.jpg';
import jarron3 from '../assets/images/jarron4.jpg';
import jarron4 from '../assets/images/jarron5.jpg';
import jarron5 from '../assets/images/jarron6.jpg';

export const PaginaInicio = () => {
  return (
    <>
    <div className="titulo1">
      <h1 className="floristeria">Floristeria Carmesí</h1>
      <div className="contenedor-images">
    <div className="slider-container">
    
    
    <img
      className="slider-item"
      src={jarron1} />

    <img
      className="slider-item"
      src={jarron2} />

    <img
      className="slider-item"
      src={jarron3} />

    <img
      className="slider-item"
      src={jarron4} />

<img
      className="slider-item"
      src={jarron5} />
      
      </div>
    </div>
    </div>

      </>
  )
}


