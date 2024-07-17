import Image from "next/image"
import Error404 from '../../public/404-error.png'

export default function Custom404() {
  return (
    <div className="p-8 md:w-1/2 md:m-auto">
      <Image
        src={Error404}
        alt="404 banner"
        priority
      />
    </div>
  )
}