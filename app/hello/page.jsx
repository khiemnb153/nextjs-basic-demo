import moment from 'moment/moment'

const BlogPage = async () => {
  const res = await fetch('http://localhost:3000/api/hello')
  const msg = await res.json()

  return (
    <section className='flex w-full flex-col items-center gap-3'>
      <h2 className='text-4xl font-bold'>{msg.message}</h2>
    </section>
  )
}

export default BlogPage
