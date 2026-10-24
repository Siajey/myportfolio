import {
  FaGithub,
  FaLinkedinIn,
  FaTelegram,
  FaThreads,
  FaYoutube,
} from 'react-icons/fa6'
import { socialLinks } from '@/data/social-links.data'

export default function Footer() {
  return (
    <footer className='border-t border-gray/20'>
      <div
        className='container mx-auto flex justify-between gap-8 px-4 py-10
          sm:flex-row sm:items-center sm:justify-between'
      >
        <div>
          <p className='text-lg font-bold text-white'>Jey</p>
          <p className='mt-1 text-sm text-gray'>Frontend developer | Next.js</p>
        </div>

        <div className='flex items-center gap-8'>
          <a
            href={socialLinks.github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray transition duration-200 hover:text-primary'
          >
            <FaGithub className='size-5' />
          </a>

          <a
            href={socialLinks.telegram}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray transition duration-200 hover:text-primary'
          >
            <FaTelegram className='size-5' />
          </a>

          <a
            href={socialLinks.email}
            rel='noopener noreferrer'
            className='text-gray transition duration-200 hover:text-primary'
          >
            <FaLinkedinIn className='size-5' />
          </a>

          <a
            href={socialLinks.email}
            rel='noopener noreferrer'
            className='text-gray transition duration-200 hover:text-primary'
          >
            <FaThreads className='size-5' />
          </a>

          <a
            href={socialLinks.email}
            rel='noopener noreferrer'
            className='text-gray transition duration-200 hover:text-primary'
          >
            <FaYoutube className='size-5' />
          </a>
        </div>
      </div>

      <div className=' py-4 text-center text-xs text-gray'>
        © Copyright {new Date().getFullYear()}. Made by Jey
      </div>
    </footer>
  )
}
