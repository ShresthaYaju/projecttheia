import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Open_Sans } from 'next/font/google'

const open_sans  = Open_Sans({ 
  subsets: ['latin'],
  weight: "400",
  variable: '--font-OpenSans',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} bg-background text-slate-100 font-sans`}>{children}</body>
    </html>
  )
}
