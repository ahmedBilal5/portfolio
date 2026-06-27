
"use client"
import React from 'react';

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  buttonText?: string;
  imageUrl?: string;
  buttonHref?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  title,
  description,
  buttonText = "Download Resume",
  imageUrl = "https://placehold.co/284x284",
  buttonHref,
}) => {
  return (
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 py-8">
        
        {/* Image - Shows first on mobile */}
        <div className="order-1 md:order-2 relative md:w-[280px] md:h-[280px] w-48 h-48 flex-shrink-0">
          {/* Background circle */}
          <div className="absolute inset-0 bg-banner rounded-full translate-x-2 translate-y-2" />
          
          {/* Image with shadow and outline */}
          <div className="relative w-full h-full rounded-full shadow-lg outline -outline-offset-2 outline-white overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src={imageUrl} 
                alt={name} 
              />
          </div>
        </div>

        {/* Content - Shows second on mobile */}
        <div className="order-2 md:order-1 flex-1">
          <div className="mb-4">
            <h1 className="dark:text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight sm:leading-[70px] text-center md:text-left">
              Salam 🤲, I am {name},
              <br />
              {title}
            </h1>
          </div>
          
          <div className="mb-6 sm:mb-8">
            <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
              {description}
            </p>
          </div>
          
          <div className='flex flex-row justify-center md:justify-start'>
              <a
                href={buttonHref}
                download
                className="w-48 h-12 bg-red-400 hover:bg-red-500 transition-colors rounded-sm shadow-md text-white dark:text-black text-base font-medium cursor-pointer flex items-center justify-center"
              >
                {buttonText}
              </a>
          </div>
        
        </div>
      </div>
  );
};

export default HeroSection