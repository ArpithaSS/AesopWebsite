import React from "react";
import { Carousel } from "react-bootstrap";

import { Button } from "react-bootstrap";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "../styles/carousel.css";


const Slider=()=> {
  return (
    <div className="carousel__component">
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.aesop.com/u1nb1km7t5q7/40xVxq4tBdXpyJLXVTQPvO/aa8ef7a4cca7a713e12b58f1ab8cc6ea/Aesop-HK-K11-Hero-Bleed-Desktop-2880x1620px.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.aesop.com/u1nb1km7t5q7/DqJCGx3tPeDqODieHw5uA/48f50fbd1758ee27990a600c131bd2ce/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.aesop.com/u1nb1km7t5q7/3b6KRiDt3QpNut8LoYGgB9/1d62a7373daa8a6ba4dff6ea300b891e/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="carousel__text">
        <h3>Store locator</h3>
        <p>
          Our consultants are available to host you in-store and provide
          tailored guidance on gift purchases.
        </p>
        <Button className="car__button" variant="outline-dark">
          <p>Fina a nearby store</p>
          <ArrowForwardIcon className="car__arrow" />
        </Button>
      </div>
    </div>
  );
}

export default Slider;