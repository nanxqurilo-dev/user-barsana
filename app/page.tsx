"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { FormEvent, useState } from "react";

const Icon = ({ name }: { name: "menu" | "search" | "user" | "bag" | "home" | "arrow" | "check" }) => {
  const paths = {
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></>,
    user: <><circle cx="12" cy="8" r="3.5" /><path d="M5.5 20c.5-4 2.7-6 6.5-6s6 2 6.5 6" /></>,
    bag: <><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    home: <><path d="m4 11 8-7 8 7v9h-6v-6h-4v6H4v-9Z" /></>,
    arrow: <><path d="M5 12h14m-5-5 5 5-5 5" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
};

const faqs = [
  ["Is Barsana Kachi Ghani Mustard Oil pure?", "Yes. It is made from carefully selected mustard seeds, wood pressed in small batches, and contains no added colours, preservatives, or artificial flavours."],
  ["Can I use it for everyday cooking?", "Absolutely. Use it for tadka, sabzi, curries, frying, parathas, pickles, and other traditional Indian recipes."],
  ["Why does the oil have a strong aroma?", "The naturally pungent aroma is the character of authentic, unrefined mustard oil. It comes from retaining the seed’s natural flavour during pressing."],
  ["How should I store it?", "Keep the bottle tightly closed in a cool, dry place away from direct sunlight and moisture."],
];

export default function Home() {
  const [view, setView] = useState<"front" | "back">("front");
  const [pack, setPack] = useState<1 | 5>(1);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [cartPack, setCartPack] = useState<1 | 5>(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const price = pack === 1 ? 299 : 1399;
  const mrp = pack === 1 ? 349 : 1745;
  const normalizedSearch = searchQuery.trim().toLowerCase();
  const commonSearchTerms = ["barsana", "kachi", "ghani", "mustard", "oil", "wood pressed", "cold pressed"];
  const matchesCommonProduct = normalizedSearch.length >= 2 && commonSearchTerms.some((term) => term.includes(normalizedSearch) || normalizedSearch.includes(term));
  const matchesOneLitre = matchesCommonProduct || (normalizedSearch.length >= 2 && ["1 litre", "1 liter", "1l", "single", "bottle"].some((term) => term.includes(normalizedSearch) || normalizedSearch.includes(term)));
  const matchesFiveLitre = matchesCommonProduct || (normalizedSearch.length >= 2 && ["5 litre", "5 liter", "5l", "family", "saver", "pack"].some((term) => term.includes(normalizedSearch) || normalizedSearch.includes(term)));

  function addToCart() {
    setCartPack(pack);
    setCartCount((count) => count + quantity);
    setCartOpen(true);
  }

  function openProduct(selectedPack: 1 | 5) {
    setPack(selectedPack);
    setQuantity(1);
    setCartOpen(false);
    setSearchOpen(false);
    setSearchQuery("");
    window.setTimeout(() => document.getElementById("product")?.scrollIntoView({ behavior: "smooth" }), 100);
  }

  const cartUnitPrice = cartPack === 1 ? 299 : 1399;
  const cartMrp = cartPack === 1 ? 349 : 1745;

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    openProduct(searchQuery.includes("5") || searchQuery.toLowerCase().includes("family") ? 5 : 1);
  }

  return (
    <main>
      <div className="sale-strip"><div>SHOP NOW AND SAVE UP TO 20% <b>✦</b> FREE SHIPPING ABOVE ₹500 <b>✦</b> PURE KACHI GHANI MUSTARD OIL <b>✦</b> SHOP NOW AND SAVE UP TO 20% <b>✦</b></div></div>

      <header className="shop-header">
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><Icon name="menu" /></button>
        <div className={`header-left ${menuOpen ? "open" : ""}`}>
          <a className="products-pill" href="#product" onClick={() => setMenuOpen(false)}><Icon name="bag" /> Our Oil <span>⌄</span></a>
          <a className="icon-link" href="#home" aria-label="Home"><Icon name="home" /></a>
          <a className="icon-link" href="#contact" aria-label="Account"><Icon name="user" /></a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
        </div>
        <a className="shop-logo" href="#home" aria-label="Barsana home"><Image src="/image/logo png.png" alt="Barsana" width={104} height={104} priority /><span>Barsana<small>Pure by tradition</small></span></a>
        <div className="header-right">
          <form className={`header-search ${searchOpen ? "open" : ""}`} onSubmit={submitSearch}>
            <label className="sr-only" htmlFor="search">Search</label>
            <input id="search" value={searchQuery} onFocus={() => setSearchOpen(true)} onChange={(event) => {setSearchQuery(event.target.value); setSearchOpen(true);}} placeholder="Search products..." autoComplete="off" />
            {searchOpen && searchQuery && <button type="button" className="clear-search" onClick={() => {setSearchQuery(""); setSearchOpen(false);}} aria-label="Clear search">×</button>}
            <button type="submit" aria-label="Search"><Icon name="search" /></button>
            {searchOpen && normalizedSearch.length >= 2 && <div className="search-results">
              <div className="search-results-head"><span>Products</span><small>{Number(matchesOneLitre) + Number(matchesFiveLitre)} found</small></div>
              {matchesOneLitre && <button type="button" onClick={() => openProduct(1)}><span className="search-image"><Image src="/image/front-bottle.png" alt="Barsana 1 litre mustard oil" width={48} height={88} /></span><span><strong>Barsana Kachi Ghani Mustard Oil</strong><small>1 litre bottle · Wood pressed</small><b>₹299.00 <del>₹349.00</del></b><em>View & buy →</em></span></button>}
              {matchesFiveLitre && <button type="button" onClick={() => openProduct(5)}><span className="search-image search-pack"><Image src="/image/front-bottle.png" alt="Barsana 5 litre family pack" width={42} height={78} /><Image src="/image/front-bottle.png" alt="" width={42} height={78} /></span><span><strong>Barsana Family Saver Pack</strong><small>5 × 1 litre bottles · Money saver</small><b>₹1,399.00 <del>₹1,745.00</del></b><em>View & buy →</em></span></button>}
              {!matchesOneLitre && !matchesFiveLitre && <div className="no-search-result"><strong>No product found</strong><span>Try searching “mustard oil”, “1 litre” or “family pack”.</span></div>}
            </div>}
          </form>
          <button className="search-toggle" onClick={() => setSearchOpen(!searchOpen)} aria-label="Toggle search"><Icon name="search" /></button>
          <button className="cart-button" onClick={() => setCartOpen(true)} aria-label={`Cart with ${cartCount} items`}><Icon name="bag" /><span>{cartCount}</span></button>
        </div>
      </header>

      <div className="category-bar"><a href="#product">Kachi Ghani Oil</a><a href="#benefits">Benefits</a><a href="#process">Our Process</a><a href="#details">Ingredients</a><a href="#reviews">Reviews</a><a href="#faqs">FAQs</a></div>

      <section className="product-page" id="home">
        <div className="breadcrumbs"><a href="#home">Home</a><span>/</span><a href="#product">Mustard Oil</a><span>/</span><strong>Barsana Kachi Ghani</strong></div>
        <div className="product-grid" id="product">
          <div className="gallery">
            <div className="thumbs">
              <button className={view === "front" ? "active" : ""} onClick={() => setView("front")}><Image src="/image/front-bottle.png" alt="Front view thumbnail" width={72} height={132} /></button>
              <button className={view === "back" ? "active" : ""} onClick={() => setView("back")}><Image src="/image/back-bottle.png" alt="Back view thumbnail" width={72} height={132} /></button>
            </div>
            <div className="main-image">
              <span className="save-badge">SAVE {Math.round(((mrp-price)/mrp)*100)}%</span>
              <button
                className="bottle-toggle"
                onClick={() => setView(view === "front" ? "back" : "front")}
                aria-label={`Showing ${view} view. Click to show ${view === "front" ? "back" : "front"} view`}
              >
                <Image key={view} src={`/image/${view}-bottle.png`} alt={`Barsana mustard oil ${view} view`} width={461} height={853} priority />
              </button>
              <span className="turn-hint">↻ Click bottle to see {view === "front" ? "back" : "front"} view</span>
            </div>
          </div>

          <div className="buy-panel">
            <p className="micro-label">BARSANA WOOD-PRESSED OILS</p>
            <h1>Kachi Ghani<br />Mustard Oil</h1>
            <div className="rating"><span>★★★★★</span><a href="#reviews">4.9/5 (128 reviews)</a></div>
            <div className="price"><del>₹{mrp.toLocaleString("en-IN")}.00</del><strong>₹{price.toLocaleString("en-IN")}.00</strong><span>YOU SAVE ₹{(mrp-price).toLocaleString("en-IN")}.00</span></div>
            <p className="tax">MRP (inclusive of all taxes)</p>
            <p className="short-copy">Pure, unrefined mustard oil extracted from quality seeds using the traditional Kachi Ghani wood-pressing method.</p>
            <div className="selector-title"><strong>Select your quantity</strong><span>Most loved family packs</span></div>
            <div className="pack-options">
              <button className={pack === 1 ? "selected" : ""} onClick={() => {setPack(1); setQuantity(1);}}><span className="tag">BESTSELLER</span><strong>1 Litre</strong><span>1 bottle</span><b>₹299 <del>₹349</del></b></button>
              <button className={pack === 5 ? "selected" : ""} onClick={() => {setPack(5); setQuantity(1);}}><span className="tag">MONEY SAVER</span><strong>5 Litre</strong><span>5 × 1L bottles</span><b>₹1,399 <del>₹1,745</del></b></button>
            </div>
            <div className="demand"><span>👨‍👩‍👧‍👦</span><p><strong>1,000+ families</strong> chose Barsana this month</p></div>
            <div className="purchase-row"><div className="quantity"><button onClick={() => setQuantity(Math.max(1,quantity-1))} aria-label="Decrease quantity">−</button><output>{quantity}</output><button onClick={() => setQuantity(quantity+1)} aria-label="Increase quantity">+</button></div><button className="add-button" onClick={addToCart}>ADD TO CART — ₹{(price*quantity).toLocaleString("en-IN")}</button></div>
            <button className="buy-now" onClick={() => {addToCart(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}), 100);}}>BUY IT NOW <Icon name="arrow" /></button>
            <div className="trust-line"><span>✓ 100% Genuine</span><span>♢ Secure checkout</span><span>↺ Easy support</span></div>
            <div className="delivery"><div><b>●</b><span>Order placed<strong>Today</strong></span></div><i></i><div><b>●</b><span>Order shipped<strong>1–2 days</strong></span></div><i></i><div><b>●</b><span>Estimated delivery<strong>4–6 days</strong></span></div></div>
          </div>
        </div>
      </section>

      <section className="usp-row" id="benefits"><div><b>01</b><span><strong>Wood pressed</strong>Slow extracted in a traditional kolhu</span></div><div><b>02</b><span><strong>100% pure</strong>No chemicals or preservatives</span></div><div><b>03</b><span><strong>Rich aroma</strong>Authentic bold mustard flavour</span></div><div><b>04</b><span><strong>Farm sourced</strong>Made from selected quality seeds</span></div></section>

      <section className="story-block" id="story"><div className="story-image"><Image src="/image/front-bottle.png" alt="Barsana bottle" width={276} height={512} /><span>PURE<br />BY<br />TRADITION</span></div><div className="story-content"><p className="micro-label">THE BARSANA STORY</p><h2>Honest oil, made the <em>old-fashioned way.</em></h2><p>At Barsana, we believe everyday food deserves extraordinary care. Our mustard seeds are selected for quality and slowly crushed in a traditional wooden ghani. No harsh refining. No unnecessary additives. Just mustard oil with its natural colour, aroma, and character intact.</p><div className="story-points"><span><Icon name="check" /> Small-batch pressing</span><span><Icon name="check" /> Unrefined & natural</span><span><Icon name="check" /> Made in India</span></div></div></section>

      <section className="details-section" id="details"><div className="details-intro"><p className="micro-label">WHAT'S INSIDE</p><h2>One ingredient.<br /><em>Nothing hidden.</em></h2><p>100% Kachi Ghani mustard oil made from selected mustard seeds. No preservatives, no added colours, no artificial flavours, and no chemical refining.</p></div><div className="details-list"><details open><summary>Ingredients <span>+</span></summary><p>100% wood-pressed mustard oil from selected mustard seeds.</p></details><details><summary>How to use <span>+</span></summary><p>Ideal for tadka, sabzi, curries, frying, parathas, marinades, and homemade pickles.</p></details><details><summary>Storage <span>+</span></summary><p>Store in a cool, dry place away from sunlight. Keep the cap tightly closed.</p></details><details><summary>Product information <span>+</span></summary><p>Net content: 1L (910g). Vegetarian product. Product of India.</p></details></div></section>

      <section className="process" id="process"><p className="micro-label">FROM SEED TO BOTTLE</p><h2>Purity you can <em>taste.</em></h2><div className="process-grid"><article><span>01</span><div>✾</div><h3>Select</h3><p>Quality mustard seeds are carefully chosen.</p></article><article><span>02</span><div>⚙</div><h3>Slow press</h3><p>Wood pressed in small batches without harsh heat.</p></article><article><span>03</span><div>◌</div><h3>Settle</h3><p>Naturally settled to retain its full character.</p></article><article><span>04</span><div>♧</div><h3>Bottle</h3><p>Packed fresh and sealed for your family.</p></article></div></section>

      <section className="reviews" id="reviews"><div><p className="micro-label">CUSTOMER LOVE</p><h2>Families are<br /><em>loving Barsana.</em></h2><div className="review-score"><strong>4.9</strong><span>★★★★★<small>Based on 128 reviews</small></span></div></div><div className="review-cards"><article><span>★★★★★</span><p>“The aroma instantly reminds me of mustard oil from our village. Packaging is premium and the taste is genuinely authentic.”</p><strong>PRIYA SHARMA <small>Verified buyer</small></strong></article><article><span>★★★★★</span><p>“Clean, fresh and perfectly pungent. We use it for our daily sabzi and homemade achaar. Will definitely reorder.”</p><strong>RAHUL VERMA <small>Verified buyer</small></strong></article></div></section>

      <section className="faq" id="faqs"><p className="micro-label">NEED TO KNOW</p><h2>Frequently asked <em>questions.</em></h2><div>{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="newsletter" id="contact"><div><p className="micro-label">JOIN THE BARSANA FAMILY</p><h2>Goodness, delivered.</h2><p>Get recipes, product updates, and special offers in your inbox.</p></div><form onSubmit={(e) => e.preventDefault()}><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Enter your email address" required /><button type="submit">SUBSCRIBE <Icon name="arrow" /></button></form></section>

      <footer><div className="footer-brand"><a className="shop-logo" href="#home"><Image src="/image/logo png.png" alt="Barsana" width={90} height={90} /><span>Barsana<small>Pure by tradition</small></span></a><p>Traditional Kachi Ghani mustard oil for modern Indian kitchens.</p></div><div><h3>Quick links</h3><a href="#product">Shop oil</a><a href="#story">Our story</a><a href="#benefits">Why Barsana</a></div><div><h3>Customer care</h3><a href="mailto:care@barsana.in">care@barsana.in</a><a href="#faqs">FAQs</a><a href="#contact">Contact us</a></div><div><h3>Follow our journey</h3><p>Instagram &nbsp; Facebook &nbsp; YouTube</p><small>© 2026 Barsana Foods. Made with care in India.</small></div></footer>

      <aside className={`cart-drawer ${cartOpen ? "open" : ""}`} aria-hidden={!cartOpen}>
        <section className="cart-suggestions">
          <p className="cart-kicker">YOU MIGHT ALSO LIKE</p>
          <button className="suggestion" onClick={() => openProduct(1)}>
            <Image src="/image/front-bottle.png" alt="Barsana 1 litre mustard oil" width={86} height={158} />
            <span><strong>Barsana Kachi Ghani Oil</strong><small>1 litre bottle</small><b><del>₹349</del> ₹299</b><em>VIEW PRODUCT →</em></span>
          </button>
          <button className="suggestion" onClick={() => openProduct(5)}>
            <span className="bottle-group"><Image src="/image/front-bottle.png" alt="Barsana 5 litre pack" width={70} height={130} /><Image src="/image/front-bottle.png" alt="" width={70} height={130} /></span>
            <span><strong>Barsana Family Saver Pack</strong><small>5 × 1 litre bottles</small><b><del>₹1,745</del> ₹1,399</b><em>SELECT OPTIONS →</em></span>
          </button>
        </section>
        <section className="cart-content">
          <div className="drawer-head"><strong>CART <small>{cartCount} {cartCount === 1 ? "item" : "items"}</small></strong><button onClick={() => setCartOpen(false)} aria-label="Close cart">×</button></div>
          {cartCount ? <>
            <div className="shipping-message"><strong>Congratulations! You've earned free shipping!</strong><div><span style={{width: `${Math.min(100, ((cartUnitPrice * cartCount) / 500) * 100)}%`}}></span></div></div>
            <div className="cart-item">
              <button className="cart-product-image" onClick={() => openProduct(cartPack)} aria-label="Open product page"><Image src="/image/front-bottle.png" alt="Barsana Kachi Ghani mustard oil" width={92} height={170} /></button>
              <div className="cart-item-info"><button className="cart-product-name" onClick={() => openProduct(cartPack)}>Barsana Kachi Ghani Mustard Oil</button><span>{cartPack} Litre {cartPack === 5 ? "family pack" : "bottle"}</span><div className="cart-line-price"><del>₹{cartMrp.toLocaleString("en-IN")}</del><strong>₹{cartUnitPrice.toLocaleString("en-IN")}</strong><em>{Math.round(((cartMrp-cartUnitPrice)/cartMrp)*100)}% OFF</em></div><div className="cart-actions"><div className="quantity"><button onClick={() => setCartCount(Math.max(1,cartCount-1))}>−</button><output>{cartCount}</output><button onClick={() => setCartCount(cartCount+1)}>+</button></div><button className="delete-item" onClick={() => setCartCount(0)}>▣ Delete</button></div></div>
            </div>
            <div className="cart-summary"><div><span>SUBTOTAL</span><strong>₹{(cartUnitPrice*cartCount).toLocaleString("en-IN")}.00</strong></div><a href="mailto:orders@barsana.in?subject=Barsana%20Mustard%20Oil%20Order" className="checkout">PROCEED TO CHECKOUT</a><p>UPI &nbsp; • &nbsp; VISA &nbsp; • &nbsp; Mastercard &nbsp; • &nbsp; Paytm</p></div>
          </> : <div className="empty-cart"><strong>Your cart is empty</strong><p>Add some golden goodness to get started.</p><button onClick={() => openProduct(1)}>SHOP MUSTARD OIL</button></div>}
        </section>
      </aside>
      {cartOpen && <button className="overlay" onClick={() => setCartOpen(false)} aria-label="Close cart overlay" />}
    </main>
  );
}
