export interface ContributionDay {
  date: string
  contributionCount: number
}

export interface ContributionWeek {
  contributionDays: ContributionDay[]
}

export interface ContributionCalendar {
  totalContributions: number
  weeks: ContributionWeek[]
}

// گیتهاب این اطلاعات رو فقط از طریق GraphQL میده (نه REST ساده)،
// برای همین به‌جای یک آدرس با پارامتر، یک query متنی می‌فرستیم.
const CONTRIBUTIONS_QUERY = `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`

export async function getContributionCalendar(
  username: string
): Promise<ContributionCalendar | null> {
  const token = process.env.GITHUB_TOKEN

  // اگه توکن تعریف نشده باشه، به‌جای کرش‌کردن کل صفحه، فقط null برمی‌گردونیم
  // و کامپوننت بالادست تصمیم می‌گیره که چیزی نشون نده.
  if (!token) {
    console.error(
      'GITHUB_TOKEN تعریف نشده. فایل .env.local رو بر اساس .env.example بساز.'
    )
    return null
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: CONTRIBUTIONS_QUERY,
        variables: { login: username },
      }),
      // این یعنی نتیجه حداکثر هر یک ساعت یک بار دوباره از گیتهاب گرفته می‌شه،
      // نه هر بار که یک نفر صفحه رو باز می‌کنه (برای جلوگیری از پر شدن سهمیه‌ی API).
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`)
    }

    const json = await response.json()

    if (json.errors) {
      throw new Error(json.errors[0]?.message ?? 'Unknown GitHub API error')
    }

    return json.data?.user?.contributionsCollection?.contributionCalendar ?? null
  } catch (error) {
    console.error('خطا در گرفتن اطلاعات فعالیت گیتهاب:', error)
    return null
  }
}
