import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa6'
import clsx from 'clsx'
import { socialLinks } from '@/data/social-links.data'

interface SocialSidebarProps {
  className?: string
}

const items = [
  { id: 1, name: 'Github', href: socialLinks.github, icon: FaGithub },
  { id: 2, name: 'Email', href: socialLinks.email, icon: FaLinkedinIn },
  { id: 3, name: 'Telegram', href: socialLinks.telegram, icon: FaTelegram },
]

export default function SocialSidebar({ className }: SocialSidebarProps) {
  return (
    <div
      className={clsx(
        'hidden w-fit flex-col items-center gap-4 lg:flex',
        className,
      )}
    >
      <span className='h-16 w-px bg-gray/30' />
      {items.map((item) => {
        const Icon = item.icon
        return (
          <a
            key={item.id}
            href={item.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={item.name}
            className='text-gray transition duration-200 hover:text-primary'
          >
            <Icon className='size-5' />
          </a>
        )
      })}
    </div>
  )
}
