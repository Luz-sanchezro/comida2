import React, { useState, useEffect } from 'react';  
import '../App.css';  
import SrdogLogo from './Srdog.jpg';  
import './Senordog.css';  

const images = [  
  require('./comida1.jpg'),  
  require('./comida2.jpg'),  
  require('./comidas3.jpg'),  
  require('./comidas4.jpg'),  
];  

const cardData = [  
  { title: "HAMBURGUERSA", description: "Deliciosos tacos con carne asada, cebolla y cilantro." },  
  { title: "SUPER PERROS", description: "Un burrito enorme con todos los ingredientes que amas." },  
  { title: "PICADAS", description: "Hechos a mano y cargados de tu elección de carne." },  
  { title: "PATACONES", description: "Enchiladas bañadas en salsa verde y cubiertas de queso." },  
  { title: "Quesadillas", description: "Tortillas rellenas de queso y tu elección de carne." },  
  { title: "SANSWHIS", description: "Tamales auténticos rellenos de carne o frijoles." },  
];  

function Carousel() {  
  const [currentIndex, setCurrentIndex] = useState(0);  
  const imagesToShow = images.slice(0,5); // Solo mostramos las primeras 6 imágenes  
  const nextSlide = () => {  
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesToShow.length);  
  };  

  const prevSlide = () => {  
    setCurrentIndex((currentIndex - 1 + imagesToShow.length) % imagesToShow.length);  
  };  

  useEffect(() => {  
    const intervalId = setInterval(nextSlide, 1500);  
    return () => clearInterval(intervalId);  
  }, []);  

  return (  
    <div className="carousel">  
      <button className="prev" onClick={prevSlide}>❮</button>  
      <div  
        className="carousel-images"  
        style={{ transform: `translateX(-${currentIndex * (100 / imagesToShow.length)}%)` }}  
      >  
        {imagesToShow.map((src, index) => (  
          <div key={index} className="card">  
            <img  
              src={src}  
              alt={`Imagen ${index + 1}`}  
              className="carousel-image"  
            />  
          </div>  
        ))}  
      </div>  
      <button className="next" onClick={nextSlide}>❯</button>  
    </div>  
  );  
}  

function RatingSection() {  
  const [rating, setRating] = useState(0);  
  const [comment, setComment] = useState("");  

  const handleRatingChange = (value) => {  
    setRating(value);  
  };  

  const handleCommentChange = (event) => {  
    setComment(event.target.value);  
  };  

  const handleSubmit = (event) => {  
    event.preventDefault();  
    // Aquí podrías enviar la información a un servidor o procesarla  
    console.log("Rating submitted:", rating, "Comment:", comment);  
    // Reiniciar  
    setRating(0);  
    setComment("");  
  };  

  return (  
    <div className="rating-section">  
      <h3>Califícanos</h3>  
      <div className="stars">  
        {[1, 2, 3, 4, 5].map((value) => (  
          <span  
            key={value}  
            className={`star ${value <= rating ? 'filled' : ''}`}  
            onClick={() => handleRatingChange(value)}  
          >  
            ★  
          </span>  
        ))}  
      </div>  
      <form onSubmit={handleSubmit}>  
        <textarea  
          value={comment}  
          onChange={handleCommentChange}  
          placeholder="Deja tu comentario aquí"  
          rows="4"  
        />  
        <button type="submit">Enviar</button> {/* Botón “Enviar” movido aquí */}  
      </form>  
    </div>  
  );  
}  
 

function Card({ title, description }) {  
  return (  
    <div className="card-item">  
      <h3>{title}</h3>  
      <p>{description}</p>  
    </div>  
  );  
}  

function Senordog() {  
  return (  
    <div className="App">  
      <nav className="navbar">  
        <ul className="menu">  
          <li><a href="#home">Inicio</a></li>  
          <li><a href="#ver-menu">Ver Menú</a></li>  
          <li><a href="#contacto">Contacto</a></li>  
          <li><a href="#about">Acerca de</a></li>  
        </ul>  
      </nav>  
      <div className="logo-container">  
        <img src={SrdogLogo} alt="Logo" className="logo" />  
      </div>  
      <RatingSection /> {/* Añadido el apartado calificador aquí */}  
      <h2 className="carousel-title">Prueba nuestras comidas</h2>  
      <Carousel />  
      <div className="card-container">  
        {cardData.map((item, index) => (  
          <Card key={index} title={item.title} description={item.description} />  
        ))}  
      </div>  
      <footer className="footer">  
        <p>© 2023 Nombre de la Empresa</p>  
        <div className="footer-links">  
          <a href="#">Política de Privacidad</a>  
          <a href="#">Contactar</a>  
        </div>  
      </footer>  
    </div>  
  );  
}  

export default Senordog;