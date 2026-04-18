import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Baby,
  Users,
  HeartHandshake,
} from 'lucide-react'

const ease = [0.25, 0.46, 0.45, 0.94]

/** Encode filenames for `/public` assets (spaces, parentheses, etc.). */
function pub(file) {
  return `/${encodeURIComponent(file)}`
}

const IMG = {
  hero: pub('front page.jpg'),
}

/** Local `/public` images matched to each demo retailer (template only). */
const COVER = {
  hero: IMG.hero,
  womens: pub('womes fashion.jpeg'),
  mens: pub('mens fashion.jpg'),
  denim: pub('download (1).jpg'),
  footwear: pub('healthcare.jpg'),
  skincare: pub('skincare.jpg'),
  interior: pub('interior.jpg'),
  kids: pub('kids.jpg'),
  travel: pub('travel.jpg'),
  grocery: pub('Grocery.jpg'),
}

/** Demo-only retailers & offers (placeholders — not real brands). */
const FEATURED_BRANDS = [
  { name: 'ABC Fashion', offer: '15% off full price', cover: COVER.womens },
  { name: 'RST Mens', offer: '£10 off £60 spend', cover: COVER.mens },
  { name: 'QRS Older Adults', offer: 'Extra 10% this week', cover: COVER.denim },
  { name: 'MNO Health', offer: 'Up to 25% off', cover: COVER.footwear },
  { name: 'OPQ Skinlab', offer: 'Gift with purchase', cover: COVER.skincare },
  { name: 'LMN Interiors', offer: 'Bundle & save', cover: COVER.interior },
]

const FASHION_OFFERS = [
  { brand: 'ABC Fashion', title: 'ABC Fashion, 15% off online', detail: 'Applies to new lines · Demo', tag: null, cover: COVER.womens },
  { brand: 'RST Mens', title: 'RST Mens, £10 off £60', detail: 'Auto at checkout · Demo', tag: 'Popular', cover: COVER.mens },
  { brand: 'QRS Older Adults', title: 'QRS Older Adults, extra 10%', detail: 'Limited time · Demo', tag: null, cover: COVER.denim },
  { brand: 'MNO Health', title: 'MNO Health, up to 25% off', detail: 'Health & wellbeing · Demo', tag: 'Exclusive', cover: COVER.footwear },
]

const BEAUTY_OFFERS = [
  { brand: 'OPQ Skinlab', title: 'OPQ Skinlab, free mini set', detail: 'Spend £45+ · Demo', tag: null, cover: COVER.skincare },
  { brand: 'OPQ Skinlab', title: 'OPQ Skinlab, 20% off first order', detail: 'New customers · Demo', tag: 'New', cover: COVER.skincare },
  { brand: 'OPQ Skinlab', title: 'OPQ Skinlab, members save more', detail: 'Join free · Demo', tag: null, cover: COVER.skincare },
]

const KIDS_OFFERS = [
  { brand: 'TYU.Kids', title: 'TYU.Kids, 3-for-2 on basics', detail: 'Uniform-friendly · Demo', cover: COVER.kids },
  { brand: 'XYZ Foods', title: 'XYZ Foods, bundle savings', detail: 'Family packs · Demo', cover: COVER.grocery },
]

const JUST_IN = [
  { brand: 'LMN Interiors', title: 'LMN Interiors, spring refresh bundles', detail: 'Home & lifestyle · Demo', cover: COVER.interior },
  { brand: 'MNO Tech Gear', title: 'MNO Tech Gear, 12% off accessories', detail: 'Tech · Demo', cover: COVER.denim },
  { brand: 'TYU.Kids', title: 'TYU.Kids, multibuy on basics', detail: 'Kids & family · Demo', cover: COVER.kids },
  { brand: 'WHU Travel', title: 'WHU Travel, early booking perk', detail: 'Getaways · Demo', cover: COVER.travel },
]

const SHOP_BY_AGE = [
  {
    title: 'Kids & teens',
    desc: 'Schoolwear, trainers, and budget-friendly basics — sized and sorted for growing shoppers.',
    icon: Baby,
    href: '#kids-family',
    cover: COVER.kids,
  },
  {
    title: 'Adults',
    desc: 'Workwear, streetwear, beauty, and everyday essentials — personalised by style and location.',
    icon: Users,
    href: '#fashion',
    cover: COVER.womens,
  },
  {
    title: 'Older adults',
    desc: 'Comfort-first picks and practical deals — same hub as everyone else, with templates tuned for mature shoppers.',
    icon: HeartHandshake,
    href: '#fashion',
    cover: COVER.denim,
  },
]

function Reveal({ children, className, delay, y }) {
  const _delay = delay || 0
  const _y = y || 24
  const _class = className || ''
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: _y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: _delay, ease }}
      className={_class}
    >
      {children}
    </motion.div>
  )
}

function SectionHeading({ eyebrow, title, subtitle, action, dark }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
      <div>
        {eyebrow && (
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold block mb-2">
            {eyebrow}
          </span>
        )}
        <h2
          className={`font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-tight ${
            dark ? 'text-white' : 'text-charcoal'
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-sm mt-2 max-w-xl leading-relaxed ${
              dark ? 'text-white/50' : 'text-stone-500'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  )
}

function BrandCircle({ name, offer, cover }) {
  return (
    <motion.a
      href="#ongoing-offers"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease }}
      className="flex-shrink-0 w-[140px] sm:w-[160px] group snap-start"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-200 shadow-md border border-stone-200/80 mb-3">
        <img src={cover} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 bg-purple-950/75 backdrop-blur-sm px-3 py-2">
          <p className="text-[10px] font-semibold text-gold uppercase tracking-wider truncate">{offer}</p>
        </div>
      </div>
      <p className="text-xs font-semibold text-charcoal text-center group-hover:text-gold transition-colors line-clamp-2">
        {name}
      </p>
    </motion.a>
  )
}

function OfferRow({ brand, title, detail, tag, cover }) {
  return (
    <motion.a
      href="#ongoing-offers"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="flex items-start gap-4 py-4 border-b border-stone-100 last:border-0 group"
    >
      {cover ? (
        <img
          src={cover}
          alt=""
          className="w-14 h-14 rounded-xl object-cover flex-shrink-0 bg-stone-100"
        />
      ) : (
        <div className="w-14 h-14 rounded-xl bg-stone-100 flex items-center justify-center flex-shrink-0 text-xs font-bold text-charcoal">
          {brand.slice(0, 2).toUpperCase()}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-charcoal group-hover:text-gold transition-colors">
          {title}
        </p>
        <p className="text-xs text-stone-400 mt-0.5">{detail}</p>
      </div>
      {tag && (
        <span className="text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-2 py-1 rounded-md flex-shrink-0">
          {tag}
        </span>
      )}
      <ChevronRight size={18} className="text-stone-300 group-hover:text-gold flex-shrink-0 mt-1" />
    </motion.a>
  )
}

function JustInCard({ brand, title, detail, cover }) {
  return (
    <motion.a
      href="#ongoing-offers"
      whileHover={{ y: -3 }}
      className="block rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm hover:border-gold/40 hover:shadow-md transition-all"
    >
      <div className="aspect-[16/10] w-full bg-stone-100">
        <img src={cover} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">{brand}</p>
        <p className="text-sm font-semibold text-charcoal leading-snug">{title}</p>
        <p className="text-xs text-stone-400 mt-2">{detail}</p>
      </div>
    </motion.a>
  )
}

function DealHero() {
  const marqueeBrands = [...FEATURED_BRANDS, ...FEATURED_BRANDS]

  return (
    <section className="relative min-h-[88vh] flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={IMG.hero}
          alt="Datashion — fashion deals for every age"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/70 to-purple-950/25" />
      </div>

      <div className="relative z-10 flex flex-col flex-1 min-h-0">
        <div className="max-w-6xl mx-auto w-full px-6 pb-10 pt-28 md:pt-36 flex flex-col justify-end flex-1">
          <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 mb-6 backdrop-blur-md"
        >
          <Sparkles size={14} className="text-gold" />
          <span className="text-[11px] font-semibold text-white/90 tracking-wide">
            Demo preview · Offers & retailers are placeholders
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease }}
          className="font-serif text-white text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.1] max-w-3xl"
        >
          Save on fashion &amp; more — for{' '}
          <span className="text-gold italic">every age</span>, localised for you.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.65, ease }}
          className="text-white/65 text-base md:text-lg max-w-xl mt-5 leading-relaxed"
        >
          Like student deal hubs, but built for everyone: kids, adults, and older shoppers.
          Browse demo brands, spot ongoing offers, and see how Datashion will feel at launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.65, ease }}
          className="flex flex-wrap gap-3 mt-8"
        >
          <a
            href="#all-ages"
            className="inline-flex items-center gap-2 bg-gold text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-white hover:text-purple-950 transition-colors"
          >
            Start browsing
            <ArrowRight size={16} />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 border border-white/25 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/10 transition-colors"
          >
            How Datashion works
          </a>
          </motion.div>
        </div>

        <div
          id="featured-brands"
          className="relative z-10 w-full border-t border-white/20 bg-white/95 backdrop-blur-md shadow-[0_-12px_40px_rgba(0,0,0,0.08)]"
        >
          <div className="max-w-6xl mx-auto px-6 pt-4 pb-2 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gold">Featured brands</p>
              <p className="text-xs text-stone-500 mt-1 max-w-md hidden sm:block">
                Demo retailers — auto-scrolling strip inspired by deal hubs like{' '}
                <a
                  href="https://www.myunidays.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline hover:opacity-80"
                >
                  UNiDAYS
                </a>
                .
              </p>
            </div>
            <a href="#ongoing-offers" className="text-xs font-semibold text-gold whitespace-nowrap hover:underline">
              View offers →
            </a>
          </div>
          <div className="overflow-hidden pb-5 pt-1">
            <div className="featured-brands-marquee-track gap-4 items-center pr-6">
              {marqueeBrands.map((b, i) => (
                <BrandCircle key={`${b.name}-${i}`} name={b.name} offer={b.offer} cover={b.cover} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ShopByAgeSection() {
  return (
    <section id="all-ages" className="bg-stone-50 py-14 md:py-16 border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            eyebrow="All ages welcome"
            title="Everyone saves here — not just students"
            subtitle="No campus email or student verification: kids, adults, and older shoppers all use the same Datashion-style deal feed. Pick a life stage to jump into demo offers."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SHOP_BY_AGE.map(({ title, desc, icon: Icon, href, cover }) => (
            <motion.a
              key={title}
              href={href}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm hover:border-gold/35 hover:shadow-md transition-all"
            >
              <div className="aspect-[16/10] w-full bg-stone-100">
                <img src={cover} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-bold text-charcoal text-base mb-2">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold mt-4">
                  View demo deals <ChevronRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function FashionDealsSection() {
  return (
    <section id="fashion" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Fashion"
            title="Trending fashion offers (demo)"
            subtitle="Brand rows with short offer copy — the same rhythm as category hubs on major discount platforms."
            action={
              <a
                href="#ongoing-offers"
                className="text-sm font-semibold text-gold inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                View all demo offers <ChevronRight size={16} />
              </a>
            }
          />
        </Reveal>
        <div className="rounded-2xl border border-stone-200 bg-stone-50/50 px-4 md:px-6">
          {FASHION_OFFERS.map((o) => (
            <OfferRow key={o.title} {...o} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BeautyDealsSection() {
  return (
    <section id="beauty" className="py-14 md:py-20 bg-stone-50 border-y border-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Beauty"
            title="Skincare, makeup & fragrance (demo)"
            subtitle="Parallel category lane — expandable to sub-departments later (makeup, skincare, tools, etc.)."
            action={
              <a href="#just-in" className="text-sm font-semibold text-gold inline-flex items-center gap-1">
                Just in <ChevronRight size={16} />
              </a>
            }
          />
        </Reveal>
        <div className="rounded-2xl border border-stone-200 bg-white px-4 md:px-6 shadow-sm">
          {BEAUTY_OFFERS.map((o) => (
            <OfferRow key={o.title} {...o} />
          ))}
        </div>
      </div>
    </section>
  )
}

function KidsFamilySection() {
  return (
    <section id="kids-family" className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Kids & family"
            title="Demo picks for younger shoppers"
            subtitle="School staples, trainers, and multibuys — shown here as sample rows until real merchant feeds connect."
          />
        </Reveal>
        <div className="rounded-2xl border border-stone-200 bg-stone-50/50 px-4 md:px-6">
          {KIDS_OFFERS.map((o) => (
            <OfferRow key={o.title} {...o} />
          ))}
        </div>
      </div>
    </section>
  )
}

function JustInSection() {
  return (
    <section id="just-in" className="py-14 md:py-20 bg-purple-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            dark
            eyebrow="Just in"
            title="Fresh offers this week (demo)"
            subtitle="Rotating tiles for new promotions — mirrors the “Just In” lane on large deal aggregators."
            action={
              <a
                href="#ongoing-offers"
                className="text-sm font-semibold text-gold inline-flex items-center gap-1"
              >
                See ongoing <ChevronRight size={16} />
              </a>
            }
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {JUST_IN.map((j) => (
            <JustInCard key={j.title} {...j} />
          ))}
        </div>
      </div>
    </section>
  )
}

function OngoingOffersHub() {
  return (
    <section id="ongoing-offers" className="py-14 md:py-20 bg-white border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            eyebrow="All offers"
            title="Ongoing promotions — combined view (demo)"
            subtitle="At launch, this becomes your personalised feed: filtered by size, style, postcode, and age group."
          />
        </Reveal>
        <div className="rounded-2xl border border-stone-200 divide-y divide-stone-100 overflow-hidden">
          {[...FASHION_OFFERS, ...BEAUTY_OFFERS].map((o) => (
            <div key={o.title} className="bg-white hover:bg-stone-50/80 transition-colors">
              <OfferRow {...o} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      n: '01',
      title: 'Tell us who you shop for',
      body: 'Age range, sizes, and location — so online and nearby offers stay relevant.',
    },
    {
      n: '02',
      title: 'Browse curated deals',
      body: 'Fashion-first lanes (plus beauty & lifestyle), without wading through unrelated categories.',
    },
    {
      n: '03',
      title: 'Save brands & get alerts',
      body: 'Wishlist retailers and get nudges when new promos land — demo behaviour on this preview.',
    },
  ]
  return (
    <section id="how-it-works" className="py-14 md:py-20 bg-stone-50 border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Simple flow — inspired by leading deal hubs"
            subtitle="The same “discover → save → redeem” rhythm you know from platforms like UNiDAYS, opened up to all ages."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ n, title, body }) => (
            <div key={n} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <span className="font-serif text-3xl font-bold text-gold/30">{n}</span>
              <h3 className="font-bold text-charcoal mt-2 mb-2">{title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-8 text-center max-w-2xl mx-auto leading-relaxed">
          Layout and category patterns are influenced by public deal-aggregator experiences such as{' '}
          <a
            href="https://www.myunidays.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline hover:opacity-80"
          >
            UNiDAYS
          </a>
          . Datashion is an independent preview and is not affiliated with UNiDAYS.
        </p>
      </div>
    </section>
  )
}

function PartnersStrip() {
  return (
    <section id="partners" className="py-14 md:py-16 bg-purple-950 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold">For brands</span>
          <h2 className="font-serif text-2xl md:text-3xl mt-2 mb-2">List your promotions on Datashion</h2>
          <p className="text-white/50 text-sm max-w-lg leading-relaxed">
            Retailers on affiliate networks can surface offers beside demo tiles like ABC and XYZ — reach every age group, not only students.
          </p>
        </div>
        <a
          href="mailto:partnerships@datashion.co.uk"
          className="inline-flex items-center gap-2 bg-gold text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-white hover:text-purple-950 transition-colors flex-shrink-0"
        >
          Partner with us
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <DealHero />
      <ShopByAgeSection />
      <FashionDealsSection />
      <BeautyDealsSection />
      <KidsFamilySection />
      <JustInSection />
      <OngoingOffersHub />
      <HowItWorksSection />
      <PartnersStrip />
    </>
  )
}
