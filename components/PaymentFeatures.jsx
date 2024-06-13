import Image from 'next/image'

const PaymentFeatures = ({
  sectionTag,
  sectionTitle,
  features,
  spacing = 'bg-white dark:bg-dark-300 pb-150 pt-150',
}) => {
  return (
    <section className={`${spacing}`}>
      <div className="absolute left-0 right-0 top-25 h-full w-full bg-[url('/images/core-gradient.png')] bg-[length:600px_1000px] bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[575px] text-center">
          {sectionTag && <p className="section-tagline">{sectionTag}</p>}
          {sectionTitle && <h2>{sectionTitle}</h2>}
        </div>

        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          <div className=" grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {features.map((items) => (
              <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200" key={items.id}>
                <div className="h-full rounded border border-dashed border-gray-100 p-10 text-center dark:border-borderColor-dark max-lg:p-5 ">
                  <Image
                    src={items.iconLight}
                    alt="payment logo"
                    className="mb-6 inline-block h-auto  w-auto dark:hidden"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={items.iconDark}
                    alt="payment logo"
                    className="mb-6 hidden h-auto w-auto dark:inline-block"
                    width={40}
                    height={40}
                  />
                  <h3 className="mb-2.5">{items.title}</h3>
                  <p>{items.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentFeatures
