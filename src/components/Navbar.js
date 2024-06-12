import Image from "next/image";
import { dmSans } from "@/pages/_app";
import MarkupSwitcher from "./MarkupSwitcher";

export default function Navbar({ className }) {
  return (
    <nav className={`flex justify-between items-center w-full py-2 px-3 bg-navbar-bg md:py-4 md:px-6 border-b-[1px] border-b-text-primary ${className}`}>
      <MarkupSwitcher
        breakpoint="md"
        above={<Image 
          src="/asd_logo.png"
          alt="logo"
          width={200}
          height={24}
        />}
        below={<Image 
          src="/asd_logo.png"
          alt="logo"
          width={120}
          height={14}
        />}
      />
      <MarkupSwitcher 
        breakpoint="md"
        above={
          <div className={`flex justify-between items-center ${dmSans.className} w-3/12 font-semibold`}>
            <a href="#about">About</a>
            <a href="#launch-night">Launch Night</a>
            <a target="_blank" href="https://asd.sutd.edu.sg/" rel="noopener noreferrer">ASD Website</a>
          </div>
        }
      />
    </nav>
  )
}