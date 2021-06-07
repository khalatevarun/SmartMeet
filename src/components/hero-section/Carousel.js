import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './Carousel.css';
import { categories } from '../../data/data';

const handleDragStart = (e) => e.preventDefault();

const Carousel = () => {
  const items = categories?.map((c) => (
    <div className="Type">
      <img
        src={c.img}
        alt={c.name}
        onDragStat={handleDragStart}
        className="carouselItem_img"
      />
      <div className="carouselItem_txt">{c.name}</div>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
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
