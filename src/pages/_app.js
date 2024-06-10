import "@/styles/globals.css";
import { Nunito, EB_Garamond } from "next/font/google";

export const nunito = Nunito({ subsets: ['latin'] })
export const ebGaramond = EB_Garamond({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  )
}
