'use client'
import { menuData } from '@/data/data'
import { cn } from '@/utils/cn'
import { faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import SearchOption from '../SearchOption'
import TopBar from './TopBar'

const SecondaryNavbar = () => {
  const pathname = usePathname()
  const [showSearch, setShowSearch] = useState(false)
  const [innerMobileMenu, setInnerMobileMenu] = useState(false)
  const [sticky, setSticky] = useState(false)
  const handleStickyNavbar = () => {
    if (window.scrollY >= 20) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar)

    return () => {
      window.removeEventListener('scroll', handleStickyNavbar)
    }
  }, [])

  return (
    <header>
      <TopBar sticky={sticky} />
      <div
        className={cn(
          'fixed left-0 top-12 z-50 w-full bg-transparent transition-all duration-500 max-md:z-[500]',
          sticky ? 'nav-sticky' : '',
        )}>
        <nav className="container flex items-center">
          <div className="nav-logo">
            <Link href="/">
              <Image src={menuData.logoLight} alt="logo" className="dark:hidden" width={70} height={29} />
              <Image
                src={menuData.logoDark}
                alt="logo dark version"
                className="hidden dark:inline-block"
                width={70}
                height={29}
              />
            </Link>
          </div>
          <ul className="nav-list hidden lg:ml-7 lg:flex xl:ml-15 [&>*:not(:last-child)]:me-1">
            {menuData.menuContent.map((menuItem) => (
              <li className={`${menuItem.path ? '' : 'group relative'}`} key={menuItem.id}>
                {menuItem.path ? (
                  <>
                    <Link
                      href={menuItem.path}
                      className={cn(
                        'flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium capitalize leading-8 text-paragraph transition-colors duration-500 hover:border-borderColor hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColor/10 dark:hover:bg-dark-200 lg:px-4 xl:px-5',
                        pathname === menuItem.path ? 'active' : '',
                      )}>
                      {menuItem.title}
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/"
                      className="flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium capitalize leading-8 text-paragraph transition-colors duration-500 hover:border-borderColor hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColor/10 dark:hover:bg-dark-200 lg:px-4 xl:px-5">
                      {menuItem.title}
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="ml-1 mt-1 text-paragraph duration-500 group-hover:rotate-180 dark:text-white"
                      />
                    </Link>
                    <ul className="absolute left-0 top-12 z-10 min-w-[250px] origin-top scale-y-0 rounded-md bg-white p-5 opacity-0 duration-500  group-hover:scale-y-100 group-hover:opacity-100 dark:bg-dark-200 [&>*:not(:first-child)]:mt-2.5 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColor dark:[&>*:not(:last-child)]:border-borderColor-dark">
                      {menuItem.submenu.map((submenuItem) => (
                        <li
                          className="relative overflow-hidden pb-2.5 text-base capitalize text-paragraph duration-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                          key={submenuItem.id}>
                          <Link href={submenuItem.path} className="flex">
                            {submenuItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>

          <ul className="ml-auto flex items-center  [&>*:not(:last-child)]:me-2.5">
            <li className="">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="rounded-full bg-white p-2.5 dark:bg-dark-200 "
                id="open-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.11278 0C14.1369 0 18.2245 4.08758 18.2245 9.11278C18.2245 11.2861 17.4592 13.5472 16.1845 14.8512L20 18.6667L18.6667 20L14.8512 16.1856C13.5667 17.4603 11.2861 18.2245 9.11278 18.2245C4.08758 18.2245 0 14.1369 0 9.11278C0 4.08758 4.08758 0 9.11278 0ZM9.11278 16.3395C13.0974 16.3395 16.3395 13.0974 16.3395 9.11278C16.3395 5.12818 13.0974 1.88608 9.11278 1.88608C5.12709 1.88608 1.88499 5.12818 1.88499 9.11278C1.88499 13.0974 5.12709 16.3395 9.11278 16.3395Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                </svg>
              </button>
            </li>
            <li className="max-lg:hidden">
              <Link href="/request-demo" className="btn btn-navbar btn-sm">
                Request Demo
              </Link>
            </li>
            <li className="max-lg:inline-block lg:hidden ">
              <button
                className="mobile-menu-button relative h-10 w-10 rounded-full bg-white outline-none dark:bg-dark-200"
                onClick={() => setInnerMobileMenu(!innerMobileMenu)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="14"
                  viewBox="0 0 22 14"
                  fill="none"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <path
                    d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447716 2 0 1.55228 0 1Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                  <path
                    d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H9C8.44772 8 8 7.55228 8 7Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                  <path
                    d="M4 13C4 12.4477 4.44772 12 5 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H5C4.44772 14 4 13.5523 4 13Z"
                    fill=""
                    className="fill-paragraph dark:fill-white"
                  />
                </svg>
              </button>
            </li>
          </ul>

          <div className={`mobile-menu max-lg:overflow-y-auto ${innerMobileMenu ? 'open' : ''}`}>
            <button
              className=" navbar-toggle-close absolute right-6 top-5 h-10 w-10 rounded-full bg-white outline-none dark:bg-dark-200"
              onClick={() => setInnerMobileMenu(!innerMobileMenu)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul className="nav-list flex w-full max-w-[500px] flex-col gap-5 landscape:h-full">
              {menuData.menuContent.map((menuItem) => (
                <li className={`${menuItem.path ? '' : 'group relative'}`} key={menuItem.id}>
                  {menuItem.path ? (
                    <>
                      <Link
                        href={menuItem.path}
                        className={cn(
                          'flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium leading-8 text-paragraph transition-colors duration-500 hover:border-borderColor hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColor/10 dark:hover:bg-dark-200 lg:px-4 xl:px-5',
                          pathname === menuItem.path ? 'active' : '',
                        )}
                        onClick={() => setInnerMobileMenu(!innerMobileMenu)}>
                        {menuItem.title}
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="#"
                        className="flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium leading-8 text-paragraph transition-colors duration-500 hover:border-borderColor hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColor/10 dark:hover:bg-dark-200 lg:px-4 xl:px-5">
                        {menuItem.title}
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="ml-auto mt-1 text-paragraph duration-500 group-hover:rotate-180 dark:text-white"
                        />
                      </Link>
                      <ul className="absolute left-0 top-12 z-10 min-w-[250px] origin-top scale-y-0 rounded-md bg-white p-5 opacity-0 duration-500  group-hover:scale-y-100 group-hover:opacity-100 dark:bg-dark-200 [&>*:not(:first-child)]:mt-2.5 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-borderColor dark:[&>*:not(:last-child)]:border-borderColor-dark">
                        {menuItem.submenu.map((submenuItem) => (
                          <li
                            className="relative overflow-hidden pb-2.5 text-base capitalize text-paragraph duration-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:before:bg-white"
                            key={submenuItem.id}>
                            <Link
                              href={submenuItem.path}
                              className="flex"
                              onClick={() => setInnerMobileMenu(!innerMobileMenu)}>
                              {submenuItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}

              <li>
                <Link href="/request-demo" className="btn btn-navbar btn-sm">
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {showSearch && createPortal(<SearchOption onClose={() => setShowSearch(false)} />, document.body)}
    </header>
  )
}

export default SecondaryNavbar
