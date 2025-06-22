'use client'

import Image from 'next/image';
import { useState } from 'react';

const products = [
  {
    id: 'GT-Agb 24/010',
    href: '/product/GT-Agb%2024%2F010',
    imageSrc: 'https://ik.imagekit.io/derf9ry7bk/Grandeur/GT-Agb-24010/front.jpg',
    alt: 'GT-Agb 24/010',
  },
  {
    id: 'GT-Agb 24/011',
    href: '/product/GT-Agb%2024%2F011',
    imageSrc: 'https://ik.imagekit.io/derf9ry7bk/Grandeur/GT-Agb-24011/front.jpg',
    alt: 'GT-Agb 24/011',
  },
  {
    id: 'GT-Agb 24/012',
    href: '/product/GT-Agb%2024%2F012',
    imageSrc: 'https://ik.imagekit.io/derf9ry7bk/Grandeur/GT-Agb-24012/front.jpg',
    alt: 'GT-Agb 24/012',
  },
  {
    id: 'GT-Agb 24/013',
    href: '/product/GT-Agb%2024%2F013',
    imageSrc: 'https://ik.imagekit.io/derf9ry7bk/Grandeur/GT-Agb-24013/front.jpg',
    alt: 'GT-Agb 24/013',
  },
  {
    id: 'GT-Agb 24/014',
    href: '/product/GT-Agb%2024%2F014',
    imageSrc: 'https://ik.imagekit.io/derf9ry7bk/Grandeur/GT-Agb-24014/front.jpg',
    alt: 'GT-Agb 24/014',
  },
  {
    id: 'GT-Agb 24/015',
    href: '/product/GT-Agb%2024%2F015',
    imageSrc: 'https://ik.imagekit.io/derf9ry7bk/Grandeur/GT-Agb-24015/front.jpg',
    alt: 'GT-Agb 24/015',
  },
  {
    id: 'GT-Agb 24/016',
    href: '/product/GT-Agb%2024%2F016',
    imageSrc: 'https://ik.imagekit.io/derf9ry7bk/Grandeur/GT-Agb-24016/front.jpg',
    alt: 'GT-Agb 24/016',
  },
  {
    id: 'GT-Agb 24/017',
    href: '/product/GT-Agb%2024%2F017',
    imageSrc: 'https://ik.imagekit.io/derf9ry7bk/Grandeur/GT-Agb-24017/front.jpg',
    alt: 'GT-Agb 24/017',
  },
];

export default function ProductGrid() {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="bg-off-white pb-20">
      <header className="pt-20 pb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-serif">AGBADA</h1>
      </header>
      <main className="product-container max-w-7xl mx-auto px-4">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(({ id, href, imageSrc, alt }) => (
            <article
              key={id}
              className="product-item border rounded shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <a href={href} aria-label={`Click to see more photos of ${id}`} className="block relative w-full h-72">
                <Image
                  src={imageSrc}
                  alt={alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t"
                  priority
                />
              </a>
              <div className="px-4 mt-4 pb-4 flex flex-col items-center">
                <div className="flex justify-center items-center gap-x-3">
                  <p className="font-roboto text-lg tracking-wide">{id}</p>
                  <button
                    onClick={() => copyToClipboard(id, id)}
                    aria-label={`Copy product code ${id}`}
                    className="hover:text-gold focus:outline-none"
                  >
                    <span className="material-symbols-outlined text-[20px]">content_copy</span>
                  </button>
                  {copiedId === id && (
                    <span className="text-gold text-sm ml-2">Copied!</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
