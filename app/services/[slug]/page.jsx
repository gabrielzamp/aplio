import MembersCounter from '@/components/MembersCounter'
import NewsLetter from '@/components/NewsLetter'
import Pricing from '@/components/Pricing'
import ServiceContent from '@/components/ServiceContent'
import { ServiceData } from '@/data/data'

export async function generateStaticParams() {
  return ServiceData.map((item) => ({
    slug: item.slug,
  }))
}

const ServiceDetails = (props) => {
  const slug = props.params.slug
  const data = ServiceData.find((post) => post.slug === slug)

  return (
    <>
      <ServiceContent data={data} />
      <MembersCounter />
      <Pricing spacing={'pt-150 max-md:pt-20'} />
      <NewsLetter />
    </>
  )
}

export default ServiceDetails
