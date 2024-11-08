'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItem = ({ title, link }) => {
  const pathname = usePathname()

  return (
    <li className='list-none'>
      <Link
        className='hover:text-blue-500 aria-checked:font-medium aria-checked:text-blue-500'
        aria-checked={link == '/' ? pathname == '/' : pathname.startsWith(link)}
        href={link}
      >
        {title}
      </Link>
    </li>
  )
}

export default NavItem
