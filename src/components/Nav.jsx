import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import BrandLogo from './BrandLogo'

/** Home + hash (works with GitHub Pages `basename` / VITE_BASE). */
function homeHash(sectionId) {
  return { pathname: '/', hash: sectionId }
}

const CATEGORIES = [
  {
    id: 'fashion',
    label: 'Fashion',
    hash: 'fashion',
    subs: [
      { label: 'Womenswear', hash: 'fashion' },
      { label: 'Menswear', hash: 'fashion' },
      { label: 'Kids & teens', hash: 'kids-family' },
      { label: 'Shoes', hash: 'fashion' },
      { label: 'Activewear', hash: 'fashion' },
      { label: 'Accessories', hash: 'fashion' },
    ],
  },
  {
    id: 'beauty',
    label: 'Beauty',
    hash: 'beauty',
    subs: [
      { label: 'Makeup', hash: 'beauty' },
      { label: 'Skincare', hash: 'beauty' },
      { label: 'Haircare', hash: 'beauty' },
      { label: 'Fragrance', hash: 'beauty' },
    ],
  },
  {
    id: 'kids',
    label: 'Kids & family',
    hash: 'kids-family',
    subs: [
      { label: 'Kids clothing', hash: 'kids-family' },
      { label: 'Schoolwear', hash: 'kids-family' },
      { label: 'Family bundles', hash: 'kids-family' },
    ],
  },
  {
    id: 'home',
    label: 'Home & lifestyle',
    hash: 'just-in',
    subs: [
      { label: 'Home', hash: 'just-in' },
      { label: 'Travel & breaks', hash: 'just-in' },
      { label: 'Wellness', hash: 'just-in' },
    ],
  },
  {
    id: 'tech',
    label: 'Tech & gadgets',
    hash: 'just-in',
    subs: [
      { label: 'Accessories', hash: 'just-in' },
      { label: 'Audio', hash: 'just-in' },
      { label: 'Wearables', hash: 'just-in' },
    ],
  },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openMega, setOpenMega] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setOpenMega(null)
    setMobileExpanded(null)
  }, [location])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenMega(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMega(null)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <>
      <div className="bg-purple-950 text-white/75 text-center text-[11px] font-medium py-2 px-4 tracking-wide">
        This site contains affiliate links. We may earn a commission at no extra cost to you.{' '}
        <Link to="/affiliate-disclosure" className="text-gold underline hover:opacity-75 transition-opacity">
          Learn more
        </Link>
      </div>

      <header ref={navRef} className="sticky top-0 z-50">
        <motion.nav
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl border-b border-stone-100 shadow-[0_1px_24px_rgba(0,0,0,0.06)]'
              : 'bg-white border-b border-stone-100'
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[64px] md:h-[68px]">
            <Link to="/" className="inline-flex flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-md">
              <BrandLogo size="md" />
            </Link>

            {/* Desktop categories */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center px-4" aria-label="Categories">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="relative"
                  onMouseEnter={() => setOpenMega(cat.id)}
                >
                  <Link
                    to={homeHash(cat.hash)}
                    className={`flex items-center gap-0.5 px-3 py-2 text-[13px] font-medium rounded-lg transition-colors ${
                      openMega === cat.id ? 'text-charcoal bg-stone-100' : 'text-stone-500 hover:text-charcoal hover:bg-stone-50'
                    }`}
                  >
                    {cat.label}
                    <ChevronDown size={14} className="opacity-50" />
                  </Link>
                </div>
              ))}
              <Link
                to={homeHash('ongoing-offers')}
                className="px-3 py-2 text-[13px] font-semibold text-gold hover:text-charcoal transition-colors"
              >
                All deals
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <Link
                to={homeHash('how-it-works')}
                className="text-[13px] font-medium text-stone-500 hover:text-charcoal transition-colors"
              >
                How it works
              </Link>
              <a
                href="mailto:partnerships@datashion.co.uk"
                className="text-[13px] font-semibold bg-purple-950 text-white px-5 py-2.5 rounded-full hover:bg-gold hover:text-white transition-all duration-300"
              >
                Partner
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-charcoal"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'x' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {open ? <X size={22} /> : <Menu size={22} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          {/* Mega panel (desktop) */}
          <AnimatePresence>
            {openMega && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute left-0 right-0 top-full border-b border-stone-100 bg-white shadow-lg"
                onMouseLeave={() => setOpenMega(null)}
              >
                <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-12 gap-8">
                  {CATEGORIES.filter((c) => c.id === openMega).map((cat) => (
                    <div key={cat.id} className="col-span-12 md:col-span-7">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4">
                        {cat.label}
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {cat.subs.map((s) => (
                          <Link
                            key={s.label}
                            to={homeHash(s.hash)}
                            className="text-sm font-medium text-charcoal hover:text-gold py-2 px-3 rounded-lg hover:bg-stone-50 transition-colors"
                            onClick={() => setOpenMega(null)}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                      <Link
                        to={homeHash(cat.hash)}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-gold mt-6 hover:gap-2 transition-all"
                        onClick={() => setOpenMega(null)}
                      >
                        View all {cat.label.toLowerCase()} deals
                        <ChevronDown size={14} className="-rotate-90" />
                      </Link>
                    </div>
                  ))}
                  <div className="col-span-12 md:col-span-5 rounded-2xl bg-stone-50 border border-stone-100 p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Everyone welcome</p>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      Datashion is for kids, adults, and older shoppers — not a student-only club. Browse demo brands
                      like ABC and XYZ, then explore ongoing offers.
                    </p>
                    <Link
                      to={homeHash('featured-brands')}
                      className="inline-flex mt-4 text-sm font-semibold text-charcoal hover:text-gold transition-colors"
                      onClick={() => setOpenMega(null)}
                    >
                      See featured brands →
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Mobile / tablet drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden overflow-hidden border-b border-stone-100 bg-white shadow-md"
            >
              <div className="px-6 py-5 max-h-[70vh] overflow-y-auto">
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} className="border-b border-stone-100 last:border-0 py-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between text-left text-sm font-semibold text-charcoal py-1"
                      onClick={() => setMobileExpanded((v) => (v === cat.id ? null : cat.id))}
                    >
                      {cat.label}
                      <ChevronDown
                        size={18}
                        className={`text-stone-400 transition-transform ${mobileExpanded === cat.id ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileExpanded === cat.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-2 pt-2 flex flex-col gap-1">
                            {cat.subs.map((s) => (
                              <Link
                                key={s.label}
                                to={homeHash(s.hash)}
                                className="text-sm text-stone-500 hover:text-gold py-1.5"
                                onClick={() => setOpen(false)}
                              >
                                {s.label}
                              </Link>
                            ))}
                            <Link
                              to={homeHash(cat.hash)}
                              className="text-sm font-semibold text-gold py-2"
                              onClick={() => setOpen(false)}
                            >
                              View all →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="flex flex-col gap-3 pt-4">
                  <Link
                    to={homeHash('ongoing-offers')}
                    className="text-center text-sm font-semibold bg-gold/15 text-charcoal py-3 rounded-full"
                    onClick={() => setOpen(false)}
                  >
                    All deals
                  </Link>
                  <Link
                    to={homeHash('how-it-works')}
                    className="text-center text-sm font-medium text-stone-600 py-2"
                    onClick={() => setOpen(false)}
                  >
                    How it works
                  </Link>
                  <a
                    href="mailto:partnerships@datashion.co.uk"
                    className="text-center text-sm font-semibold bg-purple-950 text-white py-3 rounded-full"
                  >
                    Partner with us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
