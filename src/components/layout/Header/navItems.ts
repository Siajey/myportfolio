export interface NavItem {
  id: number
  name: string
  href: string
}

export const navbarItems: NavItem[] = [
  { id: 1, name: 'home', href: '/' },
  { id: 2, name: 'works', href: '/works' },
  { id: 3, name: 'about-me', href: '/about-me' },
  { id: 4, name: 'contacts', href: '/contacts' },
]