import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import service1Image from '../images/service1.jpg';
import service2Image from '../images/service2.jpg';
import service3Image from '../images/service3.jpg';

const serviceCategories = [
  {
    id: 'deratizare',
    title: 'Deratizare',
    shortDescription: 'Servicii profesionale pentru controlul si eliminarea rozatoarelor.',
    image: service1Image,
    included: [
      'Inspectie completa a spatiului',
      'Identificarea punctelor de acces',
      'Aplicarea de substante omologate',
      'Monitorizare si interventii repetate la nevoie'
    ],
    fullDescription:
      'Serviciile noastre de deratizare sunt concepute pentru a elimina in siguranta rozatoarele din locuinte, spatii comerciale si industriale. Folosim substante omologate, metode sigure pentru oameni si animale de companie, si oferim monitorizare periodica pentru a preveni reaparitia infestarii.'
  },
  {
    id: 'dezinsectie',
    title: 'Dezinsectie',
    shortDescription: 'Tratamente eficiente impotriva insectelor taratoare si zburatoare.',
    image: service2Image,
    included: [
      'Tratamente pentru insecte taratoare si zburatoare',
      'Solutii adaptate tipului de spatiu',
      'Echipamente profesionale de pulverizare',
      'Plan de prevenire a reinfestarii'
    ],
    fullDescription:
      'Executam lucrari de dezinsectie pentru combaterea gandacilor, tantarilor, furnicilor, plosnitelor si altor insecte daunatoare. Interventiile se realizeaza cu echipamente profesionale si solutii adaptate tipului de spatiu, asigurand protectie de durata si un mediu curat si sigur.'
  },
  {
    id: 'curatare',
    title: 'Servicii de curatare',
    shortDescription: 'Curatenie profesionala pentru locuinte, birouri si spatii comerciale.',
    image: service3Image,
    included: [
      'Curatenie generala si de intretinere',
      'Curatare dupa constructor',
      'Curatare covoare si tapiterii',
      'Program de curatenie personalizat'
    ],
    fullDescription:
      'Oferim o gama completa de servicii de curatare: curatenie generala, de intretinere, dupa constructor, curatare covoare, tapiterii si multe altele. Echipa noastra lucreaza rapid si eficient, folosind produse profesionale si proceduri standardizate pentru rezultate excelente de fiecare data.'
  }
];

const ServicesPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleOpen = (service) => {
    // Toggle: clicking the same card again will collapse it
    setExpandedId((current) => (current === service.id ? null : service.id));
  };

  const handleClose = () => {
    setExpandedId(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
              Serviciile Noastre
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">
              Alege una dintre categoriile de servicii pentru a afla mai multe detalii despre solutiile noastre profesionale.
            </p>

            <div className="max-w-3xl mx-auto flex flex-col gap-6">
              {serviceCategories.map((service) => {
                const isExpanded = expandedId === service.id;
                const isDimmed = expandedId && expandedId !== service.id;

                return (
                  <motion.div
                    key={service.id}
                    onClick={() => handleOpen(service)}
                    className={`relative w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all cursor-pointer ${
                      isDimmed ? 'opacity-30 pointer-events-none' : 'hover:border-blue-500 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="w-full md:w-1/3 h-32 md:h-32 lg:h-36 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Text */}
                      <div className="w-full md:w-2/3 px-6 py-4 md:py-5 flex flex-col justify-center">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                          {service.title}
                        </h2>
                        <p className="text-gray-600">
                          {service.shortDescription}
                        </p>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              key="expanded-content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeOut' }}
                              className="mt-4 text-sm md:text-base text-gray-700 overflow-hidden"
                            >
                              <p className="mb-4 leading-relaxed">
                                {service.fullDescription}
                              </p>
                              {service.included && (
                                <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
                                  {service.included.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                  ))}
                                </ul>
                              )}
                              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-2">
                                <Link
                                  to="/pricing"
                                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                                  onClick={handleClose}
                                >
                                  Preturi persoane juridice
                                </Link>
                                <Link
                                  to="/pricing-individuals"
                                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 transition-colors"
                                  onClick={handleClose}
                                >
                                  Preturi persoane fizice
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Close button when expanded */}
                    {isExpanded && (
                      <button
                        type="button"
                        className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-lg leading-none"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClose();
                        }}
                        aria-label="Inchide detaliile serviciului"
                      >
                        ×
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
