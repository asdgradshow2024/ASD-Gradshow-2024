'use client'
import Image from "next/image";
import { dmSans } from "@/pages/_app";
import { useBreakpoint } from "@/hooks/useBreakpoints"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { prefix } from "@/utils/prefix";

export default function Navbar({ className }) {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(false);
  const { isAbove } = useBreakpoint('md')
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  useEffect(() => {
    setIsAboveBreakpoint(isAbove)
  }, [isAbove])

  return (
    <nav className={`flex justify-between items-center w-full py-2 px-3 bg-navbar-bg md:py-4 md:px-6 border-b-[1px] border-b-text-primary ${className}`}>
      <Image 
        src={`${prefix}/asd_logo.png`}
        alt="logo"
        width={isAboveBreakpoint ? 200 : 150}
        height={isAboveBreakpoint ? 24 : 18}
      />
      {
        isAboveBreakpoint ? (
          <div className={`flex justify-between items-center ${dmSans.className} w-3/12 font-semibold`}>
            <a href="#about">About</a>
            <a href="#launch-night">Launch Night</a>
            <a target="_blank" href="https://asd.sutd.edu.sg/" rel="noopener noreferrer">ASD Website</a>
          </div>
        ) : (
          <>
            <button className="navbar-burger flex items-center" onClick={() => setBurgerMenuOpen(true)}>
              <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          
            <AnimatePresence>
              {burgerMenuOpen && (
                <motion.div
                  className="absolute top-0 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div
                    className="fixed inset-0 bg-gray-800 opacity-50"
                    onClick={() => setBurgerMenuOpen(false)}
                  />
                  <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-1/2 max-w-sm py-6 px-6 bg-navbar-bg border-l-2 border-l-text-primary">
                    <div className="flex items-center justify-end mb-8">
                      <button onClick={() => setBurgerMenuOpen(false)}>
                        <svg className="h-6 w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex flex-col items-center gap-6">
                        <Image
                          src={`${prefix}/oh_logo.png`}
                          alt="logo"
                          width={150}
                          height={150}
                        />
                        <div
                          className={`flex flex-col items-center gap-2 ${dmSans.className}`}
                          onClick={() => setBurgerMenuOpen(false)}
                        >
                          <a href="#about">About</a>
                          <a href="#launch-night">Launch Night</a>
                          <a target="_blank" href="https://asd.sutd.edu.sg/" rel="noopener noreferrer">ASD Website</a>
                        </div>
                      </div>
                      <Image
                        src={`${prefix}/asd_logo.png`}
                        alt="asd_logo"
                        width={150}
                        height={150}
                      />
                    </div>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )
      }
    </nav>
  )
}