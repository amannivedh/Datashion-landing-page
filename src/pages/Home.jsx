import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Check, TrendingUp, Mail, MapPin, Users, BarChart2, ChevronDown, Zap, Filter, Navigation } from 'lucide-react'

// ─── Config ───────────────────────────────────────────────────────────────────
const ease = [0.25, 0.46, 0.45, 0.94]

const IMG = {
  hero:      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=85&w=2400&auto=format&fit=crop',
  mission:   'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=85&w=1400&auto=format&fit=crop',
  audience1: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
  audience2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  audience3: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
  break:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=85&w=2400&auto=format&fit=crop',
  cta:       'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=85&w=2400&auto=format&fit=crop',
}

// ─── Animation primitives ─────────────────────────────────────────────────────

function Reveal({ children, className, delay, y }) {
  const _delay = delay || 0
  const _y = y || 28
  const _class = className || ''
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: _y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay: _delay, ease }}
      className={_class}
    >
      {children}
    </motion.div>
  )
}

function StaggerGroup({ children, className, delay }) {
  const _class = className || ''
  const _delay = delay || 0
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px 0px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: _delay } } }}
      className={_class}
    >
      {children}
    </motion.div>
  )
}

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
}
function Item({ children, className }) {
  return <motion.div variants={itemVariant} className={className || ''}>{children}</motion.div>
}

function ParallaxImg({ src, alt, className, strength }) {
  const _strength = strength || 60
  const _class = className || ''
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-_strength / 2, _strength / 2])
  return (
    <div ref={ref} className={`overflow-hidden ${_class}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        initial={{ opacity: 0, scale: 1.06 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease }}
        viewport={{ once: true }}
        className="w-full h-full object-cover will-change-transform"
      />
    </div>
  )
}

function Counter({ to, prefix, suffix }) {
  const _prefix = prefix || ''
  const _suffix = suffix || ''
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const dur = 1800
    const step = (now) => {
      const t = Math.min((now - start) / dur, 1)
      const curved = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(curved * to))
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])
  return <span ref={ref}>{_prefix}{val.toLocaleString()}{_suffix}</span>
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={IMG.hero}
          alt="Fashion editorial"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="inline-flex items-center gap-2 border border-gold/40 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[11px] font-semibold text-gold tracking-widest uppercase">
            Launching Q3 2026
          </span>
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="font-serif text-white leading-[1.08] text-[clamp(2.8rem,7vw,5.5rem)]"
          >
            Fashion deals,
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.58, ease }}
            className="font-serif leading-[1.08] text-[clamp(2.8rem,7vw,5.5rem)]"
          >
            <span className="text-gold italic">localised for you.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease }}
          className="text-white/60 text-lg max-w-xl leading-relaxed mb-10"
        >
          A fashion-specific deal aggregator that surfaces promotions from UK and international
          retailers in one place — personalised by size, style, and location.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease }}
          className="flex flex-wrap gap-4 items-center"
        >
          <a
            href="mailto:partnerships@datashion.co.uk"
            className="inline-flex items-center gap-2 bg-gold text-charcoal font-bold px-7 py-3.5 rounded-full hover:bg-white transition-all duration-300 text-sm group"
          >
            Partner With Us
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 text-white/50 text-sm font-medium hover:text-white transition-colors"
          >
            Learn more <ChevronDown size={15} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 right-8 z-10"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  )
}

function MarqueeStrip() {
  const items = [
    'Fashion-Only Curation', 'Personalised by Size & Style', 'Location Aware',
    'Affiliate Commission Model', 'UK-Based Platform', 'Mobile-First Experience',
    'Weekly Digest', 'Brand Partnerships',
    'Fashion-Only Curation', 'Personalised by Size & Style', 'Location Aware',
    'Affiliate Commission Model', 'UK-Based Platform', 'Mobile-First Experience',
    'Weekly Digest', 'Brand Partnerships',
  ]
  return (
    <div className="border-y border-stone-100 py-4 overflow-hidden bg-white">
      <div className="flex w-max marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-5 px-5 text-[11px] font-semibold uppercase tracking-widest text-stone-300 whitespace-nowrap">
            {item}
            <span className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}

function MissionSection() {
  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
      <ParallaxImg
        src={IMG.mission}
        alt="Fashion shopping"
        className="h-[420px] lg:h-auto"
        strength={50}
      />
      <div className="bg-stone-50 flex items-center px-10 lg:px-16 py-20">
        <div className="max-w-lg">
          <Reveal>
            <span className="gold-line text-[11px] font-bold uppercase tracking-widest text-gold">
              What We Do
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] text-charcoal mt-2 mb-6 leading-tight">
              One destination for fashion deals that work for you.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-stone-500 leading-relaxed mb-5">
              Datashion is a fashion-specific, localised deal aggregator. Users set their location,
              style preferences, and size — and Datashion delivers a personalised feed of deals
              they can actually use, from UK and international fashion retailers in one place.
            </p>
            <p className="text-stone-500 leading-relaxed mb-8">
              The platform runs on an affiliate commission model: every click-through that results
              in a purchase earns Datashion a commission through established affiliate programmes
              with brands including ASOS, H&M, Zara, Pretty Little Thing, and others.
            </p>
          </Reveal>
          <StaggerGroup>
            {[
              'Fashion-only curation — no pizza deals or broadband offers',
              'Personalised filtering by size, style, and budget',
              'Location-aware — in-store and online deals combined',
              'Mobile-first, clean UX built for modern shoppers',
            ].map((text) => (
              <Item key={text} className="flex items-start gap-3 mb-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <Check size={10} className="text-gold" />
                </div>
                <p className="text-sm text-stone-600">{text}</p>
              </Item>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  const problems = [
    {
      icon: Zap,
      title: 'Deal Fragmentation',
      desc: 'Discounts are scattered across dozens of brand sites, voucher code aggregators like Honey and VoucherCodes, and student platforms like Unidays. None of them are fashion-first.',
    },
    {
      icon: Filter,
      title: 'Relevance Failure',
      desc: 'Generic deal sites serve every category. Fashion buyers wade through pizza deals and broadband offers to find anything wearable. Datashion is built exclusively for fashion.',
    },
    {
      icon: Navigation,
      title: 'Location Blindness',
      desc: 'Most deal platforms make no distinction between online-only discounts and in-store offers near the user. Datashion surfaces both — filtered by postcode.',
    },
  ]

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold block mb-4">
            The Problem We Solve
          </span>
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] text-white mb-4 leading-tight">
            Fashion consumers face three connected frustrations.
          </h2>
          <p className="text-white/40 leading-relaxed">
            No product currently combines fashion-only curation, personalised filtering, location
            awareness, and a clean mobile-first experience. That is Datashion's gap.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, title, desc }) => (
            <Item key={title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease }}
                className="border border-white/8 rounded-2xl p-8 bg-white/4 hover:bg-white/6 hover:border-gold/30 transition-all duration-300 h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-bold text-white text-base mb-3">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
              </motion.div>
            </Item>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2} className="mt-8">
          <div className="border border-gold/20 bg-gold/8 rounded-2xl px-8 py-6">
            <p className="text-white/70 text-sm leading-relaxed text-center max-w-3xl mx-auto">
              <strong className="text-gold">The Datashion gap: </strong>
              fashion-only curation + personalised filtering (size, style, budget) + location
              awareness + a clean, mobile-first experience — combined in one place, for the first time.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { label: 'Target users by Month 12',    to: 8000, suffix: '+' },
    { label: 'Email subscribers (Month 12)', to: 1200, suffix: '+' },
    { label: '12-month revenue target',     to: 30,   prefix: '£', suffix: 'k+' },
    { label: 'Months to break-even',        to: 12,   suffix: '' },
  ]
  return (
    <section className="bg-white py-20 border-y border-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold/70">
            By the Numbers
          </span>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-stone-100">
          {stats.map(({ label, to, prefix, suffix }) => (
            <div key={label} className="px-6 py-4 text-center">
              <div className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold text-charcoal mb-2">
                <Counter to={to} prefix={prefix} suffix={suffix} />
              </div>
              <p className="text-[12px] text-stone-400 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AudienceSection() {
  const cards = [
    {
      img: IMG.audience1,
      label: 'Primary Audience',
      title: 'Women 18–34',
      desc: 'Fashion-conscious, budget-aware, mobile-first. University students and young professionals shopping ASOS, H&M, Zara, Shein, and Mango.',
    },
    {
      img: IMG.audience2,
      label: 'Secondary Audience',
      title: 'Men 18–30',
      desc: 'Streetwear and mid-market buyers — a growing, underserved segment of fashion-aware, deal-seeking males across the UK.',
    },
    {
      img: IMG.audience3,
      label: 'Tertiary Audience',
      title: 'Fashion Enthusiasts',
      desc: 'Trend-trackers across all ages — early adopters and future customers for the Datashion own-label clothing line launching in Month 15–18.',
    },
  ]

  return (
    <section id="audience" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <span className="gold-line text-[11px] font-bold uppercase tracking-widest text-gold">
            Our Audience
          </span>
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] text-charcoal mt-2 mb-3">
            Deal-conscious fashion shoppers, aged 18–45.
          </h2>
          <p className="text-stone-500 leading-relaxed">
            Datashion targets the most active fashion consumers in the UK — mobile-first,
            brand-aware, and always looking for value. This is the audience your brand reaches.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ img, label, title, desc }) => (
            <Item key={title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease }}
                className="group rounded-2xl overflow-hidden border border-stone-100 bg-white shadow-sm hover:shadow-xl hover:shadow-stone-200/60 transition-shadow duration-500"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold block mb-2">
                    {label}
                  </span>
                  <h3 className="font-bold text-charcoal text-base mb-2">{title}</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            </Item>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

function ImageBreak() {
  return (
    <div className="relative h-[420px] md:h-[520px] overflow-hidden">
      <ParallaxImg
        src={IMG.break}
        alt="Fashion editorial"
        className="absolute inset-0 w-full h-full"
        strength={80}
      />
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <Reveal y={20}>
          <p className="font-serif italic text-white text-[clamp(1.4rem,3.5vw,2.4rem)] max-w-2xl leading-snug">
            "Fashion, data-driven."
          </p>
          <p className="text-white/40 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Beyond the platform: Datashion accumulates audience data, trend intelligence,
            and market credibility — the foundation for an own-label clothing line within 12–18 months.
          </p>
        </Reveal>
      </div>
    </div>
  )
}

function PromoteSection() {
  const channels = [
    {
      num: '01',
      title: 'Dedicated Brand Pages',
      desc: 'Every partner brand gets a dedicated page ranking organically on Google for brand-related deal queries — a persistent, high-intent traffic source.',
    },
    {
      num: '02',
      title: 'Personalised Deal Feed',
      desc: "Your brand surfaces in users' personalised feeds, matched against their exact size, style preference, and budget — maximising relevance and CTR.",
    },
    {
      num: '03',
      title: 'Weekly Email Digest',
      desc: 'Our subscriber newsletter delivers curated brand features to high-intent shoppers every week. Featured placements available as the list scales.',
    },
    {
      num: '04',
      title: 'SEO Content',
      desc: 'Brand spotlights, trend articles, and category round-ups optimised for fashion search queries — building long-term, compounding organic traffic.',
    },
    {
      num: '05',
      title: 'Social Media',
      desc: 'TikTok and Instagram content showcasing brand stories, styling features, and promotions — organic-first with paid amplification as reach grows.',
    },
    {
      num: '06',
      title: 'Wishlist Alerts',
      desc: "Users who save your brand are notified the moment a new promotion goes live — a high-conversion push to a warm, interested audience.",
    },
  ]

  return (
    <section id="brands" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-xl mb-14">
          <span className="gold-line text-[11px] font-bold uppercase tracking-widest text-gold">
            For Brands
          </span>
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] text-charcoal mt-2 mb-3">
            How we connect your brand with our audience.
          </h2>
          <p className="text-stone-500 leading-relaxed">
            We promote partner brands across multiple high-intent channels — reaching shoppers at
            exactly the moment they are looking to buy.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {channels.map(({ num, title, desc }) => (
            <Item key={num}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease }}
                className="border border-stone-200 rounded-2xl p-8 bg-white hover:border-gold hover:shadow-lg hover:shadow-gold/8 transition-all duration-300 h-full group"
              >
                <span className="font-serif text-[2.4rem] font-bold text-stone-100 group-hover:text-gold/25 transition-colors block mb-3">
                  {num}
                </span>
                <h3 className="font-bold text-sm text-charcoal mb-2">{title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed">{desc}</p>
              </motion.div>
            </Item>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}

function NetworksSection() {
  const networks = [
    { name: 'Awin',                desc: 'Primary network' },
    { name: 'Impact.com',          desc: 'Premium brands' },
    { name: 'Rakuten',             desc: 'International reach' },
    { name: 'Commission Junction', desc: 'Global retailers' },
  ]

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold block mb-3">
            Affiliate Networks
          </span>
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] text-white mb-3">
            Operating across all major networks.
          </h2>
          <p className="text-white/40 leading-relaxed text-sm">
            Datashion works through the established affiliate networks that power the fashion
            industry — making it straightforward for brands to partner through their existing
            programme infrastructure.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {networks.map(({ name, desc }) => (
            <Item key={name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="border border-white/8 rounded-2xl py-8 px-5 text-center bg-white/4 hover:bg-white/6 hover:border-gold/30 transition-all duration-200 cursor-default"
              >
                <span className="font-bold text-white text-base block mb-1">{name}</span>
                <span className="text-[11px] text-white/30">{desc}</span>
              </motion.div>
            </Item>
          ))}
        </StaggerGroup>

        <Reveal>
          <div className="bg-gold/10 border border-gold/20 rounded-2xl px-8 py-6 text-center">
            <p className="text-white/60 text-sm max-w-2xl mx-auto leading-relaxed">
              <strong className="text-gold">Already on one of these networks?</strong>{' '}
              Applying to partner with Datashion is straightforward through your existing
              affiliate programme. Reach out and we will guide you through the process.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function StatementSection() {
  const facts = [
    ['Platform type',     'Fashion discount aggregator'],
    ['Primary market',    'UK consumers, all age groups'],
    ['Traffic channels',  'SEO, social media, weekly newsletter'],
    ['Target audience',   'Deal-conscious shoppers aged 18–45'],
    ['Promotion methods', 'Brand pages, featured placements, email'],
    ['Strategic vision',  'Own-label clothing line by Month 15–18'],
    ['Launch target',     'Q3 2026'],
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <span className="gold-line text-[11px] font-bold uppercase tracking-widest text-gold">
                Who We Are
              </span>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] text-charcoal mt-2 mb-5">
                Built for brands.<br />Loved by shoppers.
              </h2>
              <p className="text-stone-500 leading-relaxed mb-8">
                Datashion's core strategic purpose is twofold: to build a profitable standalone
                product, and to accumulate the audience data, trend intelligence, and market
                credibility needed to launch an own-label clothing line within 12–18 months.
              </p>
            </Reveal>
            <StaggerGroup>
              {facts.map(([k, v]) => (
                <Item key={k} className="flex items-start gap-4 py-3 border-b border-stone-100 last:border-0">
                  <span className="text-stone-300 min-w-[160px] text-sm font-medium">{k}</span>
                  <span className="text-charcoal text-sm font-semibold">{v}</span>
                </Item>
              ))}
            </StaggerGroup>
          </div>

          <Reveal delay={0.15}>
            <div className="bg-charcoal rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold/8 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-[10px] font-semibold text-white/40 uppercase tracking-widest">
                  Our Affiliate Application Statement
                </span>
              </div>
              <blockquote className="text-white/75 text-[15px] leading-relaxed italic border-l-2 border-gold pl-5 mb-10 relative z-10">
                "Datashion is a fashion discount aggregator targeting all age groups, helping
                consumers find verified deals and offers from leading fashion retailers in one
                place. We drive traffic through SEO content, social media, and a weekly newsletter.
                Our audience is deal-conscious fashion shoppers aged 18–45. We plan to promote
                brands through dedicated discount pages, featured placements, and email campaigns."
              </blockquote>
              <div className="border-t border-white/10 pt-6 space-y-3 relative z-10">
                {[
                  { Icon: Users,      label: 'High-intent fashion audience' },
                  { Icon: BarChart2,  label: 'Multi-channel promotion strategy' },
                  { Icon: TrendingUp, label: 'Organic SEO + paid social growth' },
                  { Icon: Mail,       label: 'Owned, growing email subscriber list' },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-sm text-white/45">
                    <Icon size={13} className="text-gold flex-shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="relative h-[520px] flex items-center justify-center overflow-hidden">
      <ParallaxImg
        src={IMG.cta}
        alt="Fashion partnership"
        className="absolute inset-0 w-full h-full"
        strength={70}
      />
      <div className="absolute inset-0 bg-charcoal/65" />
      <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
        <Reveal y={20}>
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold block mb-4">
            Get In Touch
          </span>
          <h2 className="font-serif text-white text-[clamp(2rem,4.5vw,3.2rem)] mb-5 leading-tight">
            Ready to reach our audience?
          </h2>
          <p className="text-white/50 mb-8 text-base leading-relaxed">
            Whether you manage a brand programme, affiliate network, or content partnership —
            we would love to talk.
          </p>
          <motion.a
            href="mailto:partnerships@datashion.co.uk"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 bg-gold text-charcoal font-bold px-8 py-4 rounded-full text-sm group"
          >
            Email Our Partnerships Team
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <p className="text-white/25 text-xs mt-4">partnerships@datashion.co.uk</p>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <MissionSection />
      <ProblemSection />
      <StatsSection />
      <AudienceSection />
      <ImageBreak />
      <PromoteSection />
      <NetworksSection />
      <StatementSection />
      <CTASection />
    </>
  )
}
