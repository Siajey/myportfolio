import SectionHeading from '@/components/ui/SectionHeading'
import { socialLinks } from '@/data/social-links.data'
import { getContributionCalendar } from '@/services/github/github.service'

const githubUsername = socialLinks.github.split('/').filter(Boolean).pop()

function getLevelClass(count: number): string {
  if (count === 0) return 'bg-gray/10'
  if (count <= 2) return 'bg-primary/30'
  if (count <= 5) return 'bg-primary/60'
  return 'bg-primary'
}

export default async function GithubActivity() {
  if (!githubUsername) return null

  const calendar = await getContributionCalendar(githubUsername)

  if (!calendar) return null

  return (
    <div className='mt-20'>
      <SectionHeading title='github-activity' />

      <p className='mb-4 text-sm text-gray'>
        {calendar.totalContributions} contribution در یک سال گذشته
      </p>

      <div className='flex gap-1 overflow-x-auto  border-gray/20 p-4'>
        {calendar.weeks.map((week) => (
          <div
            key={week.contributionDays[0]?.date}
            className='flex flex-col gap-1'
          >
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
