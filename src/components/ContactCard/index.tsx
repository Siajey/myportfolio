import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ContactCardProps {
  icon: LucideIcon
  label: string
  description: string
  href: string
}

export default function ContactCard({
  icon: Icon,
  label,
  description,
  href,
}: ContactCardProps) {
  return (
    <Link
      href={href}
      target='_blank'
      className='group flex flex-col items-center gap-3 border border-gray/20 px-6 py-10
        text-center transition duration-200 hover:-translate-y-1 hover:border-primary/60'
    >
      <Icon className='size-8 text-primary transition duration-200 group-hover:scale-110' />
      <p className='text-base font-semibold text-white'>{label}</p>
      <p className='text-sm text-gray'>{description}</p>
    </Link>
  )
}
