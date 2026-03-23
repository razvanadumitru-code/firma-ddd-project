import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';
import service1Image from '../images/service1.jpg';
import service2Image from '../images/service2.jpg';
import service3Image from '../images/service3.jpg';
import service4Image from '../images/service4.jpg';
import icon1 from '../images/icon1.webp';
import icon2 from '../images/icon2.webp';
import icon3 from '../images/icon3.webp';
import icon4 from '../images/icon4.webp';

const Services = () => {
  const serviceCategories = [
    {
      id: 'deratizare',
      title: 'Deratizare',
      description: 'Solutii profesionale pentru eliminarea rozatoarelor in siguranta.',
      image: service1Image
    },
    {
      id: 'dezinsectie',
      title: 'Dezinsectie',
      description: 'Tratamente eficiente impotriva insectelor taratoare si zburatoare.',
      image: service2Image
    },
    {
      id: 'curatare',
      title: 'Servicii de curatare',
      description: 'Curatenie profesionala pentru locuinte, birouri si spatii comerciale.',
      image: service3Image
    }
  ];

  return (
    <motion.section 
      className="bg-white-100 pt-12 pb-16"
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Serviciile Noastre
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Alege una dintre categoriile noastre principale de servicii pentru a descoperi solutiile potrivite pentru tine.
          </motion.p>
        </motion.div>

        {/* Static 3-box layout for the main categories */}
        <motion.div
          className="mt-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 py-5 md:px-8 md:py-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 text-center">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Button to go to full Services page */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Link to="/services">
            <Button variant="primary" className="px-8 py-3">
              Vezi Servicile Noastre
            </Button>
          </Link>
        </motion.div>
        
        {/* About Card */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-blue-600 rounded-3xl px-4 py-5 md:px-8 md:py-7 lg:px-10 lg:py-8 max-w-6xl w-full shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Image on the left */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden">
                      <img
                        src={icon1}
                        alt="Profesionalism"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Professional</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden">
                      <img
                        src={icon2}
                        alt="Eco-Friendly"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Eco-Friendly</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden">
                      <img
                        src={icon3}
                        alt="Calitate"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Quality</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden">
                      <img
                        src={icon4}
                        alt="Flexibilitate"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Flexible</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content on the right */}
            <div className="w-full md:w-1/2 bg-white rounded-2xl p-5 md:p-7 lg:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                De ce sa ne alegeti pe noi ?
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Nu suntem doar o firma de curatenie. Suntem partenerul tau de incredere in mentinerea unui mediu curat, sanatos si confortabil. Angajamentul nostru fata de excelenta si satisfactia clientilor ne deosebeste de ceilalti.
              </p>
              <div className="text-gray-700 space-y-2 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Satisfactia clientului este multumirea noastra!</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Produse de curatenie ecologice</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Suntem rapizi si eficienti!</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Preturile reflecta calitatea</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Echipa profesionista si echipamentele de ultima generatie utilizate!</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Fiecare actiune a noastra, are pretul corect!</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <div className="mt-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left side - Title, Description, Button */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Pregatit pentru o improspatare a locului tau?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Contacteaza-ne astazi pentru o oferta gratuita si experimenteaza diferenta curateniei profesionale. Echipa noastra este gata sa transforme spatiul tau intr-un loc curat, proaspat si confortabil.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/contact">
                <Button variant="primary" className="px-8 py-3 text-lg rounded-full">
                  Contacteaza-ne!
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image with blob background */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative w-full max-w-md h-72 md:h-96"
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
              <img
                src={service4Image}
                alt="Professional cleaning service"
                className="relative z-10 w-full h-full object-cover rounded-[35%] shadow-2xl"
              />
              {/* decorative elements around blob */}
              <span className="absolute -top-3 -right-3 text-blue-400 text-xl font-bold z-20">+</span>
              <span className="absolute -bottom-3 -left-3 text-cyan-400 text-xl font-bold z-20">+</span>
              <span className="absolute top-4 left-4 text-blue-300 text-2xl z-20">✦</span>
              <span className="absolute bottom-4 right-6 text-blue-300 text-xl z-20">✦</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
