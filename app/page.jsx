import Link from 'next/link'

const Home = () => {
  return (
    <section className='flex w-full flex-col items-center gap-3'>
      <h2 className='text-4xl font-bold'>Welcome</h2>
      <p className='text-center'>
        This is a demonstration from Team 7 for the SE347.P12 seminar on Next.js.
        <br />
        It will show you some basic interesting things on Next.js.
      </p>
      <Link
        className='rounded-full bg-black px-8 py-2 text-white transition-all hover:scale-105'
        href={'/blog'}
      >
        Get Started
      </Link>
    </section>
  )
}

export default Home
