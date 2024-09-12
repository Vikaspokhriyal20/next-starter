import './globals.css'
import Navbar from '@/Components/navbar/Navbar'
import Footer from '@/Components/footer/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata = {
  title: 'Next App',
  description: 'Next Js is on the way',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
