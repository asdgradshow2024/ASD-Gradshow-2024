import Image from "next/image"
import characterBanner from '../../public/characters.png'

export default function Custom404() {
  return (
    <div className="p-8">
      <Image
        src={characterBanner}
        alt="404 banner"
        priority
      />
    </div>
  )
}