'use client'
import { usePathname } from 'next/navigation'
import PrimaryNavbar from './PrimaryNavbar'
import SecondaryNavbar from './SecondaryNavbar'

const Navbar = () => {
  const pathname = usePathname()
  return pathname === '/' ? <PrimaryNavbar /> : <SecondaryNavbar />
}

export default Navbar
