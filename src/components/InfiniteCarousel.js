import { motion } from "framer-motion"

export default function InfiniteCarousel({ imageUrl, className }) {
  return (
    <div className={`relative w-screen h-full ${className} overflow-hidden`}>
      <motion.div
        className="flex h-full absolute top-0 left-0"
        initial={{ x: 0 }}
        animate={{ x: '-200vw' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20, // Adjust the duration to control the speed
          ease: 'linear',
        }}
      >
        <div className="w-[200vw] h-full flex-shrink-0">
          <img
            src={imageUrl}
            className="w-full h-full object-cover"
            alt="carousel"
          />
        </div>
        <div className="w-[200vw] h-full flex-shrink-0">
          <img
            src={imageUrl}
            className="w-full h-full object-cover"
            alt="carousel"
          />
        </div>
      </motion.div>
    </div>
  )
}