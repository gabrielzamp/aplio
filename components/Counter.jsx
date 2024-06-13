'use client'
import { CounterData } from '@/data/data'
import CounterAnimation from '@/utils/CounterAnimation'

const Counter = () => {
  return (
    <section className="relative z-10">
      <div className="container">
        <div className=" mx-auto max-w-[850px] rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
          <div
            className=" grid grid-cols-3 items-center rounded border border-dashed border-gray-100 bg-white py-10 dark:border-borderColor-dark dark:bg-dark-200  max-md:grid-cols-1 max-md:gap-y-10  [&>*:not(:last-child)]:after:absolute  max-md:[&>*:not(:last-child)]:after:-bottom-5 max-md:[&>*:not(:last-child)]:after:left-1/2 max-md:[&>*:not(:last-child)]:after:h-[1px] max-md:[&>*:not(:last-child)]:after:w-[270px] max-md:[&>*:not(:last-child)]:after:-translate-x-1/2 max-md:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border-mobile.svg')] max-md:dark:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border-mobile-dark.svg')]  md:[&>*:not(:last-child)]:after:right-0 md:[&>*:not(:last-child)]:after:top-1/2 md:[&>*:not(:last-child)]:after:h-[60px] md:[&>*:not(:last-child)]:after:w-[1px] md:[&>*:not(:last-child)]:after:-translate-y-1/2  md:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border.svg')] md:dark:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border-dark.svg')] "
            id="counter">
            {CounterData.map((items, index) => (
              <div className="relative flex flex-col items-center justify-center" key={index}>
                <h2 className="text-[48px]">
                  <CounterAnimation number={items.number} />
                  <span className="percent">{items.rightIcon}</span>
                </h2>
                <p className="text-light font-jakarta_sans">{items.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter
