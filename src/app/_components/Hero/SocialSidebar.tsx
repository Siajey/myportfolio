import { GitBranch, Mail, Send } from 'lucide-react'
import clsx from 'clsx'

interface SocialSidebarProps {
  className?: string
}

const socialLinks = [
  {
    id: 1,
    name: 'Github',
    href: 'https://github.com/Siajey',
    icon: GitBranch,
  },
  { id: 2, name: 'Email', href: 'mailto:siavashmjyjs@gmail.com', icon: Mail },
  { id: 3, name: 'Telegram', href: 'https://t.me/SiavashMohammadjani', icon: Send },
]

export default function SocialSidebar({ className }: SocialSidebarProps) {
  return (
    <div
      className={clsx('hidden w-fit flex-col items-center gap-4 lg:flex', className)}
    >
      <span className='h-16 w-px bg-gray/30' />
      {socialLinks.map((item) => {
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


