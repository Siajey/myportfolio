'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { navbarItems } from './navItems'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu when the pathname changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  //lock and unlock body scroll when the mobile menu is open or closed
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    //Cleanup Function
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className='lg:hidden'>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls='mobile-menu'
        className='relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5'
      >
        <span
          className={clsx(
            'h-0.5 w-6 bg-white transition duration-300',
            isOpen && 'translate-y-2 rotate-45',
          )}
        />
        <span
          className={clsx(
            'h-0.5 w-6 bg-white transition duration-300',
            isOpen && 'opacity-0',
          )}
        />
        <span
          className={clsx(
            'h-0.5 w-6 bg-white transition duration-300',
            isOpen && '-translate-y-2 -rotate-45',
          )}
        />
      </button>

      <div
        onClick={() => setIsOpen(false)}
        className={clsx(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      <nav
        id='mobile-menu'
        className={clsx(
          `fixed right-0 top-0 z-40 flex h-auto w-64 flex-col gap-6 border
          border-gray/20 bg-background p-8 pt-24 transition-transform duration-300`,
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {navbarItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.id}
              href={item.href}
              className={clsx(
                'font-medium text-gray transition duration-200 hover:text-gray',
                isActive && '!text-primary',
              )}
            >
              #{item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
