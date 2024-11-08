import NavItem from './nav-item'

const navItems = [
  { title: 'Home', link: '/' },
  { title: 'Blog', link: '/blog' },
  { title: 'About', link: '/about' },
]

const Header = () => {
  return (
    <header className='sticky top-0 w-full border-b bg-white p-4 drop-shadow-sm'>
      <div className='mx-auto my-0 flex w-full max-w-[1024px] flex-row items-center justify-between'>
        <h1 className='text-2xl font-bold'>SE347.P12 Next.js Demo</h1>
        <nav className='flex flex-row gap-12'>
          {navItems.map((item, index) => (
            <NavItem
              key={`navItem${index}`}
              title={item.title}
              link={item.link}
            />
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
