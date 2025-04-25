import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/SlideShow'
import Footer from '../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CheckSquare,  LockKeyhole, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Home = () => {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({ duration: 800 })

    // Fetch categories from backend
    const fetchCategories = async () => {
      try {
        const res = await api.get('/category') 
        setCategories(res.data.data)
      } catch (error) {
        console.error('Failed to fetch categories:', error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className='m-3'>
      <ImageSlider />

      <button
        data-aos="fade-up"
        onClick={() => navigate('/products')}
        className='bg-black text-white font-serif p-2 rounded-md m-3 mt-5'>
        Shop Now
      </button>

      <div>
        <h1 data-aos="fade-up" className='text-3xl sm:text-5xl font-serif font-bold mt-14 mb-5'>
          Shop by Category
        </h1>

        <div className='flex gap-5 overflow-x-auto scrollbar-none'>
  {categories?.map((cat) => (
    <div
      key={cat._id}
      data-aos="fade-up"
      onClick={() => navigate(`/products/${cat.category}`)}
      className="relative w-80 h-52 flex-shrink-0 cursor-pointer rounded-md overflow-hidden group"
    >
      {/* Image */}
      <img
        src={cat.image}
        alt={cat.alt || cat.category}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-white text-2xl font-semibold font-serif">{cat.category}</h2>
      </div>
    </div>
  ))}
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
      <button data-aos="fade-up" className="absolute right-1 top-1 bg-black hover:bg-gray-600 text-white rounded-full px-4 py-2 text-sm transition-colors duration-300">
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