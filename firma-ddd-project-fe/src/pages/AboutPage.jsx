import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
           Despre Noi
          </h1>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-blue-600 rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Povestea Noastra
              </h2>
              <p className="text-white mb-6 leading-relaxed">
                Firma DDD este o companie privată cu capital integral românesc, specializată în servicii profesionale D.D.D. (Dezinfecție, Dezinsecție și Deratizare).
                Controlul dăunătorilor este un concept absolut necesar. Acest tip de control poate avea mai multe forme și se poate ocupa în același timp de mai multe categorii de insecte, dar și de rozătoare.
                Există metode specifice pentru fiecare problemă în parte, o investigație completă fiind necesară înaintea aplicării oricărei forme de tratament. 
                Din acest considerent, sunt recomandate serviciile profesionale, în niciun caz utilizarea unor produse chimice disponibile pe piață.
              </p>
              <p className="text-white mb-8 leading-relaxed">
                Dacă veți descoperi că aveți o problemă în ceea ce privește controlul dăunătorilor, este important să obțineți un ajutor specializat pentru a remedia situația. 
                Societatea noastră este dispusă să asigure consultanță gratuită beneficiarilor, pentru a-i ajuta să depășească problemele de acest gen.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Misiunea Noastra...
              </h2>
              <p className="text-white mb-8 leading-relaxed">
              Misiunea noastra este de a oferi servicii de curatenie profesionale, de inalta calitate si de incredere, care sa depaseasca asteptarile clientilor nostri. 
              Utilizam produse ecologice si tehnici moderne pentru a asigura un mediu sigur si sanatos pentru familia sau afacerea dumneavoastra
              </p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                De ce noi?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Professional & Asigurat</h3>
                    <p className="text-blue-100">Toti curatorii nostri sunt antrenati, verificati si asigurati.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Produse Eco-Friendly</h3>
                    <p className="text-blue-100">Utilizam produse ecologice si tehnici moderne pentru a asigura un mediu sigur si sanatos.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Garantia satisfactiei 100%</h3>
                    <p className="text-blue-100">Nu suntem fericiti pana nu sunteți completați mulțumiți de serviciul nostru.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-blue-400 text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Program Flexibil</h3>
                    <p className="text-blue-100">Lucram in conformitate cu programul dumneavoastra cu optiuni de rezervare convenabile.</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Echipa Noastra
              </h2>
              <p className="text-white mb-8 leading-relaxed">
                Echipa noastra este formata din curatori profesionisti care sunt pasionati de ceea ce fac. 
                Fiecare membru este selectat, antrenat si echipat cu cele mai noi unelte de curatenie si tehnici pentru a livra rezultate deosebite de fiecare data.
              </p>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Vrei sa primesti o oferta personalizata?
                </h3>
                <p className="text-blue-100 mb-6">
                  Fa parte din clientii nostrii multumiti!
                </p>
                <Link to="/contact">
                  <button className="bg-white text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                    Contacteaza-ne
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
