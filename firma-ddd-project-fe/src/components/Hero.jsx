import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';
import heroImage from '../images/hero.jpg';

const Hero = () => {
  return (
    <section
      className="relative pt-38 pb-0 min-h-[720px] z-10 mb-[-150px]"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/60" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center pt-8">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Firma DDD - Bucuresti, Ilfov
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-900 mb-8"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
             Firma DDD va ofera servicii de Deratizare, Dezinsectie, Dezinfectie si de Curatenie Profesionala – pentru persoane fizice si juridice, in Bucuresti – Ilfov. 
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <Link to="/contact">
                <Button variant="primary" className="text-lg px-8 py-4 rounded-full">
                  Contacteaza-ne
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
