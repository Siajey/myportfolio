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
          <p className='text-lg font-semibold text-white'>سلام، من جی هستم!</p>

          <p className='mt-6 text-gray'>
            یک توسعه‌دهنده فرانت‌اند خودآموخته هستم که ساکن [شهر خودت] هستم.
            می‌تونم وب‌سایت‌های واکنش‌گرا رو از صفر بسازم و اون‌ها رو به
            تجربه‌های کاربری مدرن و کاربرپسند تبدیل کنم.
          </p>

          <p className='mt-4 text-gray'>
            تبدیل‌کردن خلاقیت و دانشم به وب‌سایت‌های واقعی، بیش از یک ساله که
            علاقه اصلی منه. به مشتری‌های مختلف کمک کردم تا حضور آنلاین خودشون رو
            شکل بدن. همیشه در تلاشم که جدیدترین تکنولوژی‌ها و فریم‌ورک‌ها رو یاد
            بگیرم.
          </p>

          <Link
            href='/about-me'
            className='mt-8 inline-block rounded-md border border-primary/50 px-5 py-2.5
              text-sm font-medium text-white transition duration-200 hover:bg-primary/10'
          >
            بیشتر بخون
          </Link>
        </div>

        <div className='relative flex justify-center lg:justify-end '>
          <DotGrid className='absolute -top-6 right-6  lg:grid' />
          <div
            className='absolute -left-6 bottom-10 hidden h-16 w-16 rotate-6 border
              border-primary/40 lg:block'
          />

          <div className='border-b border-primary/40'>
            <Image
              src={aboutImage}
              alt='Jey portrait'
              className='relative z-10 rounded-sm sm:w-80'
            />
          </div>

          <div
            className='absolute -left-1  bottom-20  h-16 w-16 rotate-6 border
              border-primary/40 lg:block'
          />

          <div
            className='absolute -left-1  bottom-1  h-16 w-16 rotate-6 border
              border-primary/40 hidden lg:block'
          />
        </div>
      </div>
    </section>
  )
}



