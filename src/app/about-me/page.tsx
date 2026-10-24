import { Download } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import aboutImage from '@/assets/images/about-me.png'
import DotGrid from '@/components/ui/DotGrid'
import SectionHeading from '@/components/ui/SectionHeading'
import { skillsData } from '@/data/skills.data'
import Experience from '@/app/_components/Experience'
import GithubActivity from '@/app/_components/GithubActivity'

export const metadata: Metadata = {
  title: 'About | Jey',
  description: 'More about who I am and what I work with',
}

export default function AboutMePage() {
  return (
    <main className='container mx-auto px-4 pb-24 pt-32'>
      <SectionHeading title='about-me' />

      <div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
        <div>
          <p className='text-lg font-semibold text-white'>more personal</p>

          <p className='mt-6 text-gray'>
            I&apos;m a self-taught front-end developer based in Iran, with
            Kurdish heritage and a strong passion for technology and continuous
            learning. I&apos;m naturally curious, empathetic, and open to
            different perspectives. I enjoy connecting with people, exchanging
            ideas, and helping others understand complex topics in simple,
            practical ways. This also inspired me to start creating educational
            content on YouTube, where I share what I learn with others. For me,
            growth is a daily process. I believe in learning from challenges,
            improving my mindset, and focusing on solutions rather than getting
            stuck on problems. Every new skill I develop strengthens my
            confidence and motivates me to keep moving forward. Outside of
            development, I&apos;m an avid gamer who enjoys the challenges and
            teamwork of online multiplayer games. I see curiosity, persistence,
            and a willingness to learn as qualities that shape both who I am and
            the developer I aspire to be.
          </p>

          <a
            href='/resume.pdf'
            download
            className='mt-8 inline-flex items-center gap-2 rounded-md border border-primary/50
    px-5 py-2.5 text-sm font-medium text-white transition duration-200 hover:bg-primary/10'
          >
            <Download className='size-4' />
            Download Resume
          </a>
        </div>

        <div className='relative flex justify-center lg:justify-end'>
          <DotGrid className='absolute -top-6 right-6 hidden lg:grid' />
          <div
            className='absolute -left-6 bottom-10 hidden h-16 w-16 rotate-6 border
              border-primary/40 lg:block'
          />

          <Image
            src={aboutImage}
            alt='Jey portrait'
            className='relative z-10'
          />
        </div>
      </div>

      <div className='mt-20'>
        <SectionHeading title='my-skills' />

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {skillsData.map((category) => (
            <div key={category.title} className='border border-gray/20 p-4'>
              <h3 className='mb-2 text-sm font-semibold text-white'>
                {category.title}
              </h3>
              <p className='text-sm text-gray'>{category.items.join(' - ')}</p>
            </div>
          ))}
        </div>
      </div>
      <Experience />
      <GithubActivity />
    </main>
  )
}
