import "@/styles/globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <div className={plusJakartaSans.className} >

      <Component {...pageProps} />
    </div>
  )
}
