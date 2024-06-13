import CareerDetails from '@/components/CareerDetails'
import CareerList from '@/components/CareerList'
import NewsLetter from '@/components/NewsLetter'
import PaymentFeatures from '@/components/PaymentFeatures'
import PageHero from '@/components/heros/PageHero'
import { AboutFeaturesData } from '@/data/data'

const Career = () => {
  return (
    <>
      <PageHero subtitle="CAREER PAGE" title="Become a part of the <br/> aplio team" />
      <CareerDetails />
      <PaymentFeatures
        features={AboutFeaturesData}
        sectionTag={'OUR VALUE'}
        sectionTitle={'Our business is steered by our core values'}
        spacing={'relative max-md:overflow-hidden max-md:py-25 py-150'}
      />
      <CareerList />
      <NewsLetter />
    </>
  )
}

export default Career
