import Image from 'next/image'
import Link from 'next/link'
import aboutImage from '@/assets/images/about.png'
import DotGrid from '@/components/ui/DotGrid'
import SectionHeading from '@/components/ui/SectionHeading'

export default function AboutMe() {
  return (
    <section className='container relative mx-auto px-4 py-24'>
      <SectionHeading title='about-me' />

      <div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
        <div>
          <p className='text-lg font-semibold text-white'>
            my full name is Siavash Mohammadjani{' '}
            <span className='text-primary'>(Jey)</span>{' '}
          </p>

          <p className='mt-6 text-gray'>
            I&apos;m a front-end developer seeking fully remote opportunities
            where I can contribute to meaningful projects that make a real
            difference in people&apos;s lives. I value continuous learning,
            thoughtful collaboration, and building products I&apos;m proud to
            help create. For me, the most rewarding work is developing something
            useful that leaves a positive impact long after it&apos;s built.
          </p>
          <Link
            href='/about-me'
            className='mt-8 inline-block rounded-md border border-primary/50 px-5 py-2.5
              text-sm font-medium text-white transition duration-200 hover:bg-primary/10'
          >
            find out more ...
          </Link>
        </div>

        <div className='relative flex justify-center lg:justify-end '>
          <DotGrid className='absolute -top-6 right-6  lg:grid' />

          <Image
            src={aboutImage}
            alt='Jey portrait'
            className='relative z-10 '
          />
        </div>
      </div>
    </section>
  )
}
