'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram, Linkedin } from 'lucide-react'

export function JoinUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section id="unete" ref={ref} className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Unite a Y-Hat 🎓
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-12 text-primary-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Conectá con estudiantes innovadores, emprendedores y futuros líderes 
              que están transformando el ecosistema universitario.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/somos.yhat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary rounded-full font-semibold text-lg hover:bg-primary-foreground/90 transition-colors w-full sm:w-auto justify-center shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Instagram className="w-6 h-6" />
                </motion.div>
                somos.yhat
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/company/y-hat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary-foreground/10 transition-colors w-full sm:w-auto justify-center"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.div>
                Ŷ (Y Hat)
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
