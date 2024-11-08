const BlogsLoadingPage = () => {
  return (
    <section className='flex w-full flex-col items-center gap-3'>
      <h2 className='text-4xl font-bold'>Blog</h2>
      {[1, 2, 3].map((i) => (
        <div
          key={`blogLoadingItem${i}`}
          className='flex w-full animate-pulse flex-col gap-2 rounded-lg border bg-white p-4 transition-all'
        >
          <h3 className='h-6 w-[320px] rounded-full bg-slate-200 text-xl font-bold'></h3>
          <span className='h-4 w-[160px] rounded-full bg-slate-200 text-sm'></span>
        </div>
      ))}
    </section>
  )
}

export default BlogsLoadingPage
