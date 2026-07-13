"use client";

import { useState } from "react";
import styles from "./OilInformation.module.css";

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
    <section className={styles.section} aria-labelledby="oil-information-title">
      <div className={styles.decoration} aria-hidden="true"><span></span><span></span><span></span></div>
      <div className={styles.intro}>
        <p>KNOW YOUR OIL</p>
        <h2 id="oil-information-title">The Barsana way,<br /><em>explained simply.</em></h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.tabs} role="tablist" aria-label="Mustard oil information">
          {topics.map((topic, index) => (
            <button
              key={topic.id}
              className={active.id === topic.id ? styles.activeTab : ""}
              type="button"
              role="tab"
              aria-selected={active.id === topic.id}
              aria-controls="oil-information-panel"
              onClick={() => setActiveTopic(topic.id)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {topic.label}
              <b aria-hidden="true">→</b>
            </button>
          ))}
        </div>

        <article className={styles.panel} id="oil-information-panel" role="tabpanel" key={active.id}>
          <p className={styles.eyebrow}>{active.eyebrow}</p>
          <h3>{active.title}</h3>
          <div className={styles.copy}>
            {active.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className={styles.points}>
            {active.points.map((point) => <span key={point}><i>✓</i>{point}</span>)}
          </div>
        </article>
      </div>
    </section>
  );
}
