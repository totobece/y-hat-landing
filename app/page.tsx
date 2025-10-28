'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import { ImageCarousel } from '@/components/image-carousel';
import { EventCard } from '@/components/ui/event-card';
import events from '@/data/events.json';
import partners from '@/data/partners.json';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header/Navbar */}
      <header className="fixed top-0 w-full z-50 bg-linear-to-b from-black/60 to-transparent backdrop-blur-sm shadow-sm transition-colors">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/logo.svg" alt="Y-Hat Logo" width={40} height={40} className="rounded-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-4"
          >
            <a href="https://instagram.com/somos.yhat" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/company/y-hat" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl px-6 py-13  mx-auto text-center rounded-2xl shadow-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8" 
          >
            <Image src="/logo.svg" alt="Y-Hat" width={150} height={150} className="mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Somos Y-Hat.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
          >
            El punto de encuentro entre la comunidad estudiantil y el ecosistema de innovación
          </motion.p>
        </div>
      </section>

      {/* Image Carousel */}
      <ImageCarousel />

      {/* Mission Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Creamos espacios que generan vínculos genuinos y colaborativos entre personas que moldean el futuro.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              La misión de Y-Hat es ayudar a consolidar una comunidad de estudiantes y emprendedores que puedan acompañarse a lo largo de su carrera construyendo el futuro.
            </p>
            <motion.a
              href="#eventos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition-colors"
            >
              Conocé más
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="eventos" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
          >
            Sumate a los eventos de la comunidad Y-Hat
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard 
                key={index} 
                index={index} 
                active={event.active}
                href={event.href}
              >
                <h3 className="text-2xl font-bold mb-2">{event.edition}</h3>
                <p className="text-gray-300 mb-1">{event.date}</p>
                <p className="text-teal-400 font-semibold">{event.participants}</p>
              </EventCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
          >
            Confían en nosotros
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center"
          >
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center text-xs text-center p-2">
                Partner {i + 1}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              ¡SÚMATE A MODELAR EL FUTURO CON NOSOTROS!
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-teal-500 hover:bg-teal-600 text-white text-xl font-bold rounded-full transition-colors"
            >
              Registrate
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Image src="/Frame 15.png" alt="Y-Hat" width={50} height={50} className="rounded-lg" />
            <span className="font-semibold">Y-Hat</span>
          </div>
          <div className="flex gap-6">
            <a href="https://instagram.com/somos.yhat" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/company/y-hat" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

