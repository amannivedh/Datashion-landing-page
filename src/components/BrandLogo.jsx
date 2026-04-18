export default function BrandLogo({ size = 'md' }) {
  const sz =
    size === 'lg'
      ? 'text-2xl md:text-[1.75rem]'
      : 'text-[1.45rem] md:text-[1.6rem]'

  return (
    <span
      className={`inline-flex items-stretch rounded-md overflow-hidden font-brand font-bold tracking-tight leading-none ${sz}`}
    >
      <span className="bg-white text-black px-2.5 py-1.5 flex items-center">data</span>
      <span className="bg-purple-950 text-white px-2.5 py-1.5 flex items-center">shion</span>
    </span>
  )
}
