import SectionHeading from '@/components/ui/SectionHeading'
import { socialLinks } from '@/data/social-links.data'
import { getContributionCalendar } from '@/services/github/github.service'

// یوزرنیم گیتهاب رو از لینک پروفایل (socialLinks.github) استخراج می‌کنیم
// تا فقط یک جای کد (social-links.data.ts) مسئول این مقدار باشه.
const githubUsername = socialLinks.github.split('/').filter(Boolean).pop()

// بر اساس تعداد contribution های یک روز، شدت رنگ بنفش رو مشخص می‌کنه.
// به جای رنگ سبز خود گیتهاب، همون رنگ اصلی (primary) سایت رو استفاده می‌کنیم.
function getLevelClass(count: number): string {
  if (count === 0) return 'bg-gray/10'
  if (count <= 2) return 'bg-primary/30'
  if (count <= 5) return 'bg-primary/60'
  return 'bg-primary'
}

// چون این کامپوننت خودش async هست (یعنی منتظر fetch می‌مونه)،
// باید یک Server Component باشه - این دقیقاً همون چیزیه که قبلاً درباره‌ش توضیح دادم.
export default async function GithubActivity() {
  if (!githubUsername) return null

  const calendar = await getContributionCalendar(githubUsername)

  // اگه توکن تعریف نشده بود یا درخواست با خطا مواجه شد، calendar برابر null می‌شه
  // و به‌جای نشون‌دادن یک بخش خراب، کل بخش رو مخفی می‌کنیم.
  if (!calendar) return null

  return (
    <div className='mt-20'>
      <SectionHeading title='github-activity' />

      <p className='mb-4 text-sm text-gray'>
        {calendar.totalContributions} contribution در یک سال گذشته
      </p>

      <div className='flex gap-1 overflow-x-auto border border-gray/20 p-4'>
        {calendar.weeks.map((week) => (
          <div key={week.contributionDays[0]?.date} className='flex flex-col gap-1'>
            {week.contributionDays.map((day) => (
              <div
                key={day.date}
                title={`${day.date}: ${day.contributionCount} contribution`}
                className={`size-2.5 rounded-sm ${getLevelClass(day.contributionCount)}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
