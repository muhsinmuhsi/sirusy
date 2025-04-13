import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/image1.jpg'

const OfferSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const offers = [
    {
      id: 1,
      image: image1,
      alt: 'Summer Sale 50% Off',
    },
    {
      id: 2,
      image: image1,
      alt: 'Free Shipping on Orders Over $50',
    },
    {
      id: 3,
      image: '/offers/new-arrivals.jpg',
      alt: 'New Arrivals - Shop Now',
    },
  ];

  return (
    <div className="max-w-full mx-auto px-5 py-4">
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} className="outline-none">
            <img 
              src={offer.image} 
              alt={offer.alt}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferSlider;