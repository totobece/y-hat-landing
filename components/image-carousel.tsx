'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function ImageCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Columnas laterales se mueven hacia arriba (inverso al scroll)
  const leftY = useTransform(scrollYProgress, [0, 1], [0, -400])
  const rightY = useTransform(scrollYProgress, [0, 1], [0, -400])
  
  // Columna central se mueve hacia abajo (con el scroll)
  const centerY = useTransform(scrollYProgress, [0, 1], [0, 400])
  
  // Dividir en 3 columnas
  const leftColumn = [1, 2, 3]
  const centerColumn = [4, 5, 6]
  const rightColumn = [7, 8, 9]
  
  return (
    <section ref={containerRef} className="py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Columna izquierda - scroll hacia arriba (inverso) */}
          <motion.div
            className="flex flex-col gap-4"
            style={{ y: leftY }}
          >
            {leftColumn.map((num) => (
              <div
                key={`left-${num}`}
                className="w-full p-3 aspect-square bg-linear-to-br from-teal-500/20 to-emerald-500/20 rounded-2xl border border-teal-500/30 flex items-center justify-center backdrop-blur-sm"
              >
                <Image src={`/images-carrousel/image${num}.jpg`} alt={`Image ${num}`} width={200} height={200} className="w-full h-full object-cover rounded-2xl opacity-80" />
              </div>
            ))}
          </motion.div>
          
          {/* Columna central - scroll hacia abajo (con el scroll) */}
          <motion.div
            className="flex flex-col gap-4"
            style={{ y: centerY }}
          >
            {centerColumn.map((num) => (
              <div
                key={`center-${num}`}
                className="w-full p-3 aspect-square bg-linear-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm"
              >
                <Image src={`/images-carrousel/image${num}.jpg`} alt={`Image ${num}`} width={200} height={200} className="w-full h-full object-cover rounded-2xl opacity-80" />
              </div>
            ))}
          </motion.div>
          
          {/* Columna derecha - scroll hacia arriba (inverso) */}
          <motion.div
            className="flex flex-col gap-4"
            style={{ y: rightY }}
          >
            {rightColumn.map((num) => (
              <div
                key={`right-${num}`}
                className="w-full p-3 aspect-square bg-linear-to-br from-emerald-500/20 to-green-500/20 rounded-2xl border border-emerald-500/30 flex items-center justify-center backdrop-blur-sm"
              >
                <Image src={`/images-carrousel/image${num}.jpg`} alt={`Image ${num}`} width={200} height={200} className="w-full h-full object-cover rounded-2xl opacity-80" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

