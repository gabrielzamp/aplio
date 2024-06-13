'use client'
import { fadeUpAnimation } from '@/data/animation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useWhileInView from '@/hooks/useWhileInView'
import { useRef } from 'react'
const Signup = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <>
      <section className="relative mb-150 pt-[200px]">
        <div className="absolute left-1/2 top-25 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
        <motion.div
          className="container relative"
          ref={ref}
          initial="initial"
          animate={controlAnimation}
          variants={fadeUpAnimation}>
          <div className="mx-auto mb-12 max-w-[475px] text-center">
            <p className="section-tagline">Sign up</p>

            <h2>
              Connect with our <br />
              community
            </h2>
          </div>
          <div className="relative z-10 mx-auto max-w-[510px]">
            <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:flex-col">
              <div className="rounded-full bg-primary-200/30  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/50 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              <div className="-ml-[170px] rounded-full  bg-primary-200/30 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            </div>
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:px-5 max-md:py-7">
                <form>
                  <div className="grid grid-cols-12 gap-y-6 ">
                    <div className="col-span-12">
                      <label
                        htmlFor="name"
                        className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Your Name"
                        className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                      />
                    </div>
                    <div className="col-span-12">
                      <label
                        htmlFor="email"
                        className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address"
                        className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                      />
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="password"
                        className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="At least 8 character"
                        className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light   outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                      />
                    </div>

                    <div className="col-span-full ">
                      <button className="btn block w-full">Sign Up</button>
                    </div>
                  </div>
                </form>
                <div className="relative py-8 after:absolute after:top-1/2 after:h-[1px] after:w-full after:-translate-y-1/2 after:border after:border-dashed after:border-borderColor dark:after:border-borderColor-dark">
                  <span className=" absolute left-1/2 top-1/2 z-10 inline-block w-10 -translate-x-1/2 -translate-y-1/2 bg-white text-center dark:bg-dark-200">
                    Or
                  </span>
                </div>
                <div className="mb-8">
                  <button className=" group mb-6 flex w-full items-center justify-center gap-2  rounded-[30px] border border-borderColor bg-white  px-[30px] py-3.5 font-jakarta_sans text-sm font-medium -tracking-[0.3px] text-paragraph dark:border-borderColor-dark dark:bg-transparent dark:text-white max-md:px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21.7502 12.216C21.7502 11.4143 21.6839 10.8293 21.5402 10.2227H12.1992V13.8409H17.6822C17.5717 14.7401 16.9747 16.0943 15.6482 17.0043L15.6296 17.1254L18.583 19.3676L18.7876 19.3877C20.6669 17.6868 21.7502 15.1843 21.7502 12.216Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.2002 21.7495C14.8864 21.7495 17.1415 20.8828 18.7886 19.3878L15.6492 17.0044C14.8091 17.5786 13.6815 17.9794 12.2002 17.9794C9.56932 17.9794 7.33635 16.2786 6.54036 13.9277L6.42369 13.9374L3.35266 16.2666L3.3125 16.3761C4.94853 19.5611 8.30907 21.7495 12.2002 21.7495Z"
                        fill="#34A853"
                      />
                      <path
                        d="M6.53907 13.9286C6.32904 13.322 6.20749 12.6719 6.20749 12.0003C6.20749 11.3286 6.32904 10.6786 6.52802 10.072L6.52246 9.94276L3.41294 7.57617L3.3112 7.6236C2.63691 8.94528 2.25 10.4295 2.25 12.0003C2.25 13.5711 2.63691 15.0553 3.3112 16.3769L6.53907 13.9286Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.2003 6.01997C14.0685 6.01997 15.3286 6.8108 16.0472 7.47168L18.855 4.785C17.1306 3.21417 14.8865 2.25 12.2003 2.25C8.3091 2.25 4.94854 4.43832 3.3125 7.62329L6.52933 10.0717C7.33638 7.72083 9.56936 6.01997 12.2003 6.01997Z"
                        fill="#EB4335"
                      />
                    </svg>
                    <span className="font-jakarta_sans font-medium  "> Continue with Google </span>
                  </button>
                  <button className="group flex w-full items-center justify-center gap-2 rounded-[30px]  border border-borderColor bg-white px-[30px]  py-3.5 font-jakarta_sans text-sm font-medium -tracking-[0.3px] text-paragraph dark:border-borderColor-dark dark:bg-transparent dark:text-white max-md:px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22.5 12.0642C22.5 6.22974 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.22974 1.5 12.0642C1.5 17.337 5.33968 21.7075 10.3594 22.5V15.1179H7.69336V12.0642H10.3594V9.73675C10.3594 7.08911 11.927 5.62663 14.3254 5.62663C15.4738 5.62663 16.6758 5.83296 16.6758 5.83296V8.43274H15.3518C14.0475 8.43274 13.6406 9.24713 13.6406 10.0834V12.0642H16.5527L16.0872 15.1179H13.6406V22.5C18.6603 21.7075 22.5 17.337 22.5 12.0642Z"
                        fill="#0C63D4"
                      />
                    </svg>
                    <span className="font-jakarta_sans text-sm font-medium "> Continue with Facebook </span>
                  </button>
                </div>
                <p className="ont-jakarta_sans text-center text-sm font-medium leading-[24px] ">
                  Already Have an account?
                  <Link
                    href="/login"
                    className="relative inline-block overflow-hidden align-bottom font-jakarta_sans text-sm font-medium leading-[24px] text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                    login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Signup
