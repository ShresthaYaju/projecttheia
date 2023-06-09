
import './globals.css'
import { Open_Sans } from 'next/font/google'
import RecoilRootWrapper from '@/components/Wrapper/RecoilRootWrapper'
import Navbar from '@/components/Navbar/Navbar'



const open_sans  = Open_Sans({ 
  subsets: ['latin'],
  weight: ["400", "700"],
  variable: '--font-OpenSans',
})

export const metadata = {
  title: 'Theia AI',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={`${open_sans.className} ${open_sans.variable} bg-background text-slate-100 font-sans`}>
        <RecoilRootWrapper>
        <Navbar />
        {children}
        </RecoilRootWrapper>
        </body>
    </html>
  )
}
