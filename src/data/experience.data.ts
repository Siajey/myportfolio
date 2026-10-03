export interface ExperienceItem {
  company: string
  role: string
  period: string
  points: string[]
}

export const experienceData: ExperienceItem[] = [
  {
    company: 'Lexa',
    role: 'Junior Front-End Developer',
    period: 'May 2025 – Present',
    points: [
      'توسعه رابط‌های کاربری واکنش‌گرا با React، Next.js و TypeScript',
      'پیاده‌سازی چیدمان‌های واکنش‌گرا با Tailwind CSS برای دسکتاپ، تبلت و موبایل',
      'بهبود کارایی اپلیکیشن با Lazy Loading و Code Splitting',
    ],
  },
  {
    company: 'TCM Group',
    role: 'Front-End Developer / Developer Intern',
    period: 'Jul 2024 – Apr 2025',
    points: [
      'تبدیل طراحی UI به کامپوننت‌های قابل‌استفاده‌مجدد React و Next.js',
      'اتصال اپلیکیشن‌ها به REST API و مدیریت وضعیت‌های اپلیکیشن',
      'همکاری تیمی با گردش‌کار مبتنی بر Git برای مدیریت کد',
    ],
  },
]