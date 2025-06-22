// components/ProductSection.jsx
import ProductCard from './ProductCard';

export default function ProductSection({ title, products, seeMoreHref }) {
  return (
    <section className="bg-[#fdfaf6] px-4 py-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-12">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <a
          href={seeMoreHref}
          className="bg-yellow-600 text-white py-3 px-10 hover:scale-95 transition-transform"
        >
          See More {title}
        </a>
      </div>
    </section>
  );
}
