import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-off-white">
      <header className="about-banner bg-[#7F563F]">
        <div className="relative py-16 xl:py-24">
          <img
            src="/assets/images/about/bg-circle-200.svg"
            alt=""
            className="top-0 left-0"
          />
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-center font-medium font-roboto">
            About Us
          </h1>
          <p>
            Founded in 2017 and based in Abeokuta, Nigeria, Grandeur Tailors is
            a custom tailor shop with a strong commitment and dedication to
            excellence.
          </p>
          <img
            src="/assets/images/about/bg-circle-200.svg"
            alt=""
            className="bottom-0 right-0 rotate-180"
          />
        </div>
      </header>

      <main className="px-4 max-w-[1500px] mx-auto pt-20 pb-16">
        <p className="founded">
          We believe there is nothing better than a tailor-made outfit, and our
          mission is to give that to everyone who wants it. We've been crafting
          native wears for Nigerian men for over 10 years.
        </p>

        <div className="flex flex-col gap-y-10 xl:gap-y-32">
          {/* Section 1 */}
          <section className="flex flex-col lg:flex-row justify-between items-end gap-6 xl:gap-40">
            <img
              alt=""
              src="https://ik.imagekit.io/derf9ry7bk/Grandeur/Photos/about/purple-kaftan.jpg"
              className="lg:w-[45%] aspect-[251/376]"
            />
            <div>
              <p className="font-medium font-roboto text-lg lg:text-2xl xl:text-3xl tracking-tight mb-3 lg:mb-5">
                OUR IDEAL CLIENTS ARE MEN WHO REALLY CARE ABOUT WEARING QUALITY.
              </p>
              <p className="font-poppins text-sm md:text-base md:leading-7 opacity-85 leading-[1.6rem]">
                We cater for native wears that makes everyone feel confident, by
                choosing designs and styles that fit them. We strive to meet the
                personal needs of every client that does business with us.
              </p>
              <div className="grid grid-cols-2 gap-x-3 mt-8 xl:mt-20">
                <img
                  alt=""
                  src="https://ik.imagekit.io/derf9ry7bk/Grandeur/Photos/about/wine-check-kaftan.PNG"
                  className="aspect-[4/5]"
                />
                <img
                  alt=""
                  src="https://ik.imagekit.io/derf9ry7bk/Grandeur/Photos/about/blue-check-kaftan.JPG"
                  className="aspect-[4/5]"
                />
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="flex flex-col lg:flex-row-reverse justify-between items-end gap-6 xl:gap-40">
            <img
              alt=""
              src="https://ik.imagekit.io/derf9ry7bk/Grandeur/Photos/about/long-teal-kaftan.jpg"
              className="lg:w-[45%] aspect-[251/376]"
            />
            <div>
              <p className="font-medium font-roboto text-lg lg:text-2xl xl:text-3xl tracking-tight mb-3 lg:mb-5 uppercase">
                Affordable and durable high quality products.
              </p>
              <p className="font-poppins text-sm md:text-base md:leading-7 opacity-85 leading-[1.6rem]">
                We deliver high quality products that are affordable, yet made of
                durable materials.With our custom-made clothing, our clients will
                be able to find their desired fabrics, colours, and styles. We
                personally hand-stitch every article of clothing and focus on
                providing a high level of customer service, which leads to
                customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-x-3 mt-8 xl:mt-20">
                <img
                  alt=""
                  src="https://ik.imagekit.io/derf9ry7bk/Grandeur/Photos/about/packaged-cloth-3.jpeg"
                  className="aspect-[4/5]"
                />
                <img
                  alt=""
                  src="https://ik.imagekit.io/derf9ry7bk/Grandeur/Photos/about/packaged-cloth-4.jpeg"
                  className="aspect-[4/5]"
                />
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="flex flex-col lg:flex-row justify-between items-end gap-6 xl:gap-40">
            <img
              alt=""
              src="https://ik.imagekit.io/derf9ry7bk/Grandeur/Photos/about/blue-agbada.jpg"
              className="lg:w-[45%] aspect-[251/376]"
            />
            <div>
              <p className="font-medium font-roboto text-lg lg:text-2xl xl:text-3xl tracking-tight mb-3 lg:mb-5 uppercase">
                Varieties of styles that boost your confidence.
              </p>
              <p className="font-poppins text-sm md:text-base md:leading-7 opacity-85 leading-[1.6rem]">
                And we have a good number of style options available, making it
                easy for clients to pick their choices or specify any
                modifications they want. We are eager to answer any questions you
                may have over the phone or via Whatsapp. We look forward to
                working with you to provide high quality men's clothing that will
                deliver self-confidence and help you look your very best.
              </p>
              <div className="grid grid-cols-2 gap-x-3 mt-8 xl:mt-20">
                <img
                  alt=""
                  src="https://ik.imagekit.io/derf9ry7bk/Grandeur/Photos/about/packaged-cloth.jpeg"
                  className="aspect-[4/5]"
                />
                <img
                  alt=""
                  src="https://ik.imagekit.io/derf9ry7bk/Grandeur/Photos/about/packaged-cloth-2.jpeg"
                  className="aspect-[4/5]"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
