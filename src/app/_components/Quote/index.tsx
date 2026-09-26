export default function Quote() {
  return (
    <section className='container relative mx-auto px-4 py-24'>
      <div className='relative mx-auto max-w-3xl border border-gray/20 px-10 py-12'>
        <span className='absolute -top-7 left-8 font-mono text-6xl leading-none text-primary/70'>
          &ldquo;
        </span>

        <p className='text-center text-lg font-semibold text-white sm:text-xl'>
          The first step is to establish that something is possible; then probability will occur.
        </p>

        <span className='absolute -bottom-10 right-8 font-mono text-6xl leading-none text-primary/70'>
          &rdquo;
        </span>

        <div className='absolute -bottom-6 right-20 border border-gray/20 bg-background px-4 py-2 text-sm text-gray'>
          - Elon Musk
        </div>
      </div>

      <div
        className='absolute right-0 top-1/2 hidden h-24 w-24 -translate-y-1/2
          translate-x-1/2 border border-gray/20 lg:block'
      />
    </section>
  )
}

