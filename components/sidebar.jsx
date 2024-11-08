import NavItem from './nav-item'

const Sidebar = ({ navItems }) => {
  return (
    <nav className='flex h-full flex-col gap-2 border-r pr-4 text-sm'>
      {navItems.map((item, index) => (
        <NavItem
          key={`sideNavItem${index}`}
          title={item.title}
          link={item.link}
        />
      ))}
    </nav>
  )
}

export default Sidebar
