import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  const links = [
    { href: '/#about',    label: 'About' },
    { href: '/#audience', label: 'Our Audience' },
    { href: '/#brands',   label: 'For Brands' },
  ]

  return (
    <>
      {/* Affiliate disclosure banner */}
      <div className="bg-charcoal text-white/70 text-center text-[11px] font-medium py-2 px-4 tracking-wide">
        This site contains affiliate links. We may earn a commission at no extra cost to you.{' '}
        <Link to="/affiliate-disclosure" className="text-gold underline hover:opacity-75 transition-opacity">
          Learn more
        </Link>
      </div>

      <motion.nav
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-stone-100 shadow-[0_1px_24px_rgba(0,0,0,0.06)]'
            : 'bg-white border-b border-stone-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[68px]">

          <Link to="/" className="font-serif text-[1.6rem] font-bold tracking-tight text-charcoal">
            data<span className="text-gold">shion</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[13px] font-medium text-stone-400 hover:text-charcoal tracking-wide transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="mailto:partnerships@datashion.co.uk"
              className="text-[13px] font-semibold bg-charcoal text-white px-5 py-2.5 rounded-full hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              Partner With Us
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-charcoal"
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

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden md:hidden border-t border-stone-100"
            >
              <div className="bg-white px-6 py-5 flex flex-col gap-4">
                {links.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-sm font-medium text-stone-600 hover:text-charcoal py-1"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="mailto:partnerships@datashion.co.uk"
                  className="mt-2 text-center text-sm font-semibold bg-charcoal text-white px-5 py-3 rounded-full"
                >
                  Partner With Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
