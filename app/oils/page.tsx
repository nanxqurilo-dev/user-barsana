import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import LoginTrigger from "../components/LoginTrigger";

const oils = [
  {
    size: "1 Litre",
    title: "Barsana Kachi Ghani Mustard Oil",
    note: "Everyday kitchen bottle",
    image: "/image/front-bottle.png",
    width: 230,
    height: 426,
    mrp: "₹349",
    price: "₹299",
    saving: "14% OFF",
    href: "/?pack=1#product",
  },
  {
    size: "5 Litre",
    title: "Barsana Family Saver Jar",
    note: "Value pack for families",
    image: "/image/5ltr-front.png",
    width: 284,
    height: 426,
    mrp: "₹1,745",
    price: "₹1,399",
    saving: "20% OFF",
    href: "/?pack=5#product",
  },
];

export default function OilsPage() {
  return (
    <main className={styles.catalogPage}>
      <div className="sale-strip"><div>PURE KACHI GHANI MUSTARD OIL <b>✦</b> FREE SHIPPING ABOVE ₹500 <b>✦</b> FARM SOURCED & WOOD PRESSED <b>✦</b> PURE KACHI GHANI MUSTARD OIL <b>✦</b></div></div>
      <header className="catalog-header">
        <Link className="catalog-back" href="/">← Home</Link>
        <Link className="shop-logo" href="/" aria-label="Barsana home"><Image src="/image/logo png.png" alt="Barsana" width={84} height={84} priority /><span>Barsana<small>Pure by tradition</small></span></Link>
        <div className="flex items-center justify-end gap-2"><LoginTrigger /><Link className="catalog-cart" href="/?pack=1#product">Buy now →</Link></div>
      </header>

      <section className="catalog-hero">
        <p>THE BARSANA OIL COLLECTION</p>
        <h1>Choose your <em>golden goodness.</em></h1>
        <span>One traditional recipe, available in two family-friendly sizes.</span>
      </section>

      <section className="oil-catalog">
        <aside className="catalog-sidebar">
          <p>Browse</p>
          <Link className="active" href="/oils"><span>All oils</span><b>2</b></Link>
          <Link href="/?pack=1#product"><span>1 litre bottle</span><b>→</b></Link>
          <Link href="/?pack=5#product"><span>5 litre jar</span><b>→</b></Link>
          <div><strong>Need help choosing?</strong><span>The 1L bottle is ideal for everyday use. Pick the 5L jar for better family value.</span></div>
        </aside>

        <div className="catalog-products">
          <div className="catalog-title"><span>OUR KACHI GHANI PICKS</span><small>2 products</small></div>
          <div className="oil-cards">
            {oils.map((oil) => (
              <article className="oil-card" key={oil.size}>
                <Link className="oil-card-image" href={oil.href} aria-label={`Open ${oil.title} ${oil.size}`}>
                  <span>{oil.saving}</span>
                  <Image src={oil.image} alt={`${oil.title} ${oil.size}`} width={oil.width} height={oil.height} priority />
                  <i>View product</i>
                </Link>
                <div className="oil-card-copy">
                  <small>{oil.size} · WOOD PRESSED</small>
                  <Link href={oil.href}><h2>{oil.title}</h2></Link>
                  <p>{oil.note}</p>
                  <div className="oil-rating"><span>★★★★★</span><small>4.9 customer rating</small></div>
                  <div className="oil-card-price"><span><small>MRP <del>{oil.mrp}</del></small><strong>{oil.price}</strong></span><b>{oil.saving}</b></div>
                  <Link className="oil-select" href={oil.href}>SELECT THIS SIZE <span>→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-promise">
        <span>01<strong>Wood pressed</strong></span><span>02<strong>One pure ingredient</strong></span><span>03<strong>No chemical refining</strong></span><span>04<strong>Packed with care</strong></span>
      </section>
    </main>
  );
}
