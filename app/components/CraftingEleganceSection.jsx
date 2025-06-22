'use client'
import React from "react";

const images = [
  'https://img.freepik.com/premium-photo/cute-summer-fashion-ideas-young-girls_872233-2078.jpg?ga=GA1.1.1909098577.1746678197&w=740',
  'https://img.freepik.com/premium-photo/beautiful-elegant-sri-lankan-traditional-kandyan-bride_872233-245.jpg?ga=GA1.1.1909098577.1746678197&w=740',
  'https://img.freepik.com/free-photo/side-view-elegant-brunette-girl-looking-straight_132075-13822.jpg?ga=GA1.1.1909098577.1746678197&semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-photo/portrait-woman-standing-against-white-background_1048944-30537298.jpg?ga=GA1.1.1909098577.1746678197&semt=ais_hybrid&w=740',
  'https://img.freepik.com/free-photo/young-woman-warm-sweater_1303-17668.jpg?ga=GA1.1.1909098577.1746678197&semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-psd/premium-logo-mockup-women-clothing_1263504-53.jpg?ga=GA1.1.1909098577.1746678197&semt=ais_hybrid&w=740',
];

export default function InfiniteCarousel() {
  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * 6));
          }
        }
        .slide-track {
          animation: scroll 20s linear infinite;
        }
        // .slider:hover .slide-track {
        //   animation-play-state: paused;
        // }
        /* Gradient overlays */
        .slider::before,
        .slider::after {
          content: "";
          position: absolute;
          top: 0;
          width: 200px;
          height: 100px;
          z-index: 10;
          pointer-events: none;
         
        }
        .slider::after {
          right: 0;
          transform: rotate(180deg);
        }
        .slider::before {
          left: 0;
        }
      `}</style>

      <div
        className="slider relative  bg-white shadow-md mx-auto overflow-hidden flex items-center"
        aria-label="Infinite stitch images carousel"
        role="region"
      >
        <div className="slide-track flex w-[3000px]  slide-track">
          {[...images, ...images].map((src, i) => (
            <div key={i} className="slide flex-shrink-0 w-[300px] m-4  h-800px]">
              <img
                src={src}
                alt={`Stitch sample ${i + 1}`}
                className="w-full h-full object-contain rounded-2xl select-none pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
