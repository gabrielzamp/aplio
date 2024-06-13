'use client'
import { gsap, MotionPathPlugin } from 'gsap/all'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
const Integration = () => {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin)
    gsap.set('#rect, #rect-2, #rect-3, #rect-4, #rect-5, #rect-6', {
      opacity: 1,
    })
    gsap.from('#rect', {
      motionPath: {
        path: '#path',
        autoRotate: true,
        align: '#path',
        alignOrigin: [0.5, 0.5],
      },
      duration: 2,
      ease: 'none',
      repeat: -1,
      repeatDelay: 0,
    })
    gsap.from('#rect-2', {
      motionPath: {
        path: '#path-2',
        autoRotate: true,
        align: '#path-2',
        alignOrigin: [0.5, 0.5],
      },
      duration: 2,
      ease: 'none',
      repeat: -1,
      repeatDelay: 0,
    })
    gsap.from('#rect-3', {
      motionPath: {
        path: '#path-3',
        autoRotate: true,
        align: '#path-3',
        alignOrigin: [0.5, 0.5],
      },
      duration: 2,
      ease: 'none',
      repeat: -1,
      repeatDelay: 0,
    })
    gsap.from('#rect-4', {
      motionPath: {
        path: '#path-4',
        autoRotate: true,
        align: '#path-4',
        alignOrigin: [0.5, 0.5],
      },
      duration: 2,
      ease: 'none',
      repeat: -1,
      repeatDelay: 0,
    })
    gsap.from('#rect-5', {
      motionPath: {
        path: '#path-5',
        autoRotate: true,
        align: '#path-5',
        alignOrigin: [0.5, 0.5],
      },
      duration: 2,
      ease: 'none',
      repeat: -1,
      repeatDelay: 0,
    })
    gsap.from('#rect-6', {
      motionPath: {
        path: '#path-6',
        autoRotate: true,
        align: '#path-6',
        alignOrigin: [0.5, 0.5],
      },
      duration: 2,
      ease: 'none',
      repeat: -1,
      repeatDelay: 0,
    })
  }, [])
  return (
    <section className="bg-white pb-150  dark:bg-dark-300 max-md:pb-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-[620px] text-center">
          <p className="section-tagline">Top Integration</p>

          <h2 className="mb-8">Make productivity easier with 50+ Integrations</h2>
          <p className="mb-10">
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&rsquo;s not Latin
            though it looks like nothing.
          </p>

          <Link href="/contact" className="btn-outline">
            Start Your Journey
          </Link>
        </div>
        <div className="relative -z-10 mx-auto -mt-15 max-w-[1068px] max-md:hidden">
          <div className="relative z-10 w-full py-[175px] max-xl:py-150 max-lg:py-25">
            <div className="align-center relative mx-auto flex h-150 w-150 flex-row justify-center rounded-full bg-white shadow-nav dark:bg-dark-200">
              <div className="align-center absolute left-1/2 top-1/2 mx-auto flex h-[122px] w-[122px] -translate-x-1/2 -translate-y-1/2  flex-row justify-center rounded-full bg-primary-100 dark:bg-[#2B2D2A]">
                <span className="inline-block px-[25px] py-[46px] text-[30px] font-semibold leading-none text-primary">
                  aplio
                </span>
              </div>
            </div>
            <div className="absolute bottom-auto left-0 right-auto top-0 block h-full w-1/2">
              <div className="absolute bottom-auto left-0  right-auto top-0 aspect-square w-25 rounded-full bg-white p-2.5 shadow-box dark:bg-dark-200 xl:w-[120px]">
                <div className="flex aspect-square items-center justify-center rounded-full  border border-dashed border-gray-100 text-center dark:border-borderColor-dark 1xl:p-2.5">
                  <Image src="images/twitter.svg" alt="value image" className="inline-block" width={40} height={40} />
                </div>
              </div>
              <div className="leading-0 absolute bottom-auto left-25 right-auto top-[58px] -z-10 w-auto max-xl:top-[42px] max-lg:top-5">
                <svg
                  width="100%"
                  height="193"
                  viewBox="0 0 437 193"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="overflow-visible">
                  <path
                    id="path"
                    d="M0 1H122.022C130.298 1 137.01 7.70248 137.022 15.9782L137.175 122.029C137.187 130.302 143.895 137.003 152.168 137.007L275.007 137.066C283.289 137.07 290 143.785 290 152.066V177C290 185.284 296.716 192 305 192H437"
                    stroke="#DCE0D3"
                    strokeDasharray="5 3"
                  />
                  <g id="rect" data-svg-origin="25.5 25.5" transform="matrix(1,0,0,1,255.40852,119.431)">
                    <g filter="url(#filter0_f_283_246)">
                      <circle cx="25.5" cy="25.5" r="7.5" fill="" className="fill-primary"></circle>
                    </g>
                    <g filter="url(#filter1_f_283_246)">
                      <circle cx="25.5" cy="25.5" r="5.5" fill="" className="fill-primary"></circle>
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_283_246"
                      x="0"
                      y="0"
                      width="51"
                      height="51"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="9" result="effect1_foregroundBlur_283_246"></feGaussianBlur>
                    </filter>
                    <filter
                      id="filter1_f_283_246"
                      x="13"
                      y="13"
                      width="25"
                      height="25"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_283_246"></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="absolute bottom-auto left-10  right-auto top-1/2 aspect-square w-25 -translate-y-1/2 rounded-full bg-white p-2.5 shadow-box dark:bg-dark-200 xl:w-[120px]">
                <div className="flex aspect-square items-center justify-center rounded-full  border border-dashed border-gray-100 text-center dark:border-borderColor-dark 1xl:p-2.5">
                  <Image src="images/snapchat.svg" alt="value image" className="inline-block" width={40} height={40} />
                </div>
              </div>
              <div className="leading-0 absolute bottom-auto left-25 right-auto top-1/2 -z-10 w-auto  -translate-y-1/2">
                <svg
                  width="100%"
                  height="2"
                  viewBox="0 0 373 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="overflow-visible">
                  <path id="path-2" d="M0 1H373" stroke="#DCE0D3" strokeDasharray="5 3" />
                  <g id="rect-2" data-svg-origin="25.5 25.5" transform="matrix(1,0,0,1,255.40852,119.431)">
                    <g filter="url(#filter0_f_283_246)">
                      <circle cx="25.5" cy="25.5" r="7.5" fill="" className="fill-primary"></circle>
                    </g>
                    <g filter="url(#filter1_f_283_246)">
                      <circle cx="25.5" cy="25.5" r="5.5" fill="" className="fill-primary"></circle>
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_283_246"
                      x="0"
                      y="0"
                      width="51"
                      height="51"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="9" result="effect1_foregroundBlur_283_246"></feGaussianBlur>
                    </filter>
                    <filter
                      id="filter1_f_283_246"
                      x="13"
                      y="13"
                      width="25"
                      height="25"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_283_246"></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="absolute bottom-0 left-0  right-auto top-auto aspect-square w-25 rounded-full bg-white p-2.5 shadow-box dark:bg-dark-200 xl:w-[120px]">
                <div className="flex aspect-square items-center justify-center rounded-full  border border-dashed border-gray-100 text-center dark:border-borderColor-dark 1xl:p-2.5">
                  <Image src="images/dropbox.svg" alt="value image" className="inline-block" width={40} height={40} />
                </div>
              </div>
              <div className="leading-0 absolute -bottom-[38px] left-25 right-auto top-auto -z-10 w-auto -translate-y-1/2 max-xl:-bottom-[54px]  max-lg:-bottom-[76px]">
                <svg
                  width="100%"
                  height="193"
                  viewBox="0 0 437 193"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="overflow-visible">
                  <path
                    id="path-3"
                    d="M0 192H122.022C130.298 192 137.01 185.298 137.022 177.022L137.175 70.971C137.187 62.6981 143.906 55.9968 152.179 55.9928C198.05 55.9707 229.13 55.9557 274.996 55.9336C283.278 55.9296 290 49.215 290 40.9336V16C290 7.7157 296.716 0.999985 305 0.999985H437"
                    stroke="#DCE0D3"
                    strokeDasharray="5 3"
                  />
                  <g id="rect-3" data-svg-origin="25.5 25.5" transform="matrix(1,0,0,1,255.40852,119.431)">
                    <g filter="url(#filter0_f_283_246)">
                      <circle cx="25.5" cy="25.5" r="7.5" fill="" className="fill-primary"></circle>
                    </g>
                    <g filter="url(#filter1_f_283_246)">
                      <circle cx="25.5" cy="25.5" r="5.5" fill="" className="fill-primary"></circle>
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_283_246"
                      x="0"
                      y="0"
                      width="51"
                      height="51"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="9" result="effect1_foregroundBlur_283_246"></feGaussianBlur>
                    </filter>
                    <filter
                      id="filter1_f_283_246"
                      x="13"
                      y="13"
                      width="25"
                      height="25"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_283_246"></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-auto left-auto right-0 top-0 block h-full w-1/2">
              <div className="absolute bottom-auto left-auto  right-0 top-0 aspect-square w-25 rounded-full bg-white p-2.5 shadow-box dark:bg-dark-200 xl:w-[120px]">
                <div className="flex aspect-square items-center justify-center rounded-full  border border-dashed border-gray-100 text-center dark:border-borderColor-dark 1xl:p-2.5">
                  <Image src="images/slack.svg" alt="value image" className="inline-block" width={40} height={40} />
                </div>
              </div>
              <div className="leading-0 absolute bottom-auto left-auto right-25 top-[58px] -z-10 w-auto max-xl:top-[42px] max-lg:top-5">
                <svg
                  width="100%"
                  height="193"
                  viewBox="0 0 437 193"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="overflow-visible">
                  <path
                    id="path-4"
                    d="M437 1H314.978C306.702 1 299.99 7.70248 299.978 15.9782L299.825 122.029C299.813 130.302 293.105 137.003 284.832 137.007L161.993 137.066C153.711 137.07 147 143.785 147 152.066V177C147 185.284 140.284 192 132 192H0"
                    stroke="#DCE0D3"
                    strokeDasharray="5 3"
                  />
                  <g id="rect-4" data-svg-origin="25.5 25.5" transform="matrix(1,0,0,1,255.40852,119.431)">
                    <g filter="url(#filter0_f_283_246)">
                      <circle cx="25.5" cy="25.5" r="7.5" fill="" className="fill-primary"></circle>
                    </g>
                    <g filter="url(#filter1_f_283_246)">
                      <circle cx="25.5" cy="25.5" r="5.5" fill="" className="fill-primary"></circle>
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_283_246"
                      x="0"
                      y="0"
                      width="51"
                      height="51"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="9" result="effect1_foregroundBlur_283_246"></feGaussianBlur>
                    </filter>
                    <filter
                      id="filter1_f_283_246"
                      x="13"
                      y="13"
                      width="25"
                      height="25"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_283_246"></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="absolute bottom-auto left-auto  right-10 top-1/2 aspect-square w-25 -translate-y-1/2 rounded-full bg-white p-2.5 shadow-box dark:bg-dark-200 xl:w-[120px]">
                <div className="flex aspect-square items-center justify-center rounded-full  border border-dashed border-gray-100 text-center dark:border-borderColor-dark 1xl:p-2.5">
                  <Image src="images/asana.svg" alt="value image" className="inline-block" width={40} height={40} />
                </div>
              </div>
              <div className="leading-0 absolute bottom-auto left-auto right-25 top-1/2 -z-10 w-auto -translate-y-1/2">
                <svg
                  width="100%"
                  height="2"
                  viewBox="0 0 373 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="overflow-visible">
                  <path id="path-5" d="M373 1H0" stroke="#DCE0D3" strokeDasharray="5 3" />
                  <g id="rect-5" data-svg-origin="25.5 25.5" transform="matrix(1,0,0,1,255.40852,119.431)">
                    <g filter="url(#filter0_f_283_246)">
                      <circle cx="25.5" cy="25.5" r="7.5" fill="" className="fill-primary"></circle>
                    </g>
                    <g filter="url(#filter1_f_283_246)">
                      <circle cx="25.5" cy="25.5" r="5.5" fill="" className="fill-primary"></circle>
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_283_246"
                      x="0"
                      y="0"
                      width="51"
                      height="51"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="9" result="effect1_foregroundBlur_283_246"></feGaussianBlur>
                    </filter>
                    <filter
                      id="filter1_f_283_246"
                      x="13"
                      y="13"
                      width="25"
                      height="25"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_283_246"></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="absolute bottom-0 left-auto  right-0 top-auto aspect-square w-25 rounded-full bg-white p-2.5 shadow-box dark:bg-dark-200 xl:w-[120px]">
                <div className="flex aspect-square items-center justify-center rounded-full  border border-dashed border-gray-100 text-center dark:border-borderColor-dark 1xl:p-2.5">
                  <Image
                    src="images/google-drive.svg"
                    alt="value image"
                    className="inline-block"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="leading-0 absolute -bottom-[38px] left-auto right-25 top-auto -z-10 w-auto -translate-y-1/2 max-xl:-bottom-[54px] max-lg:-bottom-[76px]">
                <svg
                  width="100%"
                  height="193"
                  viewBox="0 0 437 193"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="overflow-visible">
                  <path
                    id="path-6"
                    d="M437 192H314.978C306.702 192 299.99 185.298 299.978 177.022L299.825 70.971C299.813 62.6981 293.105 55.9968 284.832 55.9928L161.993 55.9336C153.711 55.9296 147 49.215 147 40.9336V16C147 7.7157 140.284 0.999985 132 0.999985H0"
                    stroke="#DCE0D3"
                    strokeDasharray="5 3"
                  />
                  <g id="rect-6" data-svg-origin="25.5 25.5" transform="matrix(1,0,0,1,255.40852,119.431)">
                    <g filter="url(#filter0_f_283_246)">
                      <circle cx="25.5" cy="25.5" r="7.5" fill="" className="fill-primary"></circle>
                    </g>
                    <g filter="url(#filter1_f_283_246)">
                      <circle cx="25.5" cy="25.5" r="5.5" fill="" className="fill-primary"></circle>
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_283_246"
                      x="0"
                      y="0"
                      width="51"
                      height="51"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="9" result="effect1_foregroundBlur_283_246"></feGaussianBlur>
                    </filter>
                    <filter
                      id="filter1_f_283_246"
                      x="13"
                      y="13"
                      width="25"
                      height="25"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                      <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_283_246"></feGaussianBlur>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-10 grid grid-cols-2 gap-8 md:hidden">
          <div className="mx-auto aspect-square w-25  rounded-full bg-white p-2.5 shadow-box dark:bg-dark-200">
            <div className="flex aspect-square items-center justify-center rounded-full  border border-dashed border-gray-100 text-center dark:border-borderColor-dark ">
              <Image src="images/figma.svg" alt="value image" className="inline-block" width={40} height={40} />
            </div>
          </div>

          <div className="mx-auto aspect-square w-25  rounded-full bg-white p-2.5 shadow-box dark:bg-dark-200">
            <div className="flex aspect-square items-center justify-center rounded-full  border border-dashed border-gray-100 text-center dark:border-borderColor-dark ">
              <Image src="images/dropbox.svg" alt="value image" className="inline-block" width={40} height={40} />
            </div>
          </div>

          <div className="mx-auto aspect-square w-25  rounded-full bg-white p-2.5 shadow-box dark:bg-dark-200">
            <div className="flex aspect-square items-center justify-center rounded-full  border border-dashed border-gray-100 text-center dark:border-borderColor-dark ">
              <Image src="images/twitter.svg" alt="value image" className="inline-block" width={40} height={40} />
            </div>
          </div>
          <div className="mx-auto aspect-square w-25  rounded-full bg-white p-2.5 shadow-box dark:bg-dark-200">
            <div className="flex aspect-square items-center justify-center rounded-full  border border-dashed border-gray-100 text-center dark:border-borderColor-dark ">
              <Image src="images/slack.svg" alt="value image" className="inline-block" width={40} height={40} />
            </div>
          </div>
          <div className="mx-auto aspect-square w-25  rounded-full bg-white p-2.5 shadow-box dark:bg-dark-200">
            <div className="flex aspect-square items-center justify-center rounded-full  border border-dashed border-gray-100 text-center dark:border-borderColor-dark ">
              <Image src="images/google-drive.svg" alt="value image" className="inline-block" width={40} height={40} />
            </div>
          </div>
          <div className="mx-auto aspect-square w-25  rounded-full bg-white p-2.5 shadow-box dark:bg-dark-200">
            <div className="flex aspect-square items-center justify-center rounded-full  border border-dashed border-gray-100 text-center dark:border-borderColor-dark ">
              <Image src="images/asana.svg" alt="value image" className="inline-block" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integration
