'use client'

import { useRouter } from 'next/navigation'

const NotFoundPage = () => {
  const router = useRouter()
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-3'>
      <h2 className='text-4xl font-bold'>Page Not Found</h2>
      <p>The page you're searching for isn't available.</p>
      <button
        className='rounded-full bg-black px-8 py-2 text-white transition-all hover:scale-105'
        onClick={() => router.back()}
      >
        Back
      </button>
    </div>
  )
}

export default NotFoundPage
