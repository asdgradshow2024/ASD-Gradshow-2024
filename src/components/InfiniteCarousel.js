import { motion } from "framer-motion"

export default function InfiniteCarousel({ imageUrl, className }) {
  return (
    <div className={`relative w-screen h-full ${className} overflow-hidden`}>
      <motion.div
        className="flex h-full absolute top-0 left-0"
        // initial={{ x: '110vw' }}
        // animate={{ x: '-310vw' }}
        initial={{ x: 0 }}
        animate={{ x: '-200%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        }}
      >
        <div className="h-full flex-shrink-0">
          <img
            src={imageUrl}
            className="h-full object-cover"
            alt="carousel"
          />
        </div>
        <div className="h-full flex-shrink-0">
          <img
            src={imageUrl}
            className="h-full object-cover"
            alt="carousel"
          />
        </div>
        {/* <div className="w-[200vw] h-full flex-shrink-0">
          <img
            src={imageUrl}
            className="w-full h-full object-cover"
            alt="carousel"
          />
        </div> */}
      </motion.div>
    </div>
  )
}