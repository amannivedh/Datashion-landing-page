import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-charcoal text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-4">
            Legal
          </span>
          <h1 className="font-serif text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/40 text-sm">Last updated: April 2026</p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16 space-y-10 text-stone-600">

        <div className="bg-stone-50 border border-stone-200 rounded-xl px-6 py-5 text-sm leading-relaxed">
          <strong className="text-charcoal">Summary:</strong> Datashion collects minimal personal
          data, uses it only to provide our services, does not sell it to third parties, and complies
          with the UK GDPR and Data Protection Act 2018. Read the full policy below for details.
        </div>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            1. Who we are
          </h2>
          <p className="leading-relaxed mb-3">
            Datashion is a fashion discount aggregator operated from the United Kingdom. For the
            purposes of data protection law, Datashion is the data controller of any personal data
            we collect from users of this website.
          </p>
          <p className="leading-relaxed">
            Contact:{' '}
            <a href="mailto:privacy@datashion.co.uk" className="text-charcoal underline">
              privacy@datashion.co.uk
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            2. What data we collect
          </h2>
          <p className="leading-relaxed mb-3">We may collect the following types of personal data:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <strong className="text-charcoal">Email address</strong> — when you sign up for our
              newsletter or create an account.
            </li>
            <li>
              <strong className="text-charcoal">Location data</strong> — postcode or approximate
              location, provided voluntarily to surface local deals.
            </li>
            <li>
              <strong className="text-charcoal">Style preferences</strong> — size, style type, price
              range, set by you to personalise your deal feed.
            </li>
            <li>
              <strong className="text-charcoal">Usage data</strong> — pages visited, links clicked,
              time on site, collected automatically via analytics.
            </li>
            <li>
              <strong className="text-charcoal">Device and browser data</strong> — IP address,
              browser type, operating system, referral source.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            3. How we use your data
          </h2>
          <p className="leading-relaxed mb-3">We use collected data to:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Provide and personalise our deal feed service</li>
            <li>Send the weekly email digest (if you have subscribed)</li>
            <li>Improve the website based on usage analytics</li>
            <li>Comply with our legal obligations</li>
            <li>Communicate with you regarding your account or enquiries</li>
            <li>
              Track affiliate link clicks for commission attribution (via our affiliate network
              partners — this is de-identified at the network level)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            4. Legal basis for processing
          </h2>
          <p className="leading-relaxed mb-3">
            Under the UK GDPR, we process your personal data on the following lawful bases:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <strong className="text-charcoal">Consent</strong> — for email newsletter
              subscriptions and non-essential cookies.
            </li>
            <li>
              <strong className="text-charcoal">Legitimate interests</strong> — for website
              analytics and improving our service.
            </li>
            <li>
              <strong className="text-charcoal">Contract performance</strong> — if you create an
              account, to fulfil our service obligations.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            5. Cookies
          </h2>
          <p className="leading-relaxed">
            We use cookies to operate the site, remember your preferences, and gather anonymous
            analytics. For full details, see our{' '}
            <Link to="/cookie-policy" className="text-charcoal underline font-medium">
              Cookie Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            6. Affiliate tracking
          </h2>
          <p className="leading-relaxed mb-3">
            When you click a deal link, you may be redirected through an affiliate tracking URL
            (operated by networks such as Awin, Impact.com, or Rakuten). These networks may set
            their own cookies to attribute a sale to Datashion. We do not share your personal
            identifiable information with these networks — tracking is done via anonymous session
            identifiers.
          </p>
          <p className="leading-relaxed">
            See our{' '}
            <Link to="/affiliate-disclosure" className="text-charcoal underline font-medium">
              Affiliate Disclosure
            </Link>{' '}
            for more detail on how affiliate links work.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            7. Third-party services
          </h2>
          <p className="leading-relaxed mb-3">We use the following third-party services:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <strong className="text-charcoal">Brevo / Mailchimp</strong> — email delivery for
              our newsletter. They process your email address.
            </li>
            <li>
              <strong className="text-charcoal">Plausible Analytics / Google Analytics</strong> —
              website traffic analytics.
            </li>
            <li>
              <strong className="text-charcoal">Vercel</strong> — website hosting. Server logs
              may be retained temporarily.
            </li>
            <li>
              <strong className="text-charcoal">Supabase</strong> — database and authentication,
              hosted on AWS infrastructure.
            </li>
            <li>
              <strong className="text-charcoal">Affiliate networks (Awin, Impact, Rakuten, CJ)</strong> —
              for commission tracking on deal clicks.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            8. Data retention
          </h2>
          <p className="leading-relaxed">
            We retain your personal data only as long as necessary to provide our services or
            fulfil legal obligations. Email subscribers can unsubscribe at any time. If you request
            account deletion, we will remove your personal data within 30 days, except where
            retention is required by law.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            9. Your rights
          </h2>
          <p className="leading-relaxed mb-3">Under UK GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate personal data</li>
            <li>Request deletion of your personal data ("right to be forgotten")</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time (where processing is based on consent)</li>
            <li>
              Lodge a complaint with the Information Commissioner's Office (ICO) at{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-charcoal underline">
                ico.org.uk
              </a>
            </li>
          </ul>
          <p className="leading-relaxed mt-4">
            To exercise any of these rights, contact{' '}
            <a href="mailto:privacy@datashion.co.uk" className="text-charcoal underline">
              privacy@datashion.co.uk
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            10. Changes to this policy
          </h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify registered users
            of material changes via email. Continued use of the site after changes constitutes
            acceptance of the updated policy. The "last updated" date at the top of this page
            reflects the most recent revision.
          </p>
        </section>

        <div className="bg-stone-50 rounded-xl px-6 py-5 text-sm text-stone-500 leading-relaxed">
          See also:{' '}
          <Link to="/cookie-policy" className="text-charcoal underline font-medium">
            Cookie Policy
          </Link>{' '}
          ·{' '}
          <Link to="/affiliate-disclosure" className="text-charcoal underline font-medium">
            Affiliate Disclosure
          </Link>
        </div>
      </article>
    </>
  )
}
