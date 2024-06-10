import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
        <Image 
          src="/asd_logo.png"
          alt="logo"
          width={200}
          height={24}
        />
        {/* <div className="flex justify-between items-center">

        </div> */}
    </nav>
  )
}