import moment from 'moment/moment'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const BlogsPage = async () => {
  const res = await fetch('http://localhost:4000/api/blog')
  const blogs = await res.json()

  const currentTime = new Date()

  return (
    <section className='flex w-full flex-col items-center gap-3'>
      <h2 className='text-4xl font-bold'>Blog</h2>
      <span>(This page is server-side rendered at {moment(currentTime).format('HH:mm:ss DD/MM/YYYY')})</span>
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          href={'/blog/' + blog.slug}
          className='w-full rounded-lg border bg-white p-4 transition-all hover:drop-shadow-md'
        >
          <h3 className='text-xl font-bold'>{blog.title}</h3>
          <span className='text-sm'>{blog.author}</span>
        </Link>
      ))}
    </section>
  )
}

export default BlogsPage
