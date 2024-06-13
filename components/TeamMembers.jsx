'use client'
import { fadeUpAnimation } from '@/data/animation'
import { teamData } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import useWhileInView from '@/hooks/useWhileInView'
import { useRef } from 'react'
const TeamMembers = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <section className="bg-white pb-[170px] pt-150 dark:bg-dark-300 max-md:overflow-hidden max-md:pb-25 max-md:pt-20">
      <div className="container">
        <div className="relative z-10 mx-auto mb-12 max-w-[475px] text-center">
          <p className="section-tagline">Our Team</p>

          <h2>Our leading, strong and creative team</h2>
        </div>

        <div className="relative z-10">
          <div className="absolute left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:top-0 max-md:hidden max-md:flex-col md:top-1/2">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div>
          <div className="absolute -top-[550px] left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')]  bg-contain bg-center bg-no-repeat p-[350px] opacity-70 md:hidden"></div>
          <div className=" grid grid-cols-3 gap-8 max-md:grid-cols-1">
            {teamData.slice(0, 3).map((member) => (
              <motion.div
                className="group/image"
                key={member.id}
                ref={ref}
                initial="initial"
                animate={controlAnimation}
                variants={fadeUpAnimation}>
                <div className="mb-6 rounded-medium bg-white p-2.5 dark:bg-dark-200">
                  <div className=" overflow-hidden rounded bg-gray-100 dark:bg-[#30302F]">
                    <Image
                      src={member.image}
                      alt="team member image"
                      className="h-auto w-auto grayscale transition-all duration-300 group-hover/image:grayscale-0"
                      width={389}
                      height={250}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <Link href={`/teams/${member.id}`}>
                    <h3 className="mb-2">{member.name}</h3>
                  </Link>
                  <p className="mb-6 text-sm font-medium leading-[1.5]">{member.designation}</p>
                  <ul className="flex items-center justify-center gap-x-2.5">
                    <li>
                      <Link
                        href={member.fbLink}
                        className="group transition-colors duration-500 hover:transition-colors hover:duration-500">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill=""
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-transparent transition-colors  duration-500 group-hover:fill-primary group-hover:transition-colors group-hover:duration-500">
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="19.5"
                            stroke="#464745"
                            className="stroke-gray-100 dark:stroke-[#464745] "
                          />
                          <path
                            d="M28.75 20.0535C28.75 15.1914 24.8325 11.25 20 11.25C15.1675 11.25 11.25 15.1914 11.25 20.0535C11.25 24.4475 14.4497 28.0896 18.6328 28.75V22.5982H16.4111V20.0535H18.6328V18.114C18.6328 15.9076 19.9392 14.6889 21.9378 14.6889C22.8948 14.6889 23.8965 14.8608 23.8965 14.8608V17.0273H22.7932C21.7063 17.0273 21.3672 17.7059 21.3672 18.4028V20.0535H23.7939L23.406 22.5982H21.3672V28.75C25.5503 28.0896 28.75 24.4475 28.75 20.0535Z"
                            fill=""
                            className="fill-paragraph transition-colors duration-500 group-hover:transition-colors group-hover:duration-500 dark:fill-[#7D807B] dark:group-hover:fill-paragraph "
                          />
                        </svg>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={member.dribbleInLink}
                        className="group transition-colors duration-500 hover:transition-colors hover:duration-500">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill=""
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-transparent transition-colors  duration-500 group-hover:fill-primary group-hover:transition-colors group-hover:duration-500">
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="19.5"
                            stroke=""
                            className="stroke-gray-100 dark:stroke-[#464745] "
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 11.25C15.1695 11.25 11.25 15.1695 11.25 20C11.25 24.8305 15.1695 28.75 20 28.75C24.821 28.75 28.75 24.8305 28.75 20C28.75 15.1695 24.821 11.25 20 11.25ZM25.7795 15.2834C26.8235 16.555 27.4499 18.1779 27.4688 19.9336C27.2221 19.8861 24.7546 19.3831 22.2682 19.6963C22.2112 19.5729 22.1638 19.4401 22.1068 19.3072C21.955 18.9466 21.7842 18.5765 21.6133 18.2253C24.3655 17.1055 25.6182 15.4921 25.7795 15.2834ZM20 12.5407C21.898 12.5407 23.6347 13.2524 24.9539 14.4197C24.821 14.6095 23.6917 16.1185 21.0344 17.115C19.8102 14.8658 18.4531 13.0247 18.2443 12.74C18.8042 12.6071 19.3926 12.5407 20 12.5407ZM16.8208 13.2429C17.0201 13.5087 18.3487 15.3593 19.5919 17.561C16.0995 18.4911 13.0152 18.4721 12.683 18.4721C13.167 16.1565 14.7329 14.2299 16.8208 13.2429ZM12.5217 20.0095C12.5217 19.9336 12.5217 19.8576 12.5217 19.7817C12.8444 19.7912 16.4696 19.8387 20.1993 18.7188C20.4176 19.1364 20.6169 19.5634 20.8067 19.9905C20.7118 20.019 20.6074 20.0475 20.5125 20.0759C16.6594 21.3191 14.6095 24.7166 14.4387 25.0013C13.2524 23.6822 12.5217 21.9265 12.5217 20.0095ZM20 27.4783C18.2727 27.4783 16.6784 26.8899 15.4162 25.9029C15.5491 25.6277 17.0675 22.7047 21.2812 21.2338C21.3001 21.2242 21.3097 21.2242 21.3286 21.2148C22.382 23.9384 22.8091 26.2256 22.923 26.8804C22.0214 27.2695 21.0344 27.4783 20 27.4783ZM24.1662 26.1971C24.0903 25.7416 23.6917 23.5588 22.7142 20.8731C25.0583 20.503 27.1082 21.1104 27.3644 21.1958C27.0418 23.2741 25.846 25.0678 24.1662 26.1971Z"
                            fill=""
                            className="fill-paragraph transition-colors duration-500 group-hover:transition-colors group-hover:duration-500 dark:fill-[#7D807B] dark:group-hover:fill-paragraph "
                          />
                        </svg>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={member.gitHubLink}
                        className="group transition-colors duration-500 hover:transition-colors hover:duration-500">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill=""
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-transparent transition-colors  duration-500 group-hover:fill-primary group-hover:transition-colors group-hover:duration-500">
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="19.5"
                            stroke=""
                            className="stroke-gray-100 dark:stroke-[#464745] "
                          />
                          <path
                            d="M20 11.25C15.1656 11.25 11.25 15.1656 11.25 20C11.25 23.8719 13.7547 27.1422 17.2328 28.3016C17.6703 28.3781 17.8344 28.1156 17.8344 27.8859C17.8344 27.6781 17.8234 26.9891 17.8234 26.2563C15.625 26.6609 15.0562 25.7203 14.8812 25.2281C14.7828 24.9766 14.3563 24.2 13.9844 23.9922C13.6781 23.8281 13.2406 23.4234 13.9734 23.4125C14.6625 23.4016 15.1547 24.0469 15.3187 24.3094C16.1063 25.6328 17.3641 25.2609 17.8672 25.0312C17.9438 24.4625 18.1734 24.0797 18.425 23.8609C16.4781 23.6422 14.4438 22.8875 14.4438 19.5406C14.4438 18.5891 14.7828 17.8016 15.3406 17.1891C15.2531 16.9703 14.9469 16.0734 15.4281 14.8703C15.4281 14.8703 16.1609 14.6406 17.8344 15.7672C18.5344 15.5703 19.2781 15.4719 20.0219 15.4719C20.7656 15.4719 21.5094 15.5703 22.2094 15.7672C23.8828 14.6297 24.6156 14.8703 24.6156 14.8703C25.0969 16.0734 24.7906 16.9703 24.7031 17.1891C25.2609 17.8016 25.6 18.5781 25.6 19.5406C25.6 22.8984 23.5547 23.6422 21.6078 23.8609C21.925 24.1344 22.1984 24.6594 22.1984 25.4797C22.1984 26.65 22.1875 27.5906 22.1875 27.8859C22.1875 28.1156 22.3516 28.3891 22.7891 28.3016C24.5261 27.7152 26.0355 26.5988 27.1048 25.1096C28.1741 23.6204 28.7495 21.8333 28.75 20C28.75 15.1656 24.8344 11.25 20 11.25Z"
                            fill=""
                            className="fill-paragraph transition-colors duration-500 group-hover:transition-colors group-hover:duration-500 dark:fill-[#7D807B] dark:group-hover:fill-paragraph "
                          />
                        </svg>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={member.linkedInLink}
                        className="group transition-colors duration-500 hover:transition-colors hover:duration-500">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill=""
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-transparent transition-colors  duration-500 group-hover:fill-primary group-hover:transition-colors group-hover:duration-500">
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="19.5"
                            stroke=""
                            className="stroke-gray-100 dark:stroke-[#464745] "
                          />
                          <path
                            d="M19.9997 11C16.3576 11 13.0763 13.1938 11.6841 16.5547C10.2919 19.9156 11.0607 23.7875 13.6341 26.3609C16.2076 28.9344 20.0794 29.7031 23.4404 28.3109C26.806 26.9234 28.9997 23.6422 28.9997 20C28.9997 15.0312 24.9685 11 19.9997 11ZM17.3841 24.7391H15.4201V18.4109H17.3841V24.7391ZM16.3997 17.5484C15.9357 17.5484 15.5185 17.2719 15.3404 16.8453C15.1622 16.4187 15.256 15.9266 15.5841 15.5984C15.9076 15.2703 16.3997 15.1719 16.8263 15.3453C17.2529 15.5187 17.5341 15.9359 17.5388 16.3953C17.5388 17.0328 17.0326 17.5437 16.3997 17.5484ZM24.7388 24.7391H22.7747V21.6594C22.7747 20.9234 22.7607 19.9859 21.7529 19.9859C20.7451 19.9859 20.5669 20.7828 20.5669 21.6078V24.7391H18.6122V18.4109H20.4966V19.2734H20.5247C20.7872 18.7766 21.4247 18.2516 22.381 18.2516C24.3685 18.2516 24.7341 19.5594 24.7341 21.2609V24.7391H24.7388Z"
                            fill=""
                            className="fill-paragraph transition-colors duration-500 group-hover:transition-colors group-hover:duration-500 dark:fill-[#7D807B] dark:group-hover:fill-paragraph "
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
