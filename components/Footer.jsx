import Image from 'next/image'
import React from 'react'
import { FooterData } from '@/data/data.js'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white pt-20 dark:bg-dark-300">
      <div className="container">
        <div className="mb-20 grid grid-cols-12 max-lg:gap-y-10 max-lg:text-center">
          <div className="col-span-12 lg:col-span-6">
            <Image src={FooterData.logo} alt="logo" className="mb-10 inline-block dark:hidden" width={70} height={29} />
            <Image
              src={FooterData.logoDark}
              alt="logo dark version"
              className="mb-10 hidden dark:inline-block"
              width={70}
              height={29}
            />
            <p className="max-w-[350px] max-lg:mx-auto">{FooterData.footerText}</p>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Explore</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              {FooterData.expolre.map((items) => (
                <li key={items.id}>
                  <Link
                    href={items.link}
                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Resources</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              {FooterData.resources.map((items) => (
                <li key={items.id}>
                  <Link
                    href={items.link}
                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Get In touch</h3>
            <p className="mb-3">Need Support?</p>
            <p className="mb-3">
              <Link
                href={`mailto:${FooterData.email}`}
                className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                {FooterData.email}
              </Link>
            </p>

            <p className="mb-3">
              <Link
                href={`tel:${FooterData.phone.split(' ').join('')}`}
                className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                {FooterData.phone}
              </Link>
            </p>
            <ul className="social-link flex items-center gap-4 max-lg:justify-center">
              {FooterData.socialLinks.map((items) => (
                <li key={items.id}>
                  <Link href={items.link} className="transiton-all">
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="seperator">
          <Image
            src="/images/footer-seperator.svg"
            alt="footer-seperator"
            className="w-full object-cover dark:hidden"
            width={500}
            height={2}
            style={{ width: 'auto', height: 'auto' }}
          />
          <Image
            src="/images/footer-seperator-dark.svg"
            alt="footer-seperator"
            className="hidden w-full object-cover dark:block"
            width={500}
            height={2}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>

        <div className="py-10 max-lg:text-center">
          <div className="flex max-lg:flex-col lg:items-center">
            <p className="max-lg:mb-10">{FooterData.copyright}d</p>
            <ul className="flex items-center gap-15 max-lg:justify-center  lg:ml-auto">
              <li>
                <Link
                  href="/privacy"
                  className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500  before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
