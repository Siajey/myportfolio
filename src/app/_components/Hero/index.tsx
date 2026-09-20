import Image from 'next/image'
import Link from 'next/link'
import heroImage from '@/assets/images/hero.png'
import DotGrid from '@/components/ui/DotGrid'
import SocialSidebar from './SocialSidebar'

export default function Hero() {
  return (
    <section className='relative pt-40'>
      <SocialSidebar className='sticky top-40 ml-4 hidden lg:flex lg:ml-10' />

      <div
        className='container mx-auto flex flex-col items-center gap-16 px-4
          lg:flex-row lg:items-start lg:justify-center'
      >
        {/* Paragraph Section */}
        <div className='max-w-xl'>
          <h1 className='text-3xl font-bold leading-snug text-white sm:text-4xl'>
            Jey is a <span className='text-primary'>web developer</span> and{' '}
            <span className='text-primary'>front-end coder</span>
          </h1>

          <p className='mt-6 text-gray'>
            He crafts responsive websites where technologies meet creativity
          </p>

          <Link
            href='/contacts'
            className='mt-8 inline-block rounded-md border border-primary/50 px-5 py-2.5 text-sm
              font-medium text-white transition duration-200 hover:bg-primary/10'
          >
            Contact me !!
          </Link>
        </div>

        {/* Image Section */}
        <div className='relative shrink-0'>
          <div className='absolute -left-8 -top-8 h-28 w-28 rotate-6 border border-primary/40' />
          <div className='absolute -left-4 -top-4 h-20 w-20 -rotate-3 border border-primary/60' />
          <DotGrid className='absolute -right-10 top-10' />

          <Image
            src={heroImage}
            alt='Jey portrait'
            priority
            className='relative z-10 w-64 rounded-sm sm:w-80'
          />

          <div
            className='relative z-10 mt-4 flex items-center gap-2 rounded-md border
              border-gray/20 bg-background px-4 py-2 text-sm text-gray'
          >
            <span className='size-2 shrink-0 bg-primary' />
            Currently working on{' '}
            <span className='font-semibold text-white'>Portfolio</span>
          </div>
        </div>
      </div>
    </section>
  )
}
