import "@/styles/globals.css";
import { Nunito, EB_Garamond, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";

export const nunito = Nunito({ subsets: ['latin'] })
export const ebGaramond = EB_Garamond({ subsets: ['latin'] })
export const dmSans = DM_Sans({ subsets: ['latin'] })
export const isBeforeEvent = true;

export default function App({ Component, pageProps }) {
  return (
    <main className={nunito.className}>
      <Navbar className="sticky top-0 z-50"/>
      <Component {...pageProps} />
    </main>
  )
}
