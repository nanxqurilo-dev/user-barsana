import Image from "next/image";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Leaf = () => (
  <svg aria-hidden="true" viewBox="0 0 32 32" fill="none">
    <path d="M27.5 4.5C16 5 7 10.5 6.5 21.5c5.5 2.5 14.5 0 21-17Z" fill="currentColor" opacity=".24" />
    <path d="M4.5 27.5c4-8 10.5-13 20-19M9.5 21c3-.2 5.4.5 7.5 2M15 15c-.3-2-.1-3.8.5-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const features = [
  { number: "01", title: "Wood Pressed", text: "Slow pressed in traditional wooden kolhus to preserve its natural aroma and nutrition." },
  { number: "02", title: "100% Natural", text: "Pure mustard goodness with no chemicals, preservatives, or artificial colours." },
  { number: "03", title: "Farm to Family", text: "Carefully sourced mustard seeds, bottled fresh and delivered to your kitchen." },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span>Free shipping on orders above ₹999</span>
        <span className="announcement-sep">•</span>
        <span>Pure by tradition, trusted by families</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Barsana home">
          <Image src="/image/logo png.png" alt="Barsana" width={72} height={72} priority />
          <div><strong>Barsana</strong><span>Pure by tradition</span></div>
        </a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#story">Our Story</a>
          <a href="#product">Our Oil</a>
          <a href="#benefits">Why Barsana</a>
        </nav>
        <a className="header-cta" href="#product">Shop now <Arrow /></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span></span> From Indian farms to your family</div>
          <h1>Goodness of tradition, <em>poured with purity.</em></h1>
          <p>Authentic Kachi Ghani mustard oil, wood pressed to bring its bold aroma, golden colour, and wholesome goodness to every meal.</p>
          <div className="hero-actions">
            <a className="button primary" href="#product">Explore our oil <Arrow /></a>
            <a className="text-link" href="#story"><span>▶</span> Discover our story</a>
          </div>
          <div className="hero-trust">
            <div><strong>100%</strong><span>Pure & natural</span></div>
            <i></i>
            <div><strong>0</strong><span>Added chemicals</span></div>
            <i></i>
            <div><strong>1L</strong><span>Family pack</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="sun-ring ring-one"></div><div className="sun-ring ring-two"></div>
          <div className="quality-stamp"><strong>100%</strong><span>PURE &<br />NATURAL</span></div>
          <div className="mustard-dots"><i></i><i></i><i></i><i></i><i></i></div>
          <Image className="hero-bottle" src="/image/front-bottle.png" alt="Barsana Kachi Ghani mustard oil bottle" width={461} height={853} priority />
          <div className="floating-note"><Leaf /><span><strong>Freshly pressed</strong>Rich aroma & flavour</span></div>
        </div>
        <div className="scroll-cue"><span></span>SCROLL TO EXPLORE</div>
      </section>

      <section className="marquee" aria-label="Product qualities">
        <span>WOOD PRESSED</span><b>✦</b><span>CHEMICAL FREE</span><b>✦</b><span>UNREFINED</span><b>✦</b><span>PRESERVATIVE FREE</span><b>✦</b><span>FULL OF GOODNESS</span>
      </section>

      <section className="story section" id="story">
        <div className="story-mark" aria-hidden="true">ब</div>
        <div className="section-heading">
          <div className="eyebrow"><span></span> The Barsana promise</div>
          <h2>Rooted in tradition.<br /><em>Made for today.</em></h2>
        </div>
        <div className="story-copy">
          <p className="lead">We believe the finest food begins with honest ingredients and time-honoured methods.</p>
          <p>That is why every bottle of Barsana is made from carefully selected mustard seeds, slowly pressed without heat or harsh processing. The result is oil just as nature intended—bold, nutritious, and full of character.</p>
          <a className="underlined" href="#benefits">Know more about us <Arrow /></a>
        </div>
      </section>

      <section className="features" id="benefits">
        {features.map((feature) => (
          <article key={feature.number}>
            <span className="feature-number">{feature.number}</span>
            <Leaf />
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <section className="product-section section" id="product">
        <div className="product-visual">
          <span className="big-type">PURE</span>
          <div className="product-sun"></div>
          <Image src="/image/front-bottle.png" alt="One litre bottle of Barsana mustard oil" width={369} height={682} />
        </div>
        <div className="product-copy">
          <div className="eyebrow"><span></span> Our signature oil</div>
          <h2>Kachi Ghani<br /><em>Mustard Oil</em></h2>
          <p>A robust, aromatic everyday cooking oil with the authentic flavour Indian kitchens love. Naturally rich in good fats and made for cooking, pickling, and finishing.</p>
          <div className="product-meta">
            <div><small>SIZE</small><strong>1 Litre</strong></div>
            <div><small>PROCESS</small><strong>Wood Pressed</strong></div>
            <div><small>PURITY</small><strong>100% Natural</strong></div>
          </div>
          <div className="buy-row"><div><small>INTRODUCTORY PRICE</small><strong>₹299</strong><del>₹349</del></div><a className="button primary" href="mailto:orders@barsana.in">Order now <Arrow /></a></div>
          <p className="delivery-note">● Fresh batch · Packed with care · Secure delivery</p>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-logo"><Image src="/image/logo png.png" alt="" width={120} height={120} /></div>
        <blockquote>“The familiar taste of home,<br />in every <em>golden drop.</em>”</blockquote>
        <p>Made with patience. Shared with love.</p>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-brand"><a className="brand" href="#home"><Image src="/image/logo png.png" alt="Barsana" width={80} height={80} /><div><strong>Barsana</strong><span>Pure by tradition</span></div></a><p>Bringing the honest goodness of traditional Indian oils back to modern kitchens.</p></div>
          <div><h4>Explore</h4><a href="#story">Our story</a><a href="#product">Our oil</a><a href="#benefits">Why Barsana</a></div>
          <div><h4>Help</h4><a href="mailto:care@barsana.in">Contact us</a><a href="#home">Shipping & returns</a><a href="#home">FAQs</a></div>
          <div className="newsletter"><h4>Join the Barsana family</h4><p>Recipes, stories and goodness—delivered occasionally.</p><form><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address" /><button type="submit" aria-label="Subscribe"><Arrow /></button></form></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Barsana Foods. All rights reserved.</span><span>Made with ♥ in India</span><span><a href="#home">Privacy</a> · <a href="#home">Terms</a></span></div>
      </footer>
    </main>
  );
}
