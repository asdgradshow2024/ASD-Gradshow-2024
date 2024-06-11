import { motion } from "framer-motion"

export default function SectionNavArrow({
  href,
  iconSize=32,
  strokeWidth=2,
}) {
  return (
    <div className="rounded-full w-12 h-12 bg-navbar-bg border-2 border-text-primary flex items-center justify-center">
      <a href={href}>
        <motion.div
          animate={{
            y: [0, 5, 0], // y-axis movement
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-down"
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            strokeWidth={strokeWidth}
            stroke="#673F3D"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </motion.div>
      </a>
    </div>
  )
}