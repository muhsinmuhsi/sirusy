import React from 'react'

const AboutUs = () => {
  return (
    <div>
        <div className='bg-slate-200 pb-12'>
            <div className='bg-black m-0 w-full h-40 flex justify-center '>
                <p className='text-white text-2xl font-serif font-bold mt-10'>About Us </p>
            </div>
            <div className='bg-white my-11 m-5 flex flex-col items-center p-5 rounded-xl'>
                <p className='text-center text-bold text-5xl'>____</p>

                <h1 className='font-bold pt-5  text-xl '>Who We Are </h1>
                <p className='text-wrap pt-3 p-5'>Welcome to <strong>Sirusy</strong>, your one-stop destination for everything you need!
                     We offer a wide range of products, from daily essentials to exclusive deals, all at unbeatable prices.
                      With free shipping across India and a secure payment system, including Cash on Delivery, we ensure a seamless shopping experience.
                </p>
                <p className='text-wrap p-5'>At <strong>Sirusy</strong>, we prioritize quality, affordability, and customer satisfaction. Whether you’re looking for groceries, fashion, electronics,
                     or home essentials, we’ve got it all.
                     Shop with confidence and enjoy hassle-free shopping with fast delivery and amazing discounts!
                </p>

                <p className='font-semibold'>Sirusy -,Your Smart Shopping Destination!</p>

            </div>


            
        </div>

        <div className="bg-gray-50 py-10 px-4 sm:px-8 text-center">
      {/* Header */}
      <h2 className="text-sm font-medium text-gray-600">Have any queries?</h2>
      <h1 className="text-2xl font-bold text-gray-900 mt-1">We're here to help.</h1>
      <div className="w-10 h-1 bg-black mx-auto mt-2 mb-8 rounded-full"></div>

      {/* Info Cards */}
      <div className="flex flex-col items-center gap-6 sm:gap-8">
        {/* Complaints Card */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full sm:w-[400px] text-center">
          <h3 className="text-lg font-semibold text-black">Complaints</h3>
          <p className="text-sm text-gray-600 mt-1 mb-2">
            If you need any help, please contact us
          </p>
          <p className="text-sm text-blue-600 font-medium">
            Phone: +91 -7994702022
          </p>
          <p className="text-sm text-blue-600 font-medium">
            Email: Sirusyz@gmail.com
          </p>
        </div>

        {/* Address Card */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full sm:w-[400px] text-center">
          <h3 className="text-lg font-semibold text-black">Address</h3>
          <p className="text-sm text-gray-600 mt-1 mb-2">
            Our physical office address
          </p>
          <p className="text-sm text-blue-600 font-medium">
            Calicut airport road , Kottappuram, Malappuram<br />
            Kerala, 673637
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUs