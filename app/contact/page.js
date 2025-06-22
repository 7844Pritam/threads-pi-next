

import React from "react";

export default function ContactAndFooter() {
  return (
    <div className="mt-[5rem]">
      <main className="bg-off-white min-h-screen contact-us">
        <div className="lg:grid grid-cols-2 max-w-[1100px] mx-auto">
          {/* Left image side */}
          <div className="contact-image-wrap">
            <img
              alt="Office"
              src="https://ik.imagekit.io/derf9ry7bk/Grandeur/Photos/contact/office-photo.png"
              className="rounded-t-[25px] lg:rounded-l-[25px] lg:rounded-tr-none"
            />
          </div>

          {/* Right contact content side */}
          <div className="lg:flex items-center bg-[#f3eee8] px-5 py-10 sm:px-10 lg:py-0 rounded-b-[25px] lg:rounded-r-[25px] lg:rounded-bl-none contact-container">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium font-roboto">
                Get in touch
              </h1>
              <p className="pt-2 md:pt-4 pb-7 md:pb-10 font-poppins leading-7 text-[15px]">
                Have a question? Our team is always ready to help. Feel free
                reach us anytime, we&apos;ll be glad to have you in our atelier.
              </p>

              {/* Email */}
              <div className="flex items-center gap-1 sm:gap-2 mt-1 mb-7">
                <p className="flex items-center gap-x-1">
                  <span className="material-symbols-outlined text-[18px]">
                    mail
                  </span>
                  Email:
                </p>
                <a
                  href="mailto:grandeurtailors@gmail.com"
                  className="text-[15px] font-medium text-gold-2"
                >
                  grandeurtailors@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-1 sm:gap-2 mt-1 mb-7">
                <p className="flex items-center gap-x-1">
                  <span className="material-symbols-outlined text-[18px]">
                    call
                  </span>
                  Phone Number:
                </p>
                <a
                  href="tel:07080250212"
                  className="text-[15px] font-medium text-gold-2"
                >
                  +234 708 025 0212
                </a>
              </div>

              {/* Addresses */}
              <p className="flex items-center gap-x-1 mb-[6px]">
                <span className="material-symbols-outlined text-[18px]">
                  location_on
                </span>
                Office Address:
              </p>
              <div className="flex flex-col gap-x-4 ml-5">
                <address className="not-italic mb-4">
                  <a
                    href="https://maps.app.goo.gl/QEV6Gqbx2QFaGtXHA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] leading-7 font-medium text-gold-2 list-item"
                  >
                    A5, The Greyheights, Ope-Daniel, Taiwo Street, Ikate,
                    Lekki, Lagos State.
                  </a>
                </address>
                <address className="not-italic mb-4">
                  <a
                    href="https://maps.app.goo.gl/vUaMi1JzUHX65kKZA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] leading-7 font-medium text-gold-2 list-item"
                  >
                    19A, Alake Street, Opposite Abeokuta South LG Secretariat,
                    Ake, Abeokuta, Ogun State.
                  </a>
                </address>
              </div>

              {/* Social icons */}
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
          </div>
        </div>
      </main>

      {/* Footer */}

    </div>
  );
}
