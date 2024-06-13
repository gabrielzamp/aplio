import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import NewsLetter from '@/components/NewsLetter'
import PageHero from '@/components/heros/PageHero'
import React from 'react'

const page = () => {
  return (
    <>
      <PageHero
        subtitle="GET IN TOUCH"
        title="Contact our help desk <br/> for assistance"
        paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
      />
      <ContactInfo />
      <ContactForm />
      <NewsLetter />
    </>
  )
}

export default page
