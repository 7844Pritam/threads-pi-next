'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroHeader = () => {
  return (
    <header className="mt-28 md:mt-20 relative">
      {/* Mobile Image */}
      <img
        src="https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/threads-pi-image%2Fyoung-woman-with-shopping-bags-beautiful-dress.jpg?alt=media&token=32f0b799-3261-484a-baa6-2dcf625a5d2d" alt="Grandeur Hero Mobile"
        className="xl:hidden h-[500px] object-cover sm:h-auto w-full"
      />

      {/* Desktop Image */}
      <div className="hidden xl:block w-full">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/threads-pi-image%2Fyoung-woman-with-shopping-bags-beautiful-dress.jpg?alt=media&token=32f0b799-3261-484a-baa6-2dcf625a5d2d"
          alt="Grandeur Hero Desktop"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Centered Call-to-Action */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center h-[140px] w-[140px] lg:h-[250px] lg:w-[250px] bg-black/50 backdrop-blur-md">
        <div className="text-center">
          <p className="font-roboto text-white font-medium text-base lg:text-3xl mb-2">
            Eminent Legacy
          </p>
          <div className="flex justify-center items-center">
            <Link
              href="/product/Eminent%20Legacy"
              className="text-white flex items-center gap-2 hover:underline"
            >
              <span className="md:text-lg">View</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 mt-[2px]" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
