import AboutBanking from '@/components/AboutBanking'
import BankingDetails from '@/components/BankingDetails'
import Clients from '@/components/Clients'
import Counter from '@/components/Counter'
import FaqFullLayout from '@/components/FaqFullLayout'
import MembersCounter from '@/components/MembersCounter'
import NewsLetter from '@/components/NewsLetter'
import PageHero from '@/components/heros/PageHero'
import PaymentFeatures from '@/components/PaymentFeatures'
import Pricing from '@/components/Pricing'
import TeamMembers from '@/components/TeamMembers'
import { BankingServicesData } from '@/data/data'

const HomepageThree = () => {
  return (
    <>
      <PageHero
        subtitle="MONITOR YOUR MONEY"
        title="The future of business is being <br> shaped by aplio"
        paragraph="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it"
      />
      <BankingDetails />
      <MembersCounter border={false} />
      <PaymentFeatures
        features={BankingServicesData}
        sectionTag={'Our Services'}
        sectionTitle={"The world's best companies trust aplio."}
        spacing={'bg-white dark:bg-dark-300 py-150 max-md:py-25 relative max-md:overflow-hidden'}
      />
      <AboutBanking />
      <Clients sectionTitle={false} spacing={'pt-0 pb-0'} />
      <TeamMembers />
      <Counter />
      <Pricing />
      <FaqFullLayout />
      <NewsLetter />
    </>
  )
}

export default HomepageThree
