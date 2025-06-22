'use client'

import { useState } from "react";

const faqs = [
  {
    question: "Where is your office?",
    answer: (
      <>
        <p>
          Our <span>Lagos office</span> is located at{" "}
          <i>
            A5, The Greyheights, Ope-Daniel, Taiwo Street, Ikate, Lekki, Lagos
            State.
          </i>
        </p>
        <p>
          Our <span>Abeokuta office</span> is located at{" "}
          <i>
            19A Alake Street, directly opposite the Abeokuta South Local
            Government Secretariat, Ake, Abeokuta.
          </i>
        </p>
      </>
    ),
  },
  // ... rest of the FAQs as in previous code
  {
    question: "How soon can an order be ready after we seal a deal?",
    answer: "Between a week or two (depending on the volume).",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="bg-white pb-20 min-h-screen">
      <header className="pt-20 pb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-serif">
          Frequently Asked Questions
        </h1>
      </header>
      <main>
        <div className="px-4 max-w-[700px] mx-auto">
          <ul
            aria-label="Accordion Control Group Buttons"
            className="accordion-controls flex flex-col gap-y-2"
          >
            {faqs.map(({ question, answer }, i) => {
              const isOpen = openIndex === i;
              return (
                <li
                  key={i}
                  className="bg-[#f3efea]  rounded-md p-5 faq"
                >
                  <button
                    aria-controls={`content-${i}`}
                    aria-expanded={isOpen}
                    className="flex justify-between gap-x-5 w-full font-medium font-roboto md:text-lg"
                    onClick={() => toggle(i)}
                  >
                    <span className="text-left text-black">{question}</span>
                    <span
                      className={`material-symbols-outlined block transition ease-in duration-100 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      add
                    </span>
                  </button>
                  <div
                    id={`content-${i}`}
                    aria-hidden={!isOpen}
                    className={`accordion-content mt-4 text-black faq-wrap transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {typeof answer === "string" ? <p>{answer}</p> : answer}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
