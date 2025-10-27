'use client'

import { motion } from 'framer-motion'
import { Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <motion.h3 
                className="text-2xl font-bold text-primary mb-2"
                whileHover={{ scale: 1.05 }}
              >
              </motion.h3>
              <p className="text-muted-foreground">
                Modelando el futuro juntos
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <motion.a
                href="https://instagram.com/somos.yhat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/y-hat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground"
          >
            <p>© 2025 Y-Hat. Todos los derechos reservados.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
