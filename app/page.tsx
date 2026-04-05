import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.topbar}>
        <span>ATHEIA</span>
        <span>Brand Photoshoot Quote</span>
      </div>

      {/* ═══ HERO ═══ */}
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div>
            <div className={styles.eyebrow}>Premium Campaign Visuals</div>
            <h1 className={styles.h1}>Built to look like a real brand launch.</h1>
            <p className={styles.lead}>
              A 2-hour brand photoshoot designed to give ATHEIA a stronger, cleaner visual identity across website, social media and campaign assets with a more elevated sportswear feel.
            </p>
          </div>

          <div className={styles.heroBottom}>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <strong>2 hr</strong>
                <span>Focused shoot built for sharp output, not filler.</span>
              </div>
              <div className={styles.stat}>
                <strong>2 photogs</strong>
                <span>More coverage, angles and efficiency on set.</span>
              </div>
              <div className={styles.stat}>
                <strong>2+ models</strong>
                <span>Enough range to make the brand feel alive.</span>
              </div>
              <div className={styles.stat}>
                <strong>1-2 spots</strong>
                <span>Location flexibility for hero and detail content.</span>
              </div>
            </div>

            <div className={styles.goalBlock}>
              <div className={styles.goalLabel}>Goal</div>
              <p className={styles.goalText}>
                Create a premium, cohesive visual identity that feels disciplined, athletic and modern, closer to the clarity of Apple and the campaign energy of Nike.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src="/images/cinematic-street.jpg" alt="ATHEIA cinematic street campaign header image" />
          <div className={styles.heroOverlay}>
            <strong>Direction</strong>
            <p>Minimal styling, strong posture, clean negative space and premium athletic framing that feels intentional from the first glance.</p>
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INCLUDED + PRICE ═══ */}
      <section className={`${styles.section} ${styles.split}`}>
        <div className={styles.panel}>
          <div className={styles.sectionLabel}>What&apos;s Included</div>
          <h2 className={styles.h2}>The core shoot.</h2>
          <p className={styles.sectionIntro}>
            Everything needed to create a complete starter library of brand images for launch graphics, social posts, product storytelling and website use.
          </p>

          <div className={styles.includedGrid}>
            <div className={styles.includedItem}>
              <strong>2-hour photoshoot</strong>
              <span>Fast-moving and structured to get premium brand assets without overcomplicating the day.</span>
            </div>
            <div className={styles.includedItem}>
              <strong>2 photographers on set</strong>
              <span>More coverage for direction, hero shots, movement frames and details.</span>
            </div>
            <div className={styles.includedItem}>
              <strong>Minimum 2 models</strong>
              <span>Creates stronger brand presence and a fuller campaign feel.</span>
            </div>
            <div className={styles.includedItem}>
              <strong>1-2 locations</strong>
              <span>Enough flexibility to mix clean product visuals with lifestyle energy.</span>
            </div>
            <div className={styles.includedItem}>
              <strong>Lifestyle, product and detail shots</strong>
              <span>Designed for homepage banners, Shopify, launch assets and organic content.</span>
            </div>
            <div className={styles.includedItem}>
              <strong>Standard editing included</strong>
              <span>Clean, cohesive image delivery ready for brand use.</span>
            </div>
          </div>
        </div>

        <aside className={`${styles.panel} ${styles.priceCard}`}>
          <div>
            <div className={styles.priceLabel}>Base Shoot</div>
            <div className={styles.priceMain}>$550</div>
            <p className={styles.priceSub}>
              2-hour shoot with standard editing included. Made to give the brand a polished visual foundation without turning the first shoot into a huge production.
            </p>
          </div>

          <div>
            <div className={styles.buttonGroup}>
              <a className={`${styles.button} ${styles.buttonPrimary}`} href="/checkout?amount=275&desc=ATHEIA+Brand+Photoshoot+%E2%80%94+50%25+Deposit">Book / Pay 50% Deposit</a>
              <a className={`${styles.button} ${styles.buttonSecondary}`} href="/checkout?amount=550&desc=ATHEIA+Brand+Photoshoot+%E2%80%94+Full+Payment">Pay in Full — $550</a>
              <a className={`${styles.button} ${styles.buttonSecondary}`} href="/checkout?amount=770&desc=ATHEIA+Brand+Photoshoot+%E2%80%94+Base+%2B+Editing">Add Editing Package — $770</a>
            </div>
            <p className={styles.footnote}>Advanced edits: +$220 for 40-50 retouched images.</p>
          </div>
        </aside>
      </section>

      {/* ═══ STYLE GALLERY ═══ */}
      <section className={styles.section}>
        <div className={styles.galleryHeader}>
          <div className={styles.sectionLabel}>Pick a Style</div>
          <h2 className={styles.h2}>Choose the visual direction.</h2>
        </div>

        <div className={styles.galleryGrid}>
          <article className={`${styles.galleryCard} ${styles.galleryCardCinematic}`}>
            <img src="/images/header.jpg" alt="Cinematic Street Campaign reference" />
            <div className={styles.galleryCardCopy}>
              <h3>Cinematic Street Campaign</h3>
              <p>Timeless urban street photography with controlled, minimal aesthetic.</p>
            </div>
          </article>

          <article className={`${styles.galleryCard} ${styles.galleryCardStudio}`}>
            <img src="/images/minimal-studio.jpg" alt="Minimal Performance Studio reference" />
            <div className={styles.galleryCardCopy}>
              <h3>Minimal Performance Studio</h3>
              <p>Clean, professional product-focused studio shoot for e-commerce.</p>
            </div>
          </article>

          <article className={styles.galleryCard}>
            <img src="/images/performance-env.jpg" alt="Performance Environment reference" />
            <div className={styles.galleryCardCopy}>
              <h3>Performance Environment</h3>
              <p>Athletic lifestyle shoot in real environments — court, stadium, rooftop.</p>
            </div>
          </article>
        </div>
      </section>

      {/* ═══ OPTIONAL STUDIO ═══ */}
      <section className={`${styles.section} ${styles.panel}`}>
        <div className={styles.studiosHeader}>
          <div>
            <div className={styles.sectionLabel}>Optional Studio</div>
            <h2 className={styles.h2}>Add a controlled set if needed.</h2>
          </div>
          <p className={styles.footnote}>Studio shoots require an additional 1 hour setup window.</p>
        </div>

        <div className={styles.studiosGrid}>
          <article className={styles.studioCard}>
            <strong>The Studio 124</strong>
            <p>$180 for 2 hours. Best for clean controlled light, stronger product focus and a more editorial set feel.</p>
            <a className={styles.studioLink} href="https://www.thestudio124.com/appointments" target="_blank" rel="noreferrer">View Studio</a>
          </article>

          <article className={styles.studioCard}>
            <strong>Visuals Photo Studio</strong>
            <p>$156-$234 depending on timing and setup. A flexible option for polished e-commerce scenes and campaign-style compositions.</p>
            <a className={styles.studioLink} href="https://www.thevisualsphotostudio.com/appointments" target="_blank" rel="noreferrer">View Studio</a>
          </article>
        </div>
      </section>

      {/* ═══ VIDEO ADD-ON ═══ */}
      <section className={`${styles.videoCard} ${styles.videoCardCentered}`}>
        <aside className={styles.videoMeta}>
          <div>
            <div className={styles.priceLabel}>Video Shoot</div>
            <div className={styles.videoPrice}>Starts at $800</div>
            <p className={styles.videoNote}>
              4 hours. Includes setup, professional high-quality video capture, one location and multiple scenes for social ads or a brand video direction.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
