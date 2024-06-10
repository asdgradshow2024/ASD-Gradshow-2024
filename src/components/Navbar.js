import Image from "next/image";
import { dmSans } from "@/pages/_app";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full bg-navbar-bg py-4 px-6 border-b-[1px] border-b-text-primary">
      <Image 
        src="/asd_logo.png"
        alt="logo"
        width={200}
        height={24}
      />
      <div className={`flex justify-between items-center ${dmSans.className} w-3/12 font-semibold`}>
        <a href="#about">About</a>
        <a href="#launch-night">Launch Night</a>
        <a target="_blank" href="https://asd.sutd.edu.sg/" rel="noopener noreferrer">ASD Website</a>
      </div>
    </nav>
  )
}