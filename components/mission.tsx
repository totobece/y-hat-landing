'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function Mission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="bg-linear-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20 backdrop-blur-sm"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 mx-auto mb-6"
              >
                <motion.svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full text-primary"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <path
                    d="M 50 20 L 70 50 L 60 50 L 60 80 L 40 80 L 40 50 L 30 50 Z"
                    fill="currentColor"
                  />
                  <line x1="30" y1="45" x2="70" y2="45" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="17" r="3" fill="currentColor" />
                </motion.svg>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                La misión de Y-Hat
              </motion.h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-center text-muted-foreground leading-relaxed"
            >
              es crear espacios que generan vínculos genuinos y colaborativos entre 
              estudiantes que moldean el futuro, ayudando a consolidar una comunidad 
              que pueda acompañarse a lo largo de su carrera construyendo proyectos 
              e innovando en el ecosistema universitario.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 text-center"
            >
              <motion.a
                href="#manifiesto"
                className="inline-block text-primary hover:text-primary/80 font-semibold transition-colors"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Leé el manifiesto →
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
