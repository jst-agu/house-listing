import React from 'react';
import { motion } from 'framer-motion';

// import images
import Image from '../assets/img/house-banner.png';
// import components
import Search from '../components/Search';

// animation variant
const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      x: direction === 'left' ? -60 : direction === 'right' ? 60 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
};

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        {/* Text Content */}
        <motion.div
          variants={fadeIn('left', 0.1)}
          initial='hidden'
          animate='show'
          className='lg:ml-8 xl:ml-[135px] flex flex-col 
          items-center text-center lg:items-start lg:text-left justify-center flex-1
          px-4 lg:px-0'
        >
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Rent </span>
            Your Dream House With Us.
          </h1>
          <p className='max-w-[480px] mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            In laoreet sed elit vestibulum mattis. <br />
            Aenean sed pellentesque metus, non porttitor lacus.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          animate='show'
          className='hidden flex-1 lg:flex justify-end items-end'
        >
          <img src={Image} alt='' />
        </motion.div>
      </div>

      {/* Search Bar - Fade Up */}
      <motion.div
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        animate='show'
      >
        <Search />
      </motion.div>
    </section>
  );
};

export default Banner;
