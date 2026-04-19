import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-white">
      {/* Affiliate disclosure */}
      <div className="border-b border-white/10 px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gold/10 border border-gold/20 rounded-xl px-6 py-5">
            <p className="text-xs text-white/60 leading-relaxed max-w-4xl">
              <span className="text-gold font-bold">Affiliate Disclosure:</span>{' '}
              This site contains affiliate links. When you click on a link and make a purchase,
              Datashion may earn a commission at no additional cost to you. This helps us keep the
              platform free and continuously updated. We only feature brands we believe offer genuine
              value to our users. As required by the{' '}
              <span className="text-white/80 font-medium">ASA (UK)</span> and{' '}
              <span className="text-white/80 font-medium">FTC (US)</span> guidelines.{' '}
              <Link to="/affiliate-disclosure" className="text-gold underline hover:opacity-80 transition-opacity">
                Full disclosure →
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-purple-950 rounded-md">
              <BrandLogo size="lg" />
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Fashion-first deals for every age — kids, adults, and older shoppers — personalised by
              size, style, and location. All in one place.
            </p>
            <p className="mt-4 text-xs text-white/25">
              Targeting launch Q3 2026 · Based in the UK
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/affiliate-disclosure" className="text-sm text-white/45 hover:text-white transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-white/45 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-sm text-white/45 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:partnerships@datashion.co.uk"
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  Partnerships
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@datashion.co.uk"
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  General Enquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Datashion. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Fashion, data-driven.
          </p>
        </div>
      </div>
    </footer>
  )
}
