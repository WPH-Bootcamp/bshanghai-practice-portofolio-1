import Image from 'next/image';

import { Marquee } from '@/components/marquee';

import { trustedCompaniesData } from '@/constants/trustedCompaniesData';

const TrustedBy = () => {
  return (
    <div className='mt-6.5 md:mt-20'>
      <h3 className='text-md text-neutral-25 text-center font-semibold md:text-xl'>
        Trusted by Leading Companies Worldwide
      </h3>

      <CompaniesMarquee />
    </div>
  );
};

export default TrustedBy;

const CompaniesMarquee = () => {
  return (
    <div className='custom-container relative flex h-28.5 items-center md:h-50'>
      <div className='w-full overflow-hidden mix-blend-luminosity'>
        <Marquee className='py-4'>
          {trustedCompaniesData.map((data) => (
            <Image
              key={data.alt}
              src={data.src}
              alt={data.alt}
              className='h-full object-contain select-none'
              style={{
                height: 'clamp(2.13rem, 3.97vw, 3rem)',
              }}
            />
          ))}
        </Marquee>
      </div>
      <div className='from-base-background absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r to-transparent' />
      <div className='from-base-background absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l to-transparent' />
    </div>
  );
};
