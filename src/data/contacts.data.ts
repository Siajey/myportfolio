import { Github, Mail, Send } from 'lucide-react'
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
    icon: Github,
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
]
