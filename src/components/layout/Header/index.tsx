import Link from 'next/link'
import Navbar from './Navbar'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-white">
          Jey
        </Link>

        <Navbar />

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray">EN</span>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}


