import Clients from '@/components/Clients'
import NewsLetter from '@/components/NewsLetter'
import PageHero from '@/components/heros/PageHero'
import Pricing from '@/components/Pricing'
import TestimonialSingle from '@/components/TestimonialSingle'

const Testimonial = () => {
  return (
    <>
      <PageHero
        title="What our customer’s say <br/> about our company"
        paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
      />
      <TestimonialSingle />
      <Clients sectionTitle={false} spacing={'pt-0 pb-0'} />
      <Pricing spacing={'pt-150 max-md:pt-20'} />
      <NewsLetter />
    </>
  )
}

export default Testimonial
