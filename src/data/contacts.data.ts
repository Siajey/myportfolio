import { GitBranch, Mail, Send } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { socialLinks } from '@/data/social-links.data'

export interface ContactItem {
  icon: LucideIcon
  label: string
  description: string
  href: string
}

export const contactsData: ContactItem[] = [
  {
    icon: GitBranch,
    label: 'GitHub',
    description: 'کد و پروژه‌های من',
    href: socialLinks.github,
  },
  {
    icon: Mail,
    label: 'Email',
    description: 'برای همکاری یا هر سوالی پیام بده',
    href: socialLinks.email,
  },
  {
    icon: Send,
    label: 'Telegram',
    description: 'سریع‌ترین راه برای ارتباط گرفتن',
    href: socialLinks.telegram,
  },
  {
    icon: Send,
    label: 'Threads',
    description: 'سریع‌ترین راه برای ارتباط گرفتن',
    href: socialLinks.telegram,
  },
  {
    icon: Send,
    label: 'Youtube',
    description: 'سریع‌ترین راه برای ارتباط گرفتن',
    href: socialLinks.telegram,
  },
  {
    icon: Send,
    label: 'Linkedin',
    description: 'سریع‌ترین راه برای ارتباط گرفتن',
    href: socialLinks.telegram,
  },
]
