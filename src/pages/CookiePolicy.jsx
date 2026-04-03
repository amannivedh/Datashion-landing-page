import { Link } from 'react-router-dom'

export default function CookiePolicy() {
  return (
    <>
      <div className="bg-charcoal text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-4">
            Legal
          </span>
          <h1 className="font-serif text-4xl font-bold text-white mb-3">Cookie Policy</h1>
          <p className="text-white/40 text-sm">Last updated: April 2026</p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16 space-y-10 text-stone-600">

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            1. What are cookies?
          </h2>
          <p className="leading-relaxed mb-3">
            Cookies are small text files placed on your device (computer, tablet, or phone) when
            you visit a website. They help websites remember information about your visit — such as
            your preferences — and can make your next visit easier and more useful.
          </p>
          <p className="leading-relaxed">
            Cookies cannot harm your device and do not contain personally identifiable information
            unless you have provided that information to us.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            2. How we use cookies
          </h2>
          <p className="leading-relaxed mb-4">
            Datashion uses cookies for the following purposes:
          </p>

          <div className="space-y-4">
            <CookieCategory
              name="Strictly Necessary Cookies"
              required
              desc="These cookies are essential for the website to function. They enable core features such as session management, user authentication, and security. They cannot be switched off."
              examples={[
                'Session authentication token',
                'CSRF protection token',
                'Cookie consent preference',
              ]}
            />

            <CookieCategory
              name="Functional Cookies"
              desc="These cookies allow us to remember choices you make — such as your location postcode, style preferences, and size filters — to provide a more personalised experience."
              examples={[
                'User preferences (size, style)',
                'Location postcode (if provided)',
                'Deal feed filter settings',
              ]}
            />

            <CookieCategory
              name="Analytics Cookies"
              desc="We use analytics tools to understand how visitors use our site — which pages are popular, how users navigate, and where they come from. This helps us improve the service. Analytics data is anonymised."
              examples={[
                'Plausible Analytics (privacy-first, no cross-site tracking)',
                'Google Analytics 4 (with IP anonymisation enabled)',
              ]}
            />

            <CookieCategory
              name="Affiliate Tracking Cookies"
              desc="When you click a deal link, affiliate networks (Awin, Impact.com, Rakuten, CJ) may set cookies on your device to track whether a purchase is made, so the sale can be attributed to Datashion. These cookies are operated by third parties under their own privacy policies."
              examples={[
                'Awin attribution cookie',
                'Impact.com session tracker',
                'Rakuten Advertising cookie',
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            3. Cookie durations
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-100">
                  <th className="text-left px-4 py-3 text-charcoal font-semibold rounded-tl-lg">Cookie type</th>
                  <th className="text-left px-4 py-3 text-charcoal font-semibold">Duration</th>
                  <th className="text-left px-4 py-3 text-charcoal font-semibold rounded-tr-lg">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  ['Session cookies', 'Session only', 'Deleted when browser closes'],
                  ['Preference cookies', '12 months', 'Stores your site preferences'],
                  ['Analytics cookies', '13 months', 'Google Analytics standard'],
                  ['Affiliate tracking', '30 days', 'Standard affiliate window'],
                  ['Consent cookie', '12 months', 'Remembers your consent choice'],
                ].map(([type, dur, note]) => (
                  <tr key={type} className="hover:bg-stone-50">
                    <td className="px-4 py-3 font-medium text-charcoal">{type}</td>
                    <td className="px-4 py-3 text-stone-500">{dur}</td>
                    <td className="px-4 py-3 text-stone-400 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            4. Managing your cookie preferences
          </h2>
          <p className="leading-relaxed mb-4">
            You can control and manage cookies in several ways:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-sm">
            <li>
              <strong className="text-charcoal">Via our cookie banner:</strong> When you first visit
              the site, you can accept or decline non-essential cookies using our cookie consent
              banner.
            </li>
            <li>
              <strong className="text-charcoal">Via your browser:</strong> Most browsers allow you
              to view, delete, and block cookies. Instructions vary by browser:{' '}
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-charcoal underline">Chrome</a>
              {' · '}
              <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-charcoal underline">Firefox</a>
              {' · '}
              <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-charcoal underline">Safari</a>
            </li>
            <li>
              <strong className="text-charcoal">Opt-out tools:</strong> You can opt out of Google
              Analytics via the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-charcoal underline">
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </li>
          </ul>
          <p className="leading-relaxed mt-4 text-sm">
            Disabling certain cookies may affect the functionality of the site. Strictly necessary
            cookies cannot be disabled as they are required for core features to work.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            5. Third-party cookies
          </h2>
          <p className="leading-relaxed mb-3">
            Some cookies are set by third parties when you interact with embedded content or click
            affiliate links. Datashion does not control these cookies. We recommend reviewing the
            privacy policies of these third parties:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Awin — awin.com/privacy-policy</li>
            <li>Impact.com — impact.com/privacy-policy</li>
            <li>Rakuten Advertising — rakutenadvertising.com/privacy</li>
            <li>Google — policies.google.com/privacy</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            6. Legal basis
          </h2>
          <p className="leading-relaxed">
            Our use of cookies is compliant with the UK Privacy and Electronic Communications
            Regulations (PECR) and UK GDPR. Where we rely on your consent to use non-essential
            cookies, we obtain that consent via our cookie consent tool before placing any such
            cookies. You can withdraw consent at any time.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-charcoal mb-4 pb-3 border-b border-stone-200">
            7. Contact
          </h2>
          <p className="leading-relaxed">
            If you have questions about our use of cookies, please contact us at{' '}
            <a href="mailto:privacy@datashion.co.uk" className="text-charcoal underline">
              privacy@datashion.co.uk
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
          <Link to="/affiliate-disclosure" className="text-charcoal underline font-medium">
            Affiliate Disclosure
          </Link>
        </div>
      </article>
    </>
  )
}

function CookieCategory({ name, required, desc, examples }) {
  return (
    <div className="border border-stone-200 rounded-xl p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-sm text-charcoal">{name}</h3>
        {required && (
          <span className="text-xs font-semibold bg-stone-100 text-stone-500 px-2.5 py-1 rounded-full">
            Always active
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed mb-3">{desc}</p>
      {examples.length > 0 && (
        <ul className="list-disc pl-5 space-y-1">
          {examples.map((ex) => (
            <li key={ex} className="text-xs text-stone-400">{ex}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
