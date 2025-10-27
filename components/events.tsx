'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const events = [
  {
    edition: 'Edición I',
    date: '03/10 - Ciudad Universitaria',
    attendees: '+50 estudiantes',
  },
  {
    edition: 'Edición II',
    date: 'Noviembre 2024',
    attendees: '+120 estudiantes',
  },
  {
    edition: 'Edición III',
    date: 'Marzo 2025',
    attendees: '+200 estudiantes',
  },
  {
    edition: 'Edición IV',
    date: 'Junio 2025',
    attendees: 'Registrate',
    upcoming: true,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sumate al evento con toda la comunidad de Y-Hat
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className={`p-6 text-center h-full flex flex-col justify-between transition-shadow hover:shadow-xl ${
                  event.upcoming ? 'bg-primary text-primary-foreground border-primary' : 'bg-card'
                }`}>
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold mb-3"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {event.edition}
                    </motion.h3>
                    <motion.p 
                      className={`mb-2 ${event.upcoming ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {event.date}
                    </motion.p>
                  </div>
                  <motion.p 
                    className={`text-xl font-semibold mt-4 ${event.upcoming ? 'text-primary-foreground' : 'text-foreground'}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {event.attendees}
                  </motion.p>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
