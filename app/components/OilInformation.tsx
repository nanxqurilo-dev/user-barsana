"use client";

import { useState } from "react";
import Image from "next/image";

const topics = [
  {
    id: "about",
    label: "About Barsana Kachi Ghani Oil",
    eyebrow: "Pure by tradition",
    title: "Mustard oil with an honest, familiar character.",
    paragraphs: [
      "Barsana Kachi Ghani Mustard Oil is created for families who value traditional flavour and straightforward ingredients. Carefully chosen mustard seeds give the oil its naturally golden colour, lively aroma, and distinctive taste.",
      "Every bottle is made to bring the warmth of a familiar Indian kitchen into everyday meals—whether it is a simple dal tadka, seasonal sabzi, a family recipe, or a carefully prepared pickle.",
    ],
    points: ["Made only from selected mustard seeds", "Naturally bold aroma and flavour", "Suitable for everyday Indian cooking"],
  },
  {
    id: "method",
    label: "Traditional Kachi Ghani Method",
    eyebrow: "Slow and considered",
    title: "Pressed patiently to retain the seed’s true personality.",
    paragraphs: [
      "Our mustard seeds are mechanically pressed in small batches using the traditional Kachi Ghani approach. The slower process avoids unnecessary harsh treatment and allows the oil to keep its characteristic colour and pungency.",
      "After pressing, the oil is given time to settle before it is packed with care. This simple process respects both the ingredient and the cooking traditions it belongs to.",
    ],
    points: ["Small-batch wood pressing", "No chemical refining", "Carefully settled and freshly packed"],
  },
  {
    id: "why",
    label: "Why Choose Barsana?",
    eyebrow: "A dependable kitchen essential",
    title: "Purity you can recognise from the first aroma.",
    paragraphs: [
      "Barsana keeps the recipe refreshingly simple: mustard seeds, thoughtful pressing, and careful packing. There are no added colours, artificial flavours, or preservatives competing with the natural character of the oil.",
      "The result is a versatile cooking oil with the strength to season traditional dishes and the consistency families need for daily cooking.",
    ],
    points: ["One clear, honest ingredient", "No added colour or artificial flavour", "Available in practical 1L and 5L sizes"],
  },
  {
    id: "ingredients",
    label: "Ingredients & Natural Goodness",
    eyebrow: "Nothing unnecessary",
    title: "One ingredient. Naturally full of character.",
    paragraphs: [
      "The ingredient list contains only 100% Kachi Ghani mustard oil made from selected mustard seeds. Its deep golden appearance and pronounced aroma come naturally from the seeds and the pressing method.",
      "Because the oil is unrefined, minor natural variation between batches may occur. We see this as part of an honestly made agricultural product rather than something to hide.",
    ],
    points: ["100% mustard oil", "Naturally occurring colour and aroma", "Unrefined and preservative-free"],
  },
  {
    id: "use",
    label: "How to Use",
    eyebrow: "Made for Indian kitchens",
    title: "A bold finishing note for everyday family recipes.",
    paragraphs: [
      "Use Barsana for tadka, sautéing, curries, vegetables, parathas, marinades, frying, and homemade pickles. For cooked dishes, warm the oil appropriately so its natural pungency mellows and blends beautifully with spices.",
      "Store the closed bottle in a cool, dry place away from direct sunlight. Always use a clean, dry spoon or pouring surface and close the cap firmly after use.",
    ],
    points: ["Excellent for tadka and sabzi", "Traditional choice for pickling", "Store away from heat, light, and moisture"],
  },
];

export default function OilInformation() {
  const [activeTopic, setActiveTopic] = useState(topics[0].id);
  const active = topics.find((topic) => topic.id === activeTopic) ?? topics[0];

  return (
    <section
      className="relative overflow-hidden bg-[#e4b528] px-[6%] py-24 text-[#1d3b20] max-sm:px-3.5 max-sm:pb-16 max-sm:pt-32"
      aria-labelledby="oil-information-title"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:radial-gradient(#624b13_0.7px,transparent_0.7px)] [background-size:9px_9px]" />

      <Image
        className="pointer-events-none absolute -left-10 -top-3 z-[1] h-auto w-[650px] select-none drop-shadow-[0_10px_9px_rgba(73,51,13,0.13)] max-lg:w-[470px] max-md:-left-20 max-md:w-[360px] max-sm:-left-20 max-sm:top-1 max-sm:w-[290px]"
        src="/image/oil-info-branch.png"
        alt=""
        width={1983}
        height={793}
        aria-hidden="true"
      />

      <svg
        className="hidden"
        viewBox="0 0 620 230"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="branchWood" x1="26" y1="190" x2="555" y2="55" gradientUnits="userSpaceOnUse">
            <stop stopColor="#b7803e" /><stop offset=".45" stopColor="#8d5b28" /><stop offset="1" stopColor="#61401e" />
          </linearGradient>
          <linearGradient id="leafGreen" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#4f8736" /><stop offset="1" stopColor="#1e5b2a" />
          </linearGradient>
        </defs>
        <path d="M-35 221C60 178 91 145 150 158c77 18 101-3 159-37 73-43 136-29 208-86" stroke="url(#branchWood)" strokeWidth="24" strokeLinecap="round" />
        <path d="M-30 211C67 174 99 144 151 153c75 13 99-8 155-39 78-43 137-30 207-84" stroke="#d4a259" strokeWidth="5" strokeLinecap="round" opacity=".55" />
        <path d="M72 179c7-38 4-64-8-92M157 155c-6-43 2-80 24-111M237 145c18-43 19-76 10-111M315 115c-2-34 10-63 39-89M399 91c19-30 39-50 70-65" stroke="#70481f" strokeWidth="7" strokeLinecap="round" />
        <path d="M65 111C42 91 39 70 58 57c22 19 26 37 7 54Z" fill="url(#leafGreen)" /><path d="M66 108 56 66" stroke="#9ac26b" strokeWidth="2" />
        <path d="M84 138c25-19 47-17 57 5-23 17-43 17-57-5Z" fill="url(#leafGreen)" /><path d="m90 137 41 5" stroke="#9ac26b" strokeWidth="2" />
        <path d="M172 75c-19-29-13-52 10-59 17 26 12 46-10 59Z" fill="url(#leafGreen)" /><path d="m174 68 6-43" stroke="#9ac26b" strokeWidth="2" />
        <path d="M151 117c-30-4-44-19-35-40 27 4 40 17 35 40Z" fill="url(#leafGreen)" /><path d="m145 111-24-28" stroke="#9ac26b" strokeWidth="2" />
        <path d="M250 61c-22-25-19-49 2-58 20 23 18 44-2 58Z" fill="url(#leafGreen)" /><path d="m250 54 2-43" stroke="#9ac26b" strokeWidth="2" />
        <path d="M270 107c26-22 49-20 60 1-24 20-45 21-60-1Z" fill="url(#leafGreen)" /><path d="m278 105 43 3" stroke="#9ac26b" strokeWidth="2" />
        <path d="M354 55c-10-31 2-52 25-51 9 29-1 47-25 51Z" fill="url(#leafGreen)" /><path d="m358 49 17-38" stroke="#9ac26b" strokeWidth="2" />
        <path d="M386 83c26-24 49-24 62-3-24 22-45 24-62 3Z" fill="url(#leafGreen)" /><path d="m394 81 45-1" stroke="#9ac26b" strokeWidth="2" />
        <path d="M465 43c5-29 22-42 42-31-5 27-19 39-42 31Z" fill="url(#leafGreen)" /><path d="m471 40 29-24" stroke="#9ac26b" strokeWidth="2" />
        <circle cx="63" cy="112" r="4" fill="#d6a34f" /><circle cx="174" cy="76" r="4" fill="#d6a34f" /><circle cx="356" cy="57" r="4" fill="#d6a34f" />
      </svg>

      <div className="relative z-10 mx-auto mb-10 text-center max-sm:mb-7">
        <p className="m-0 text-[10px] font-extrabold tracking-[0.2em] text-[#53683a]">KNOW YOUR OIL</p>
        <h2 id="oil-information-title" className="mt-3 font-serif text-[clamp(38px,4vw,52px)] font-medium leading-[1.06] text-[#1d3b20]">
          The Barsana way,<br /><em className="font-normal text-[#75500e]">explained simply.</em>
        </h2>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-[minmax(320px,0.82fr)_minmax(0,1.38fr)] items-stretch gap-8 max-lg:grid-cols-1" >
        <div className="flex flex-col gap-3 max-lg:grid max-lg:grid-cols-2 max-sm:flex max-sm:gap-2" role="tablist" aria-label="Mustard oil information">
          {topics.map((topic, index) => (
            <button
              key={topic.id}
              className={`grid min-h-[66px] grid-cols-[38px_1fr_24px] items-center gap-2.5 rounded-[14px] border px-6 text-left font-serif text-[17px] font-semibold leading-tight transition-all duration-200 hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29482a] max-lg:last:col-span-2 max-sm:min-h-[58px] max-sm:grid-cols-[30px_1fr_18px] max-sm:rounded-[10px] max-sm:px-4 max-sm:text-[13px] max-sm:hover:translate-x-0 ${
                active.id === topic.id
                  ? "border-[#2c4b2b] bg-[#2c4b2b] !text-white shadow-[0_14px_28px_rgba(44,75,43,0.16)]"
                  : "border-[#1e3a201f] bg-[#fffdf5] text-[#60753e] hover:bg-[#f9f5e8]"
              }`}
              type="button"
              role="tab"
              aria-selected={active.id === topic.id}
              aria-controls="oil-information-panel"
              onClick={() => setActiveTopic(topic.id)}
            >
              <span className={`text-[11px] italic ${active.id === topic.id ? "!text-white" : "text-[#a99c75]"}`}>{String(index + 1).padStart(2, "0")}</span>
              {topic.label}
              <b className={`text-right font-sans text-[17px] font-normal ${active.id === topic.id ? "!text-white" : "text-[#60753e]"}`} aria-hidden="true">→</b>
            </button>
          ))}
        </div>

        <article className="min-h-[378px] rounded-[22px] bg-[#fffdf6] px-12 py-11 shadow-[0_20px_45px_rgba(87,58,8,0.12)] max-sm:min-h-0 max-sm:rounded-[15px] max-sm:px-5 max-sm:py-7" id="oil-information-panel" role="tabpanel" key={active.id}>
          <p className="m-0 text-[9px] font-extrabold uppercase tracking-[0.17em] text-[#9b7119]">{active.eyebrow}</p>
          <h3 className="my-3 max-w-[700px] font-serif text-[clamp(25px,2.4vw,35px)] font-semibold leading-[1.18] text-[#1d3b20] max-sm:text-[25px]">{active.title}</h3>
          <div>
            {active.paragraphs.map((paragraph) => <p className="mb-3 text-[13px] leading-7 text-[#566554] max-sm:text-xs max-sm:leading-6" key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#e0dbc9] pt-5 max-sm:grid-cols-1 max-sm:gap-2">
            {active.points.map((point) => <span className="flex items-start gap-2 text-[10px] font-bold leading-4 text-[#43573d]" key={point}><i className="grid size-[19px] shrink-0 place-items-center rounded-full bg-[#e4edda] text-[9px] not-italic text-[#49683b]">✓</i>{point}</span>)}
          </div>
        </article>
      </div>
    </section>
  );
}
