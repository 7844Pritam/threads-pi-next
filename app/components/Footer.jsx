// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 pt-10 lg:pt-16 bg-[#dfdbd2]">
      <nav className="max-w-screen-2xl 2xl:mx-auto flex flex-wrap gap-10 justify-between">
        {/* Logo and Socials */}
        <div className="flex flex-col">
          <Link href="/">
            <span className="block w-[125px] cursor-pointer font-roboto">
              <span className="font-bold text-3xl lg:text-4xl logo">Grandeur</span>
              <span className="block logo-tailor">Tailors</span>
            </span>
          </Link>

          <div className="flex gap-x-4 mt-10">
            <a
              href="https://web.facebook.com/grandeurtailors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow grandeur on facebook"
            >
              <img
                src="/assets/icons/icons8-facebook.svg"
                alt="Facebook"
                width="30"
                height="30"
              />
            </a>
            <a
              href="https://www.instagram.com/grandeurtailors/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow grandeur on instagram"
            >
              <img
                src="/assets/icons/icons8-instagram.svg"
                alt="Instagram"
                width="30"
                height="30"
              />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="max-w-[350px] flex flex-col">
          <p className="mb-4 font-semibold">CONTACT</p>
          <div className="flex flex-col gap-y-4">
            <a
              href="https://maps.app.goo.gl/QEV6Gqbx2QFaGtXHA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-x-3 text-[15px] font-medium hover:text-gold"
            >
              <span className="material-symbols-outlined text-[18px] mt-1 block">
                location_on
              </span>
              A5, The Greyheights, Ope-Daniel, Taiwo Street, Ikate, Lekki, Lagos State.
            </a>
            <a
              href="https://maps.app.goo.gl/vUaMi1JzUHX65kKZA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-x-3 text-[15px] font-medium hover:text-gold"
            >
              <span className="material-symbols-outlined text-[18px] mt-1 block">
                location_on
              </span>
              19A, Alake Street, Opposite Abeokuta South LG Secretariat, Ake, Abeokuta, Ogun State.
            </a>
            <a
              href="mailto:grandeurtailors@gmail.com"
              className="flex gap-x-3 text-[15px] font-medium hover:text-gold"
            >
              <span className="material-symbols-outlined text-[18px] mt-1 block">mail</span>
              grandeurtailors@gmail.com
            </a>
            <a
              href="tel:07080250212"
              className="flex gap-x-3 text-[15px] font-medium hover:text-gold"
            >
              <span className="material-symbols-outlined text-[18px] mt-1 block">call</span>
              +234 708 025 0212
            </a>
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col">
          <p className="mb-4 font-semibold">PRODUCTS</p>
          <ul className="flex flex-col gap-y-3">
            <li className="font-medium">
              <Link href="/kaftans" className="hover:underline">
                Kaftans
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/agbada" className="hover:underline">
                Agbada
              </Link>
            </li>
          </ul>
        </div>

        {/* Sitemap */}
        <div className="flex flex-col">
          <p className="mb-4 font-semibold">SITEMAP</p>
          <ul className="flex flex-col gap-y-3">
            <li className="font-medium">
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <p className="text-center text-sm mt-20 py-7 border-t border-[#6c757d]">
        Grandeur Tailors © 2025 All Rights Reserved
      </p>
    </footer>
  );
}
