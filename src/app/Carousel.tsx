'use client';

import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Link from 'next/link';
import { useData } from '@/contexts/DataContext';
import WideContainer from './WideContainer';

const Carousel: React.FC = () => {
  const { carousalCollections } = useData();
  const carousalCollection = carousalCollections.find(
    (item) => item.slug === 'home-page-carousal',
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: { perView: 1 },
    defaultAnimation: { duration: 2000 },
    slideChanged: (s) => setCurrentSlide(s.track.details.rel), // Update current slide index on change
  });

  const handleDotClick = (index: number) => {
    if (instanceRef.current) {
      instanceRef.current.moveToIdx(index);
    }
  };

  useEffect(() => {
    if (instanceRef.current) {
      const sliderInstance = instanceRef.current;

      const intervalId = setInterval(() => {
        if (sliderInstance) {
          const nextIndex = (currentSlide + 1) % sliderInstance.size;
          sliderInstance.moveToIdx(nextIndex);
        }
      }, 10000); // 10 seconds interval

      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [instanceRef, currentSlide]);

  if (!carousalCollection) {
    return null;
  }

  return (
    <WideContainer>
      <div className="relative text-white">
        {/* Keen Slider Container */}
        <div ref={sliderRef} className="keen-slider">
          {carousalCollection.carousals.map((item) => (
            <div
              key={item.slug}
              className="keen-slider__slide flex items-center justify-center w-full backdrop-blur-lg"
            >
              <Image
                className="h-[240px] sm:h-[360px] object-cover lg:h-auto lg:object-fill"
                src={`https:${item.image}`}
                alt={item.title}
                width={1920}
                height={720}
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-end justify-end pb-16 text-end">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium mb-4 px-8 drop-shadow-[0_6px_6px_rgba(0,0,0,0.9)]">
                  {item.title}
                </h1>
                <p className="text-xs sm:text-sm md:text-lg mb-6 px-8 text-end drop-shadow-[0_6px_6px_rgba(0,0,0,0.9)]">
                  {item.description}
                </p>
                <div className="px-8">
                  <Link
                    href={item.buttonUrl}
                    className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 bg-white hover:bg-slate-200 text-sm sm:text-base md:text-lg text-black rounded font-normal"
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carousalCollection.carousals.map((_, index) => (
            <button
              key={index}
              className={`w-5 h-1 ${
                currentSlide === index ? 'bg-yellow-500' : 'bg-white'
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </WideContainer>
  );
};

export default Carousel;
