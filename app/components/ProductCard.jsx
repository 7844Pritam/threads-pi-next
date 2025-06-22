// components/ProductCard.jsx
'use client';
import { Copy, Heart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductCard({ name, image, price, link, whatsapp }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(name);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="w-full max-w-xs">
      <Link href={link} aria-label={`Click to see more photos of ${name}`}>
        <img src={image} alt={name} className="w-full aspect-[3/4] object-cover rounded" />
      </Link>
      <div className="px-4 mt-4">
        <div className="flex justify-center items-baseline gap-x-3">
          <p className="font-roboto text-center text-base lg:text-lg tracking-wide">{name}</p>
          <button onClick={handleCopy} className="hover:text-yellow-600 text-gray-600">
            <Copy size={18} />
          </button>
          <button className="hover:text-yellow-600 text-gray-600">
            <Heart size={18} />
          </button>
        </div>
        <p className="font-roboto font-bold text-center text-sm my-2">{price}</p>
        <div className="flex justify-center">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-600 text-white px-6 py-2 text-sm rounded hover:bg-yellow-700 transition"
          >
            CHAT TAILOR
          </a>
        </div>
      </div>
    </div>
  );
}
