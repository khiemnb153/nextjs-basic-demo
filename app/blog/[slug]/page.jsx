import moment from 'moment/moment'

export const revalidate = 15

export const dynamicParams = false

export const generateStaticParams = async () => {
  const posts = await fetch('http://localhost:4000/api/blog').then((res) => res.json())
  return posts.map((post) => ({
    slug: String(post.slug),
  }))
}

const BlogPage = async ({ params }) => {
  const { slug } = await params
  const res = await fetch(`http://localhost:4000/api/blog/${slug}`)
  const blog = await res.json()

  const currentTime = new Date()

  return (
    <section className='flex w-full flex-col items-center gap-3'>
      <h2 className='text-4xl font-bold'>{blog.title}</h2>
      <span>(This page is server-side rendered at {moment(currentTime).format('HH:mm:ss DD/MM/YYYY')})</span>
      <span>Author: {blog.author}</span>
      {blog.content.map((para, index) => (
        <p key={`${blog.id}Para${index}`}>{para}</p>
      ))}
    </section>
  )
}

export default BlogPage
