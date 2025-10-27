'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 14, 18, 0.5)', 'rgba(10, 14, 18, 0.95)']
  )
  
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Image src="/Frame 15.png" alt="Y-Hat logo" width={56} height={56} className="rounded-sm" />
          </motion.div>
          <motion.span 
            className="font-semibold text-yhat-accent"
            whileHover={{ scale: 1.05 }}
          >
            Y-Hat
          </motion.span>
        </Link>
        <div className="flex items-center gap-4">
          <motion.a 
            href="https://instagram.com/somos.yhat" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-yhat-accent hover:text-yhat-light-teal transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            @somos.yhat
          </motion.a>
          <motion.a 
            href="https://linkedin.com/company/y-hat" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-yhat-accent hover:text-yhat-light-teal transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
