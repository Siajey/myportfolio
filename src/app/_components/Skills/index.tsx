import DotGrid from '@/components/ui/DotGrid'
import SectionHeading from '@/components/ui/SectionHeading'
import { skillsData } from '@/data/skills.data'

export default function Skills() {
  return (
    <section className='container relative mx-auto px-4 py-24'>
      <SectionHeading title='skills' />

      <div className='grid gap-10 lg:grid-cols-[1fr_2fr]'>
        {/* Ornamental section */}
        <div className='relative hidden h-64 lg:block'>
          <DotGrid className='absolute left-4 top-4' />
          <div className='absolute left-24 top-10 h-16 w-16 rotate-6 border border-gray/20' />
          <DotGrid className='absolute bottom-4 left-4 grid-cols-6' />
          <div className='absolute bottom-10 left-32 h-12 w-12 -rotate-6 border border-primary/40' />
        </div>

        {/*skills category sections*/}
        <div className='grid gap-4 sm:grid-cols-2'>
          {skillsData.map((category) => (
            <div key={category.title} className='border border-gray/20 p-4'>
              <h3 className='mb-2 text-sm font-semibold text-white'>
                {category.title}
              </h3>
              <p className='text-sm text-gray'>{category.items.join(' ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
