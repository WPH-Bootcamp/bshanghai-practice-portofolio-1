// import { Icon } from '@iconify/react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import FeatureCard from '@/components/feature-card';
import { Button } from '@/components/ui/button';
import SkewMotion from '@/components/ui/skew-motion';

const Hero = () => {
  return (
    <section
      className='custom-container flex flex-wrap items-center gap-7 overflow-hidden pt-28 md:gap-10 md:pt-37'
      id='hero'
    >
      {/* kiri */}
      <div className='flex-[5.3] basis-80'>
        <h1 className='text-display-lg md:text-display-2xl text-neutral-25 font-bold'>
          Your Trusted IT
          <span className='text-primary-300'>Partner for Digital</span> Success
        </h1>
        <p className='font-regular md:text-md mt-3 text-sm text-neutral-400'>
          We craft custom IT solutions that align with your goals, ensuring
          efficiency, security, and innovation
        </p>

        <Button asChild className='mt-6 w-full md:mt-12 md:w-fit'>
          <Link href='#contact'>Get Started</Link>
        </Button>
      </div>

      {/* kanan */}
      <div
        className='relative flex-[4.7] basis-80'
        style={{ height: 'clamp(21.25rem, 52.73vw, 39.81rem)' }}
      >
        <SkewMotion asChild>
          <Image
            src='/images/hero-image.png'
            fill
            alt='hero-image'
            className='object-contain'
          />
        </SkewMotion>
        <FeatureCard
          icon={<Icon icon='mingcute:flash-fill' />}
          title='Elite Solutions'
          description='Cutting-edge tech, flawless execution'
          animationDelay={0.2}
          className='absolute top-[10%] right-1/2 -translate-x-[6.25%]'
        />
        <FeatureCard
          icon={<Icon icon='bi:bar-chart-fill' />}
          title='Smart Tech'
          description='Innovation that drives real growth.'
          animationDelay={0.2}
          className='absolute top-[49%] right-1/2 -translate-x-[48%]'
        />
        <FeatureCard
          icon={<Icon icon='mingcute:flash-fill' />}
          title='Elite Solutions'
          description='Cutting-edge tech, flawless execution'
          animationDelay={0.2}
          className='absolute top-[43%] left-1/2 translate-x-[37.5%]'
        />

        <div className='from-base-background absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t to-transparent' />
      </div>
    </section>
  );
};
export default Hero;
