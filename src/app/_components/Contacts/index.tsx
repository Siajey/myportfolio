import { Mail, Send, Play } from 'lucide-react'
import DotGrid from '@/components/ui/DotGrid'
import SectionHeading from '@/components/ui/SectionHeading'
import { socialLinks } from '@/data/social-links.data'

export default function Contacts() {
  return (
    <section className='container relative mx-auto px-4 py-24'>
      <SectionHeading title='contacts' />

      <div className='grid gap-10 lg:grid-cols-2 lg:items-center'>
        <p className='text-gray text-end'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>

        <div className='border border-gray/20 p-6 flex justify-between'>
          <div className='flex flex-col gap-3 text-sm text-gray '>
            <a
              href={socialLinks.email}
              className='flex items-center gap-2 transition duration-200 hover:text-primary'
            >
              <Play className='size-4' />
              Youtube
            </a>
          </div>

          <p className='mb-4 text-sm font-semibold text-white'>پیام بده</p>
        </div>
      </div>
    </section>
  )
}
