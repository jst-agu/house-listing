import React from 'react';
import { motion } from 'framer-motion';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  const {
    image,
    type,
    country,
    address,
    bedrooms,
    bathrooms,
    surface,
    price,
  } = house;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      className='bg-white shadow-1 p-5 rounded-lg
        rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer
        hover:shadow-2xl transition'
    >
      <img className='mb-8' src={image} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 text-white px-3 rounded-full'>
          {type}
        </div>
        <div className='bg-violet-500 text-white px-3 rounded-full'>
          {country}
        </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>
        {address}
      </div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px]'>
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px]'>
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px]'>
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4'>
        {price}
      </div>
    </motion.div>
  );
};

export default House;
