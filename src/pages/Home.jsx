import React, { useEffect } from 'react'
import ImageSlider from '../components/SlideShow'
import Footer from '../components/Footer'
import image1 from '../assets/image1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CheckSquare,  LockKeyhole, Phone } from 'lucide-react';

const Home = () => {

  useEffect(()=>{
    AOS.init({
      duration:800,
      
      
    })
  },[])


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
      {
        id: 2,
        image: image1,
        alt: 'Free Shipping on Orders Over $50',
      },
    ];
  return (
    <div className='m-3'>
      {/* imageSlider */}
      <ImageSlider/>
      
      <button data-aos="fade-up" className='bg-black text-white font-serif p-2 rounded-md  m-3 mt-5'>shop now </button>
      <div className=''>
        <h1 data-aos="fade-up" className='text-3xl sm:text-5xl  font-serif font-bold mt-14 mb-5' >shop by category </h1>
        <div className='flex gap-10 overflow-x-auto scrollbar-none'>
          {
            offers.map((image)=>(
              <img data-aos="fade-up" className='w-96 h-60 object-fill border border-gray-400 rounded-sm' src={image.image} alt={image.alt} />
            ))
          }

        </div>
      </div>

      <div>
        {/* why choose us */}
        <h1 data-aos="fade-up"  className='text-2xl sm:text-3xl font-serif font-bold mt-24 mb-9 text-center'>why choose us </h1>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
  {/* Support */}
  <div data-aos="fade-up" className="border border-black rounded w-72 h-48 flex flex-col justify-around items-center p-4">
    <div data-aos="fade-up" className="bg-black rounded-full h-20 w-24 flex justify-center items-center">
      <Phone size={30} color="white" />
    </div>
    <h1 data-aos="fade-up" className="text-xl font-serif font-bold">24/7 Support</h1>
  </div>

  {/* Quality Checked */}
  <div data-aos="fade-up" className="border border-black rounded w-72 h-48 flex flex-col justify-around items-center p-4">
    <div data-aos="fade-up" className="bg-black rounded-full h-20 w-24 flex justify-center items-center">
      <CheckSquare size={30} color="white" />
    </div>
    <h1 data-aos="fade-up" className="text-xl font-serif font-bold">Quality Checked</h1>
  </div>

  {/* Secure Checkout */}
  <div data-aos="fade-up" className="border border-black rounded w-72 h-48 flex flex-col justify-around items-center p-4">
    <div data-aos="fade-up" className="bg-black rounded-full h-20 w-24 flex justify-center items-center">
      <LockKeyhole size={30} color="white" />
    </div>
    <h1 data-aos="fade-up" className="text-xl font-serif font-bold">Secure Checkout</h1>
  </div>
</div>

      </div>

      {/* email subscription */}
  <div className="flex justify-center px-4 py-8 mt-7">
  <div className="flex flex-col items-center text-center max-w-md w-full">
    <p data-aos="fade-up" className="font-serif text-lg ">Would you like to receive</p>
    <p data-aos="fade-up" className="font-bold font-serif text-2xl mb-4">Special offers by email?</p>

    <div className="relative w-full">
      <input
        data-aos="fade-up"
        type="email"
        placeholder="Enter your email"
        className="w-full rounded-full border border-black h-11 px-4 pr-28"
      />
      <button data-aos="fade-up" className="absolute right-1 top-1 bg-green-300 hover:bg-green-600 text-white rounded-full px-4 py-2 text-sm transition-colors duration-300">
        Subscribe
      </button>
    </div>
  </div>
</div>

      <Footer/>
    </div>
  )
}

export default Home