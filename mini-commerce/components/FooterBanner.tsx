import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface FooterBannerProps {
  discount: string;
  largeText1: string;
  largeText2: string;
  saleTime: string;
  smallText: string;
  midText: string;
  product: string;
  buttonText: string;
  imageUrl: string | StaticImageData;
  desc: string;
  onButtonClick?: () => void;
}

const FooterBanner: React.FC<FooterBannerProps> = ({
  discount,
  largeText1,
  largeText2,
  saleTime,
  smallText,
  midText,
  product,
  buttonText,
  imageUrl,
  desc,
  onButtonClick,
}) => {
  return (
    <div className="footer-banner-container relative w-full h-[400px] bg-gray-300 rounded-2xl px-10 py-24 md:px-10 md:py-24 leading-none">
      {/* Text Content */}
      <div className="banner-desc">
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right text-right">
          <p className="text-lg">{smallText}</p>
          <h3 className="text-3xl md:text-5xl mt-1">{midText}</h3>
          <p className="text-lg">{desc}</p>
          <Link href={`/product/${product}`}>
            <button
              onClick={onButtonClick}
              className="mt-10 bg-red-600 text-white px-6 py-3 rounded-2xl text-lg font-medium cursor-pointer hover:bg-red-700 transition-colors duration-300 z-[10000] relative"
              aria-label={`${buttonText} ${product}`}
            >
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
      {/* Product Image */}
      <div className="footer-banner-image absolute top-0 right-[20%] w-[250px] h-[250px]">
        <Image src={imageUrl} alt={`${product} - ${largeText1}`} width={250} height={250} className="w-full h-full object-contain" priority />
      </div>
    </div>
  );
};

export default FooterBanner;
