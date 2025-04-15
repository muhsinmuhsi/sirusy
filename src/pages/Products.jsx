import React, { useEffect } from 'react'
import image1 from '../assets/image1.jpg'
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {
    const navigate=useNavigate()

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
            image: image1,
            alt: 'New Arrivals - Shop Now',
          },
          {
            id: 2,
            image: image1,
            alt: 'Free Shipping on Orders Over $50',
          },
        ];
  return (
    <div className='p-2'>
        <div>
            <h1 data-aos="fade-up" className='text-xl font-serif font-bold mt-6'>Products</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-5'>

                {
                    offers.map((data)=>(
                        <div 
                        data-aos="fade-up"
                         onClick={()=>navigate(`/product/${data.id}`)}
                        className='shadow-md w-44 h-80 p-3 rounded flex flex-col justify-between'>
                             
                             {/* upper part */}

                            <div className='flex justify-center border rounded'>
                                <img className='rounded h-44 object-fill ' src={data.image}/>
                            </div>

                            {/* down part */}
                            
                            <div className=' flex flex-col items-center'>
                            <h1 data-aos="fade-up">{data.alt}</h1>
                            
                            <button className='border border-black  px-2 p-1 rounded-lg hover:p-3 transition-all mt-4'>Buy now</button>
                            </div>
                            
                        </div>

                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Products