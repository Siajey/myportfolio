import SectionHeading from '@/components/ui/SectionHeading'
import { socialLinks } from '@/data/social-links.data'

// یوزرنیم گیتهاب رو از لینک پروفایل (socialLinks.github) استخراج می‌کنیم
// تا فقط یک جای کد (social-links.data.ts) مسئول این مقدار باشه.
const githubUsername = socialLinks.github.split('/').filter(Boolean).pop()

export default function GithubActivity() {
  if (!githubUsername) return null

  return (
    <div className='mt-20'>
      <SectionHeading title='github-activity' />

      <div className='overflow-x-auto border border-gray/20 p-4'>
        {/* این یک سرویس رایگان و عمومی برای ساخت تصویر(SVG) نمودار فعالیت گیتهابه؛
            یعنی خودمون API صدا نمی‌زنیم، فقط یک عکس رو از آدرس این سرویس لود می‌کنیم.
            next/image اینجا استفاده نشده چون این عکس یک SVG داینامیک از یک دامنه‌ی
            خارجیه که از قبل نمی‌دونیم اندازه‌اش چقدره. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://ghchart.rshah.org/c778dd/${githubUsername}`}
          alt={`${githubUsername}'s GitHub contribution graph`}
          className='mx-auto min-w-[600px]'
        />
      </div>
    </div>
  )
}
