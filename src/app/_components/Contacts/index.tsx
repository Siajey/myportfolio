import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Contacts() {
  return (
    <section className='container relative mx-auto px-4 py-24'>
      <SectionHeading title='contacts' />

      <p className='mt-6 max-w-2xl text-gray'>
        Have a project in mind or looking for a front-end developer to join your
        team? Feel free to reach out. I’m always open to meaningful
        opportunities and fully remote roles.
      </p>

      <Link
        href='/contacts'
        className='mt-8 inline-block rounded-md border border-primary/50 px-5 py-2.5
          text-sm font-medium text-white transition duration-200 hover:bg-primary/10'
      >
        Get in Touch
      </Link>
    </section>
  )
}
