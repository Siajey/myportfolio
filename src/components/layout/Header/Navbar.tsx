'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navbarItems } from './navItems'
import clsx from 'clsx'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='hidden lg:flex items-center justify-center gap-4 '>
      {navbarItems.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.id}
            href={item.href}
            className={clsx(
              'relative ms-2 font-medium transition duration-200 hover:text-gray',
              {
                '!text-primary': isActive,
              },
            )}
          >
            {isActive && (
              <span className='absolute inset-x-0 bottom-0 top-6 mx-auto block size-2 rounded-sm bg-primary'></span>
            )}

            <p>#{item.name}</p>
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar
