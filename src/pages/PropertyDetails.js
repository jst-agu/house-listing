import React from 'react';
import { housesData } from '../data';
import { useParams, Link } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { motion } from 'framer-motion';

const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };
};

const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find((house) => house.id === parseInt(id));

  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <motion.div
          variants={fadeIn()}
          initial='hidden'
          animate='show'
          className='flex flex-col lg:flex-row lg:items-center lg:justify-between shadow-md'
        >
          <div>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-lg mb-4'>{house.address}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
            <div className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</div>
          </div>
          <div className='text-3xl font-semibold text-violet-600'>${house.price}</div>
        </motion.div>

        <div className='flex flex-col items-start gap-8 lg:flex-row mt-8'>
          <motion.div
            className='max-w-[768px]'
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
          >
            <div className='mb-8'>
              <img src={house.imageLg} alt='' />
            </div>
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl' />
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl' />
                <div>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl' />
                <div>{house.surface}</div>
              </div>
            </div>
            <p>{house.description}</p>
          </motion.div>

          <motion.div
            className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
          >
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img src={house.agent.image} alt='' />
              </div>
              <div>
                <div className='font-bold text-lg'>{house.agent.name}</div>
                <Link to='' className='text-violet-700 text-sm'>
                  View Listing
                </Link>
              </div>
            </div>

            {/* form */}
            <form className='flex flex-col gap-y-4'>
              <input
                type='text'
                className='w-full border border-gray-300 focus:border-violet-700 outline-none rounded px-4 h-14 text-sm'
                placeholder='Name*'
              />
              <input
                type='text'
                className='w-full border border-gray-300 focus:border-violet-700 outline-none rounded px-4 h-14 text-sm'
                placeholder='Email*'
              />
              <input
                type='text'
                className='w-full border border-gray-300 focus:border-violet-700 outline-none rounded px-4 h-14 text-sm'
                placeholder='Phone'
              />
              <textarea
                className='w-full border border-gray-300 focus:border-violet-700 resize-none outline-none rounded p-4 h-36 text-sm text-gray-400'
                placeholder='Message'
                defaultValue={`I am interested in ${house.name}`}
              />
              <div className='flex gap-x-2'>
                <button className='bg-violet-700 hover:bg-violet-800 transition w-full p-4 rounded text-white text-sm'>
                  Send Message
                </button>
                <button className='border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 transition w-full p-4 rounded text-sm'>
                  Call
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
