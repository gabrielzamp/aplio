'use client'
import { AboutImages } from '@/data/data'
import Image from 'next/image'

const AboutDetails = () => {
  return (
    <section className="relative">
      <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative ">
        <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
        <div className="mb-[160px] grid grid-cols-3 items-center gap-10  max-md:mb-25 max-md:grid-cols-1">
          {AboutImages.map((items) => (
            <div className="overflow-hidden rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200" key={items.id}>
              <Image src={items.image} alt="about images" className="h-auto w-full rounded" width={383} height={494} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12">
          <div className="max-md:col-span-full md:col-span-6">
            <div className="max-w-[550px]">
              <p className="section-tagline">Numbers</p>
              <h2>More than 10 years experience in this industry</h2>
            </div>
          </div>
          <div className="max-w-[590px] py-10 max-md:col-span-full md:col-span-6">
            <p>
              Lorem ipsum dolor sit amet consectetur. Nulla lobortis lacus nunc pulvinar amet. Id dignissim ipsum quis
              varius. Accumsan ultricies dapibus rutrum parturient mauris at est habitasse.
              <br />
              <br />
              Risus egestas neque. Nunc diam arcu purus egestas at dignissim nunc. In nec donec sed pretium donec eros
              elementum. Nec bibendum vel odio convallis feugiat viverra rhoncus in risus. Pretium ante nibh morbi sed
              consequat sem quam pharetra. Et cursus mattis senectus aliquet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutDetails
