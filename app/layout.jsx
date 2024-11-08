import { Poppins } from 'next/font/google'
import './globals.css'

import Header from '@components/header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Demo for SE347.P12 Next.js Seminar',
  description: 'A demonstration from Team 7 for the SE347.P12 seminar on Next.js, showing some basic things on Next.js.',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className={`${poppins.className} flex min-h-screen w-[dvw] flex-col antialiased`}>
        <Header />
        <main className='mx-auto my-4 w-full max-w-[1024px] flex-grow'>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
