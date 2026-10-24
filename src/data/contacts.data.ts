import type { IconType } from 'react-icons'
import {
  FaGithub,
  FaLinkedinIn,
  FaTelegram,
  FaThreads,
  FaYoutube,
} from 'react-icons/fa6'
import { Mail } from 'lucide-react'
import { socialLinks } from '@/data/social-links.data'

export interface ContactItem {
  icon: IconType
  label: string
  description: string
  href: string
}

const allContacts: ContactItem[] = [
  {
    icon: FaGithub,
    label: 'GitHub',
    description: 'Projects I’ve been working on ',
    href: socialLinks.github,
  },
  {
    icon: Mail,
    label: 'Email',
    description: 'I check emails only for business stuff. ',
    href: socialLinks.email,
  },
  {
    icon: FaTelegram,
    label: 'Telegram',
    description:
      'Telegram is my favorite messenger feel free to reach me there for personal discussions. ',
    href: socialLinks.telegram,
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    description:
      'I’m working on my connections on this one send me a connection request. ',
    href: socialLinks.linkedin,
  },
  {
    icon: FaYoutube,
    label: 'YouTube',
    description:
      'I share everything about my job publicly; if you are a beginner, you will find it useful',
    href: socialLinks.youtube,
  },

  {
    icon: FaThreads,
    label: 'Threads',
    description:
      'I share technical content here, but in shorter form, and occasionally some fun material.',
    href: socialLinks.threads,
  },
]

export const contactsData = allContacts.filter((item) => item.href)

