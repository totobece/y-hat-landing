'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-yhat-gradient text-yhat-accent">
      {/* Animated background particles */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(45, 212, 191, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              ease: [0.6, -0.05, 0.01, 0.99],
              type: "spring",
              stiffness: 100
            }}
            className="mb-6"
          >
            <motion.div 
              className="w-48 h-48 mx-auto mb-6 relative"
              animate={{ 
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image 
                src="/Frame 15(1).png" 
                alt="Y-Hat logo" 
                fill 
                sizes="(max-width: 768px) 200px, 300px" 
                className="object-contain mix-blend-lighten" 
                priority
                style={{
                  filter: 'brightness(1.2) contrast(1.1) drop-shadow(0 0 30px rgba(45, 212, 191, 0.4))'
                }}
              />
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Somos Y-Hat.
            </motion.h1>
          </motion.div>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl text-yhat-accent/90 mb-8 max-w-2xl mx-auto"
          >
            El punto de encuentro entre la comunidad estudiantil y el ecosistema de innovación
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.a
              href="#unete"
              className="inline-block px-8 py-4 bg-yhat-accent text-[#0f6b5f] rounded-full font-semibold text-lg hover:opacity-95 transition-colors ring-yhat"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(45, 212, 191, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              ¡SÚMATE A MODELAR EL FUTURO CON NOSOTROS!
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements (soft blobs for depth) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.36, 0.18],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-12 right-12 w-64 h-64 bg-[#0f6b5f]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-12 left-12 w-96 h-96 bg-[#0f3b3a]/8 rounded-full blur-3xl"
      />
    </section>
  )
}

export default Hero
