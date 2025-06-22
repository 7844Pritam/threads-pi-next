import Image from "next/image";

export default function ProductDetail() {
  const productImages = [
    "https://ik.imagekit.io/derf9ry7bk/Grandeur/GT-Agb-24010/front.jpg",
    "https://ik.imagekit.io/derf9ry7bk/Grandeur/GT-Agb-24010/01.jpg",
    "https://ik.imagekit.io/derf9ry7bk/Grandeur/GT-Agb-24010/02.jpg",
    "https://ik.imagekit.io/derf9ry7bk/Grandeur/GT-Agb-24010/03.jpg",
  ];

  return (
    <div className="bg-off-white pt-14 pb-20 min-h-screen">
      <div className="product-wrapper flex flex-col lg:flex-row gap-x-8">
        {/* Images column */}
        <div className="lg:w-[50%] flex flex-col gap-y-4">
          {productImages.map((src, i) => (
            <div key={i} className="w-full aspect-[2/3] relative">
              <Image
                src={src}
                alt={`Product image ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Details column */}
        <div className="lg:w-[40%]">
          <div className="md:sticky top-[236px]">
            <div className="flex gap-x-2 items-center mt-10">
              <h1 className="font-roboto text-2xl md:text-3xl xl:text-4xl font-medium">
                GT-Agb 24/010
              </h1>
              <button className="hover:text-gold">
                <span className="material-symbols-outlined text-[20px]">
                  content_copy
                </span>
              </button>
              <button className="hover:text-gold flex items-baseline relative -top-1">
                <Image
                  src="/assets/icons/icons8-favorite.png"
                  alt="Favorite icon"
                  width={22}
                  height={22}
                />
              </button>
            </div>

            <p className="text-sm md:text-[15px] leading-7 font-poppins opacity-70 mt-2 mb-4">
              Black Agbada, made of high quality fabric, adorned with embroidery
              design.
            </p>

            <p className="font-roboto font-semibold py-4 lg:py-8 lg:text-lg">
              ₦430,000.00
            </p>

            <div className="border-b border-gray-400"></div>

            <div className="flex-center mt-6">
              <a
                href="https://wa.me/23407080250212?text=Hello%2C%20I%20will%20like%20to%20get%20the%20GT-Agb%2024%2F010."
                className="product-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                CHAT TAILOR
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
