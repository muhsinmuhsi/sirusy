import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import api from '../api';

const OfferSlider = () => {
  const [bannerImage, setBannerImage] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    const fetchBannerImages = async () => {
      try {
        const res = await api.get('/bannerImage');
        setBannerImage(res.data.data); // Make sure your API returns an array of image URLs or objects with image field
      } catch (error) {
        console.error('Failed to fetch Images:', error);
      }
    };

    fetchBannerImages();
  }, []); // ✅ Empty dependency to avoid infinite re-renders

  

  return (
    <div className="max-w-full mx-auto px-5 py-4">
      <Slider {...settings}>
        {bannerImage.map((img, index) => (
          <div key={img._id || index} className="outline-none">
            <img
              src={img.image || img.url} // ✅ Adjust according to your backend response field name
              alt={`Banner ${index + 1}`}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferSlider;
