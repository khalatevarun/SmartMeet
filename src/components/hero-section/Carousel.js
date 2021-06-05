import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './Carousel.css';
import dentist from '../../images/dentist.png';
import cardiologist from '../../images/cardiologist.png';
import pulmonologist from '../../images/pulomono.png';
import gastroenterologist from '../../images/stomach.png';
import nephrologist from '../../images/kidneys.png';
import orthopedic from '../../images/knee.png';

const handleDragStart = (e) => e.preventDefault();

const Carousel = () => {
  const categories = [
    { img: dentist, name: 'Dentist' },
    { img: cardiologist, name: 'Cardiologist' },
    { img: pulmonologist, name: 'Pulmonologist' },
    { img: orthopedic, name: 'Orthopedic' },
    { img: gastroenterologist, name: 'Gastroenterologist' },
    { img: nephrologist, name: 'Nephrologist' },
  ];
  const items = categories?.map((c) => (
    <div className="Type">
      <img
        src={c.img}
        alt={c.name}
        onDragStat={handleDragStart}
        className="carouselItem_img"
      />
      <p className="carouselItem_txt">{c?.name}</p>
    </div>
  ));

  const responsive = {
    0: {
      items: 4,
    },

    1024: {
      items: 6,
    },
  };

  return (
    <div className="Categories">
      <AliceCarousel
        responsive={responsive}
        disableDotsControls
        mouseTracking
        items={items}
      />
    </div>
  );
};

export default Carousel;
