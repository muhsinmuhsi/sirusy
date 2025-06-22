import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/SlideShow'
import Footer from '../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CheckSquare,  LockKeyhole, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import beauty from '../assets/beautyandPersonalcare.jpg'
import Kitchen from '../assets/KitchenImage.jpg'
import Health from '../assets/fitnessImage.jpg'
import Fashion from '../assets/Fashion.jpg'
import Electronics from '../assets/GAdgetsImage.jpeg'
import Hobbies from '../assets/HobbiesImages.jpg'
import Mens from '../assets/Mens.jpg'
import Women from '../assets/girlsImage.jpg'
import Kids from '../assets/KidsImages.jpg'


const dummyCategories = [
  {
    _id: '1',
    category: 'Beauty & Personal Care',
    image: beauty,
    alt: ' Beauty & Personal Care ',
  },
  {
    _id: '2',
    category: 'Home & Kitchen',
    image: Kitchen,
    alt: ' Home & Kitchen',
  },
  {
    _id: '3',
    category: 'Health & Fitness',
    image: Health,
    alt: 'Health & Fitness',
  },
  {
    _id: '4',
    category: 'Fashion & Lifestyle',
    image: Fashion,
    alt: 'Fashion & Lifestyle',
  },
  {
    _id: '5',
    category: 'Electronics & Accessories',
    image: Electronics,
    alt: 'Electronics & Accessories',
  },
  {
    _id: '6',
    category: 'Hobbies & Essentials',
    image: Hobbies,
    alt: 'Hobbies & Essentials',
  },
  {
    _id: '7',
    category: "Men's",
    image: Mens,
    alt: "Men's",
  },
  {
    _id: '8',
    category: "Women's",
    image: Women,
    alt: "Women's",
  },
  {
    _id: '9',
    category: "Kid's",
    image: Kids,
    alt: "Kid's",
  },
];
  

const Home = () => {
  const [categories, setCategories] = useState([])
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate()

  const visibleCategories = showAll ? categories : categories.slice(0, 4);

  useEffect(() => {
    AOS.init({ duration: 800 })
    setCategories(dummyCategories)
  }, []);

  return (
    <div className='m-3'>
      <ImageSlider />

      <button
        data-aos="fade-up"
        onClick={() => navigate('/products')}
        className='bg-black text-white font-serif p-2 rounded-md m-3 mt-5'>
        Shop Now
      </button>

      <h1 className='font-serif text-xl p-2 my-5'>Sirusy brings the world of quality shopping to your fingertips </h1>

      <div>
        <h1 data-aos="fade-up" className='text-3xl sm:text-5xl font-serif font-bold mt-14 mb-5'>
          Shop by Category
        </h1>

        <div className="px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleCategories.map((cat) => (
          <div
            key={cat._id}
            data-aos="fade-up"
            onClick={() => navigate(`/product/category/${cat.category}`)}
            className="relative cursor-pointer rounded-md overflow-hidden group"
            style={{ aspectRatio: '2/3' }} // taller image
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.alt || cat.category}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-lg sm:text-xl font-semibold font-serif text-center px-2">
                {cat.category}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {categories.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>
      )}
    </div>

      </div>


      <div>
  {/* Why Choose Us */}
  <h1
    data-aos="fade-up"
    className="text-2xl sm:text-3xl font-serif font-bold mt-24 mb-9 text-center"
  >
    Why Choose Us
  </h1>

  <div className="grid grid-cols-3 gap-4 sm:gap-8 justify-items-center">
    {/* Support */}
    <div
      data-aos="fade-up"
      className="bg-white border rounded-2xl shadow-md w-28 h-32 sm:w-36 sm:h-36 flex flex-col justify-center items-center hover:shadow-xl transition duration-300 ease-in-out"
    >
      <div className="bg-gray-200 rounded-full h-12 w-12 flex justify-center items-center mb-2">
        <Phone size={22} />
      </div>
      <h2 className="text-xs font-serif font-semibold text-center">24/7 Support</h2>
    </div>

    {/* Quality Checked */}
    <div
      data-aos="fade-up"
      className="bg-white border rounded-2xl shadow-md w-28 h-32 sm:w-36 sm:h-36 flex flex-col justify-center items-center hover:shadow-xl transition duration-300 ease-in-out"
    >
      <div className="bg-gray-200 rounded-full h-12 w-12 flex justify-center items-center mb-2">
        <CheckSquare size={22} />
      </div>
      <h2 className="text-xs font-serif font-semibold text-center">Quality Checked</h2>
    </div>

    {/* Secure Checkout */}
    <div
      data-aos="fade-up"
      className="bg-white border rounded-2xl shadow-md w-28 h-32 sm:w-36 sm:h-36 flex flex-col justify-center items-center hover:shadow-xl transition duration-300 ease-in-out"
    >
      <div className="bg-gray-200 rounded-full h-12 w-12 flex justify-center items-center mb-2">
        <LockKeyhole size={22} />
      </div>
      <h2 className="text-xs font-serif font-semibold text-center">Secure Checkout</h2>
    </div>
  </div>
</div>


      <Footer/>
    </div>
  )
}

export default Home