
"use client"
import React from 'react';

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  buttonText?: string;
  imageUrl?: string;
  buttonOnClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  title,
  description,
  buttonText = "Download Resume",
  imageUrl = "https://placehold.co/284x284",
  buttonOnClick
}) => {
  return (
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 py-8">
        
        {/* Image - Shows first on mobile */}
        <div className="order-1 md:order-2 relative md:w-[280px] md:h-[280px] w-48 h-48 flex-shrink-0">
          {/* Background circle */}
          <div className="absolute inset-0 bg-slate-100 rounded-full" />
          
          {/* Image with shadow and outline */}
          <div className="relative w-full h-full rounded-full shadow-lg outline outline-2 outline-offset-[-2px] outline-white overflow-hidden">
            <div className="w-full h-full overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src={imageUrl} 
                alt={name} 
              />
            </div>
          </div>
        </div>

        {/* Content - Shows second on mobile */}
        <div className="order-2 md:order-1 flex-1">
          <div className="mb-4">
            <h1 className="text-slate-800 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight sm:leading-[70px] text-center md:text-left">
              Hi, I am {name},
              <br />
              {title}
            </h1>
          </div>
          
          <div className="mb-6 sm:mb-8">
            <p className="text-slate-800 text-base sm:text-lg leading-relaxed text-center md:text-left">
              {description}
            </p>
          </div>
          
          <div className='flex flex-row justify-center md:justify-start'>
              <button
                onClick={buttonOnClick}
                className="w-48 h-12 bg-red-400 hover:bg-red-500 transition-colors rounded-sm shadow-md text-white text-base font-medium cursor-pointer"
              >
                {buttonText}
            </button>
          </div>
        
        </div>
      </div>
  );
};

export default HeroSection