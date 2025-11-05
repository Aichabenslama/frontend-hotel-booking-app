import { Button } from '@/components/ui/button';
import React from 'react';

const HeroSection = () => {
  return (
    <section className='relative min-h-[372px] bg-black'>
      <img className='absolute size-full z-[1] max-w[1440px] mx-auto object-cover inset-0' src="/assets/hero-image-1440.jpeg" alt="Bookin.com Hero Image" />
      <div className='z-[2] relative container space-y-2'>
        <h1 className='text-4xl mt-4 font-extrabold leading-tight text-white md:text-5xl'>Travel has never<br /> felt this cosy</h1>
        <p className='text-xl font-medium leading-sung text-white md:text-5xl'> Book an entire place all for yourself</p>
        <Button className='mt-6 h-12 PX-4 font-semibold text-base cursor-pointer' >Discover Holiday Rentals</Button>
      </div>
      
    </section>
  );
};

export default HeroSection;
