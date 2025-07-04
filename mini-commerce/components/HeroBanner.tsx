import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface HeroBannerProps {
  headline: string;
  subheadline: string;
  description: string;
  buttonText: string;
  imageUrl: string | StaticImageData;
  productName: string;
  onButtonClick?: () => void;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  headline,
  subheadline,
  description,
  buttonText,
  imageUrl,
  productName,
  onButtonClick,
}) => {
  return (
    <div className="hero-banner-container relative w-full h-[500px] bg-gray-300 rounded-2xl px-10 py-24 md:px-10 md:py-24 leading-none">
      {/* Text Content */}
      <div className="relative z-10">
        <p className="beats-solo text-xl">{productName}</p>
        <h3 className="text-5xl md:text-7xl mt-1">{subheadline}</h3>
        <h1 className="text-white text-8xl md:text-[10em] uppercase -ml-5 tracking-tighter">
          {headline}
        </h1>

        {/* Button */}
        <button
          onClick={onButtonClick}
          className="mt-10 bg-red-600 text-white px-6 py-3 rounded-2xl text-lg font-medium cursor-pointer 
                     hover:bg-red-700 transition-colors duration-300 z-[10000] relative"
          aria-label={`${buttonText} ${productName}`}
        >
          {buttonText}
        </button>
      </div>

      {/* Product Image */}
      <div className="hero-banner-image absolute top-0 right-[20%] w-[450px] h-[450px]">
        <Image
          src={imageUrl}
          alt={`${productName} - ${headline}`}
          width={450}
          height={450}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Description */}
      <div className="absolute right-[10%] bottom-[5%] w-[300px] leading-snug flex flex-col text-gray-700">
        <h5 className="mb-3 font-bold self-end">Description</h5>
        <p className="text-gray-500 text-right font-light">{description}</p>
      </div>
    </div>
  );
};

export default HeroBanner;