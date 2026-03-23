import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PricingIndividualsPage = () => {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [hasDismissedHelp, setHasDismissedHelp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasDismissedHelp || showHelpModal) return;
      if (window.scrollY > 400) {
        setShowHelpModal(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasDismissedHelp, showHelpModal]);

  const closeHelpModal = () => {
    setShowHelpModal(false);
    setHasDismissedHelp(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 space-y-10">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Tarife persoane fizice
              </h1>
              <p className="text-gray-600">
                Preturi pentru garsoniere, apartamente si case/vile
              </p>
            </div>

            {/* Apartamente si garsoniere */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Preturi apartamente si garsoniere
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Tip locuinta
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                        Pret
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">Garsoniera</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">200 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">Apartament 2 camere</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">230 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">Apartament 3 camere</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">290 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">Apartament 4/5 camere</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">350 lei</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Scari bloc - nr etaje < 5 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Preturi scari de bloc (nr. etaje &lt; 5)
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Numar scari
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                        Pret
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">1 scara</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">250 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">2 scari</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">430 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">3 scari</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">590 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">4 scari</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">730 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">5 scari</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">200 lei / scara</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                La preturile de mai sus se adauga o taxa de deplasare de <span className="font-semibold">50 lei</span>.
              </p>
            </section>

            {/* Case / vile - camere si subsol */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Preturi case / vile (camere si subsol)
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Zona
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Pret
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">Camera</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">150 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">Subsol</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">250 lei</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Case / vile - in functie de suprafata */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Preturi case / vile in functie de suprafata
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Suprafata (mp)
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                        Pret
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">100 - 200 mp</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">230 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">201 - 300 mp</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">300 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">301 - 400 mp</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">350 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">401 - 500 mp</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">400 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">501 - 600 mp</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">450 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">601 - 700 mp</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">500 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">701 - 800 mp</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">550 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">801 - 1000 mp</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">600 lei</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">1001 - 2000 mp</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">0,50 lei / mp</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">2001 - 5000 mp</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">0,45 lei / mp</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-800">5001 - 10000 mp</td>
                      <td className="px-4 py-3 text-sm text-gray-800 font-semibold text-right">0,40 lei / mp</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Alte tratamente */}
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                Tratamente suplimentare
              </h2>
              <p className="text-sm text-gray-700">
                Preturi tratamente impotriva gandacilor
              </p>
              <p className="text-sm text-gray-700">
                Preturi tratamente impotriva plosnitelor
              </p>
              <p className="text-sm text-gray-700">
                Preturi tratamente impotriva puricilor
              </p>
            </section>

            {/* Note finale */}
            <section className="border-t border-gray-200 pt-4 space-y-2 text-sm text-gray-700">
              <p>
                Preturile sunt exprimate in <span className="font-semibold">RON</span> si nu contin TVA.
              </p>
              <p>
                Pentru interventiile aflate in localitatile limitrofe se percepe o taxa suplimentara de
                <span className="font-semibold"> 50 RON</span>.
              </p>
              <p>
                Datorita inflatiei si cresterii preturilor produselor, preturile serviciilor prestate de
                compania noastra au fost majorate cu <span className="font-semibold">15%</span>. Va multumim pentru intelegere!
              </p>
            </section>
          </div>
        </div>
      </main>
      {showHelpModal && (
        <div className="fixed bottom-4 right-4 z-40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-80 sm:w-96 p-5 relative border border-gray-200">
            <button
              type="button"
              className="absolute top-2.5 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 text-base leading-none"
              onClick={closeHelpModal}
              aria-label="Inchide ajutor preturi"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              Ai nevoie de ajutor cu preturile?
            </h3>
            <p className="text-gray-600 text-sm mb-5 text-center">
              Daca ai nelamuriri despre oferta sau doresti o oferta personalizata, ne poti contacta rapid.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center w-full">
              <button
                type="button"
                className="w-full sm:w-auto min-w-[130px] px-6 py-2 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 text-center"
                onClick={closeHelpModal}
              >
                Nu acum
              </button>
              <Link to="/contact" onClick={closeHelpModal}>
                <button
                  type="button"
                  className="w-full sm:w-auto min-w-[130px] px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 text-center"
                >
                  Contacteaza-ne
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PricingIndividualsPage;
