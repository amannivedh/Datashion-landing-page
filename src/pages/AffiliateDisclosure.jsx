import { Link } from 'react-router-dom'

export default function AffiliateDisclosure() {
  return (
    <>
      <div className="bg-charcoal text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-4">
            Legal
          </span>
          <h1 className="font-serif text-4xl font-bold text-white mb-3">
            Affiliate Disclosure
          </h1>
          <p className="text-white/40 text-sm">Last updated: April 2026</p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16 space-y-10">

        {/* Required disclosure statement — prominent box */}
        <div className="bg-gold/10 border-2 border-gold rounded-2xl px-8 py-6">
          <p className="text-lg font-semibold text-charcoal leading-relaxed text-center">
            This site contains affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </div>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            What this means
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Datashion is a fashion deal aggregator. Some of the links on this website are
            "affiliate links." This means if you click on a link and purchase an item, Datashion
            may receive an affiliate commission from the retailer. The price you pay is not affected
            in any way — you pay the same whether you use our link or go directly to the retailer's
            website.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Affiliate commissions are a primary way Datashion generates revenue, which allows us
            to maintain the platform, source and verify deals, and keep the service free for users.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            Our editorial independence
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            The existence of an affiliate relationship does not influence our editorial decisions.
            Datashion curates deals based on genuine value to our users — discount quality, brand
            reputation, and deal accuracy — not on the size of commission offered.
          </p>
          <p className="text-stone-600 leading-relaxed">
            We do not accept payment to feature deals, and we do not give preferential placement
            to brands purely because they pay a higher commission rate.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            Which networks and programmes we use
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Datashion participates in affiliate programmes through the following major networks:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-600 text-sm">
            <li><strong>Awin</strong> — ASOS, Topshop, Boohoo, Missguided, and others</li>
            <li><strong>Rakuten Advertising / Impact.com</strong> — H&M and select premium brands</li>
            <li><strong>Commission Junction (CJ)</strong> — Mango, and other international retailers</li>
            <li><strong>Impact.com</strong> — Zara/Inditex group (pending approval)</li>
          </ul>
          <p className="text-stone-600 leading-relaxed mt-4">
            When you click a deal link on Datashion, you may be redirected through a tracking URL
            operated by one of these networks before reaching the retailer's website. This is how
            purchases are attributed to Datashion for commission purposes.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            Your rights and our obligations
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            This disclosure is required by the{' '}
            <strong>Advertising Standards Authority (ASA)</strong> and the{' '}
            <strong>Committee of Advertising Practice (CAP) Code</strong> in the United Kingdom,
            and by the <strong>Federal Trade Commission (FTC)</strong> guidelines in the United
            States.
          </p>
          <p className="text-stone-600 leading-relaxed">
            We are committed to full transparency about our commercial relationships. If you have
            any questions about our affiliate arrangements, please contact us at{' '}
            <a href="mailto:hello@datashion.co.uk" className="text-charcoal underline font-medium">
              hello@datashion.co.uk
            </a>
            .
          </p>
        </section>

        <div className="bg-stone-50 rounded-xl px-6 py-5 text-sm text-stone-500 leading-relaxed">
          See also:{' '}
          <Link to="/privacy-policy" className="text-charcoal underline font-medium">
            Privacy Policy
          </Link>{' '}
          ·{' '}
          <Link to="/cookie-policy" className="text-charcoal underline font-medium">
            Cookie Policy
          </Link>
        </div>
      </article>
    </>
  )
}
