import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactCard from '@/components/ContactCard'
import { contactsData } from '@/data/contacts.data'

export const metadata: Metadata = {
  title: 'Contacts | Jey',
  description: 'Ways to get in touch with me',
}

export default function ContactsPage() {
  return (
    <main className='container mx-auto px-4 pb-24 pt-32'>
      <SectionHeading title='contacts' />

      <p className='mt-6 max-w-2xl text-gray'>
        اگه پروژه‌ای داری که می‌خوای همکاری کنیم، یا فقط می‌خوای سلام کنی، از
        هرکدوم از راه‌های زیر می‌تونی باهام در ارتباط باشی.
      </p>

      <div className='mt-12 grid gap-6 sm:grid-cols-3'>
        {contactsData.map((contact) => (
          <ContactCard key={contact.label} {...contact} />
        ))}
      </div>
    </main>
  )
}
