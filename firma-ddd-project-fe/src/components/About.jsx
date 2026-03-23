import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';
import aboutImage from '../images/about.jpg';

const About = () => {
  const features = [
    'Acoperim toate zonele din București si Ilfov',
    'Diferite servicii de curatare disponibile',
    'Curățători profesioniști',
    'Serviciu 7 zile pe săptămână',
    'Birou in Bucuresti pentru sprijin'
  ];

  return (
    <motion.section 
      className="relative bg-transparent mt-[-150px] z-20"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="container mx-auto px-4 py-0 flex justify-center">
        <div className="bg-blue-600 rounded-3xl px-4 py-5 md:px-8 md:py-6 lg:px-9 lg:py-7 max-w-6xl w-full shadow-2xl flex flex-col md:flex-row items-center gap-5 md:gap-7">
          {/* Cloud-style image on the left */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 z-0 ring-4 ring-blue-200 ring-offset-4 ring-offset-transparent"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                }}
              />
              <div className="absolute inset-4 rounded-[60%] overflow-hidden ring-4 ring-white/40 ring-offset-2 ring-offset-transparent">
                <img
                  src={aboutImage}
                  alt="Professional cleaner working in a modern kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* sparkle accents */}
              <span className="absolute top-2 right-0 text-white/60 text-2xl">✦</span>
              <span className="absolute -bottom-1 left-3 text-white/60 text-xl">✦</span>
              <span className="absolute top-1 left-8 text-white/60 text-lg">✦</span>
            </motion.div>
          </div>

          {/* Text content on the right */}
          <motion.div 
            className="w-full md:w-1/2 bg-white rounded-2xl p-4 md:p-5 lg:p-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              Afla mai multe despre noi si echipa noastra profesionala!
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-4 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
               Suntem o companie privată cu capital integral românesc, specializată în servicii profesionale D.D.D. (Dezinfecție, Dezinsecție și Deratizare).
            </motion.p>
            <ul className="text-gray-700 space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/about">
              <Button variant="primary" className="w-full md:w-auto">
                Despre Noi
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
