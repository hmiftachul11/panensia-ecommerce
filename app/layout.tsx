import { Footer, Navbar } from '@/components'
import './globals.css'


export const metadata: Metadata = {
  title: 'Panensia',
  description: 'Inovasion Food by Panensia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
