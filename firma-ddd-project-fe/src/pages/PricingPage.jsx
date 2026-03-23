import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PricingPage = () => {
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
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
          </div>

          {/* Tarife Servicii DDD - mutate de pe pagina de Servicii */}
          <div className="mt-16 max-w-5xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Tarife Servicii DDD
            </h2>
            <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Tarifele sunt valabile doar pentru persoane juridice in baza unui contract cu interventii trimestriale.
            </p>

            {/* Oferta suprafete &lt; 100 mp */}
            <div className="mb-10 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-800">
                  Oferta pentru suprafetele mai mici de 100 mp
                </h3>
              </div>
              <div className="px-6 py-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base text-left text-gray-800">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="px-4 py-2 border-b">Nr. crt.</th>
                        <th className="px-4 py-2 border-b">Actiunile prestate in urma unei interventii</th>
                        <th className="px-4 py-2 border-b">Numarul de interventii intr-un an</th>
                        <th className="px-4 py-2 border-b">Valoare unei interventii</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b align-top">1</td>
                        <td className="px-4 py-2 border-b align-top">
                          DEZINFECTIE<br />
                          <span className="text-gray-600">dezinfectant spumant</span>
                        </td>
                        <td className="px-4 py-2 border-b align-top">4</td>
                        <td className="px-4 py-2 border-b align-top">
                          Suprafete &lt; 100 mp<br />
                          <span className="font-semibold">150 RON</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b align-top">2</td>
                        <td className="px-4 py-2 border-b align-top">
                          DEZINSECTIE<br />
                          <span className="text-gray-600">solutie de soc, solutie de remanenta</span>
                        </td>
                        <td className="px-4 py-2 border-b align-top">4</td>
                        <td className="px-4 py-2 border-b align-top">Inclus in pachet</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 align-top">3</td>
                        <td className="px-4 py-2 align-top">
                          DERATIZARE<br />
                          <span className="text-gray-600">capcane adezive, statii de intoxicare</span>
                        </td>
                        <td className="px-4 py-2 align-top">4</td>
                        <td className="px-4 py-2 align-top">Inclus in pachet</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm text-gray-700">
                  Preturile sunt exprimate in RON si nu contin TVA. Pentru interventiile aflate in localitatile limitrofe se percepe o taxa suplimentara de 50 RON.
                </p>
              </div>
            </div>

            {/* Repeated blocks for other suprafete intervals */}

            <div className="space-y-10">
              {[
                { range: '101 mp – 200 mp', price: '200 RON' },
                { range: '201 mp – 300 mp', price: '250 RON' },
                { range: '301 mp – 400 mp', price: '300 RON' },
                { range: '401 mp – 500 mp', price: '350 RON' },
                { range: '501 mp – 600 mp', price: '400 RON' },
                { range: '601 mp – 700 mp', price: '450 RON' },
                { range: '701 mp – 800 mp', price: '500 RON' },
                { range: '801 mp – 1.000 mp', price: '550 RON' }
              ].map((item) => (
                <div
                  key={item.range}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
                >
                  <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Oferta pentru suprafetele cuprinse intre {item.range}
                    </h3>
                  </div>
                  <div className="px-6 py-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm md:text-base text-left text-gray-800">
                        <thead>
                          <tr className="bg-blue-50">
                            <th className="px-4 py-2 border-b">Nr. crt.</th>
                            <th className="px-4 py-2 border-b">Actiunile prestate in urma unei interventii</th>
                            <th className="px-4 py-2 border-b">Numarul de interventii intr-un an</th>
                            <th className="px-4 py-2 border-b">Valoare unei interventii</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2 border-b align-top">1</td>
                            <td className="px-4 py-2 border-b align-top">
                              DEZINFECTIE<br />
                              <span className="text-gray-600">dezinfectant spumant</span>
                            </td>
                            <td className="px-4 py-2 border-b align-top">4</td>
                            <td className="px-4 py-2 border-b align-top">
                              Suprafete intre {item.range} ={' '}
                              <span className="font-semibold">{item.price}</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border-b align-top">2</td>
                            <td className="px-4 py-2 border-b align-top">
                              DEZINSECTIE<br />
                              <span className="text-gray-600">solutie de soc, solutie de remanenta</span>
                            </td>
                            <td className="px-4 py-2 border-b align-top">4</td>
                            <td className="px-4 py-2 border-b align-top">Inclus in pachet</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 align-top">3</td>
                            <td className="px-4 py-2 align-top">
                              DERATIZARE<br />
                              <span className="text-gray-600">capcane adezive, statii de intoxicare</span>
                            </td>
                            <td className="px-4 py-2 align-top">4</td>
                            <td className="px-4 py-2 align-top">Inclus in pachet</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-3 text-sm text-gray-700">
                      Preturile sunt exprimate in RON si nu contin TVA. Pentru interventiile aflate in localitatile limitrofe se percepe o taxa suplimentara de 50 RON.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Oferta 1.001 mp – 2.000 mp */}
            <div className="mt-10 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-800">
                  Oferta pentru suprafetele cuprinse intre 1.001 mp si 2.000 mp
                </h3>
              </div>
              <div className="px-6 py-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base text-left text-gray-800 mb-4">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 border-b">Nr. crt.</th>
                        <th className="px-4 py-2 border-b">Actiunile prestate in urma unei interventii</th>
                        <th className="px-4 py-2 border-b">Tariful fiecarei actiuni</th>
                        <th className="px-4 py-2 border-b">Numarul de interventii intr-un an</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b align-top">1</td>
                        <td className="px-4 py-2 border-b align-top">
                          DEZINFECTIE<br />
                          <span className="text-gray-600">dezinfectant spumant</span>
                        </td>
                        <td className="px-4 py-2 border-b align-top">DEZINFECTIE 0.15 RON / mp</td>
                        <td className="px-4 py-2 border-b align-top">4</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b align-top">2</td>
                        <td className="px-4 py-2 border-b align-top">
                          DEZINSECTIE<br />
                          <span className="text-gray-600">solutie de soc, solutie de remanenta</span>
                        </td>
                        <td className="px-4 py-2 border-b align-top">DEZINSECTIE 0.15 RON / mp</td>
                        <td className="px-4 py-2 border-b align-top">4</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 align-top">3</td>
                        <td className="px-4 py-2 align-top">
                          DERATIZARE<br />
                          <span className="text-gray-600">capcane adezive, statii de intoxicare</span>
                        </td>
                        <td className="px-4 py-2 align-top">DERATIZARE 0.15 RON / mp</td>
                        <td className="px-4 py-2 align-top">4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-800 mb-2">
                  Valoare totala a unei interventii ce cuprinde toate tipurile de actiuni (deratizare, dezinsectie si dezinfectie):
                </p>
                <p className="text-sm text-gray-900">
                  Suprafete intre 1.001 mp – 2.000 mp = <span className="font-semibold">0.45 RON/mp</span>
                </p>
                <p className="mt-3 text-sm text-gray-600">
                  Preturile sunt exprimate in RON si nu contin TVA. Pentru interventiile aflate in localitatile limitrofe se percepe o taxa suplimentara de 50 RON.
                </p>
              </div>
            </div>

            {/* Oferta 2.001 mp – 5.000 mp */}
            <div className="mt-10 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-800">
                  Oferta pentru suprafetele cuprinse intre 2.001 mp si 5.000 mp
                </h3>
              </div>
              <div className="px-6 py-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base text-left text-gray-700 mb-4">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 border-b">Nr. crt.</th>
                        <th className="px-4 py-2 border-b">Actiunile prestate in urma unei interventii</th>
                        <th className="px-4 py-2 border-b">Tariful fiecarei actiuni</th>
                        <th className="px-4 py-2 border-b">Numarul de interventii intr-un an</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b align-top">1</td>
                        <td className="px-4 py-2 border-b align-top">
                          DEZINFECTIE<br />
                          <span className="text-gray-600">dezinfectant spumant</span>
                        </td>
                        <td className="px-4 py-2 border-b align-top">DEZINFECTIE 0.13 RON / mp</td>
                        <td className="px-4 py-2 border-b align-top">4</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b align-top">2</td>
                        <td className="px-4 py-2 border-b align-top">
                          DEZINSECTIE<br />
                          <span className="text-gray-600">solutie de soc, solutie de remanenta</span>
                        </td>
                        <td className="px-4 py-2 border-b align-top">DEZINSECTIE 0.13 RON / mp</td>
                        <td className="px-4 py-2 border-b align-top">4</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 align-top">3</td>
                        <td className="px-4 py-2 align-top">
                          DERATIZARE<br />
                          <span className="text-gray-600">capcane adezive, statii de intoxicare</span>
                        </td>
                        <td className="px-4 py-2 align-top">DERATIZARE 0.13 RON / mp</td>
                        <td className="px-4 py-2 align-top">4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-700 mb-2">
                  Valoare totala a unei interventii ce cuprinde toate tipurile de actiuni (deratizare, dezinsectie si dezinfectie):
                </p>
                <p className="text-sm text-gray-700">
                  Suprafete intre 2.001 mp – 5.000 mp = <span className="font-semibold">0.39 RON/mp</span>
                </p>
                <p className="mt-3 text-sm text-gray-600">
                  Preturile sunt exprimate in RON si nu contin TVA. Pentru interventiile aflate in localitatile limitrofe se percepe o taxa suplimentara de 50 RON.
                </p>
              </div>
            </div>

            {/* Oferta 5.001 mp – 10.000 mp */}
            <div className="mt-10 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-800">
                  Oferta pentru suprafetele cuprinse intre 5.001 mp si 10.000 mp
                </h3>
              </div>
              <div className="px-6 py-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base text-left text-gray-700 mb-4">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 border-b">Nr. crt.</th>
                        <th className="px-4 py-2 border-b">Actiunile prestate in urma unei interventii</th>
                        <th className="px-4 py-2 border-b">Tariful fiecarei actiuni</th>
                        <th className="px-4 py-2 border-b">Numarul de interventii intr-un an</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b align-top">1</td>
                        <td className="px-4 py-2 border-b align-top">
                          DEZINFECTIE<br />
                          <span className="text-gray-600">dezinfectant spumant</span>
                        </td>
                        <td className="px-4 py-2 border-b align-top">DEZINFECTIE 0.11 RON / mp</td>
                        <td className="px-4 py-2 border-b align-top">4</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b align-top">2</td>
                        <td className="px-4 py-2 border-b align-top">
                          DEZINSECTIE<br />
                          <span className="text-gray-600">solutie de soc, solutie de remanenta</span>
                        </td>
                        <td className="px-4 py-2 border-b align-top">DEZINSECTIE 0.11 RON / mp</td>
                        <td className="px-4 py-2 border-b align-top">4</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 align-top">3</td>
                        <td className="px-4 py-2 align-top">
                          DERATIZARE<br />
                          <span className="text-gray-600">capcane adezive, statii de intoxicare</span>
                        </td>
                        <td className="px-4 py-2 align-top">DERATIZARE 0.11 RON / mp</td>
                        <td className="px-4 py-2 align-top">4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-700 mb-2">
                  Valoare totala a unei interventii ce cuprinde toate tipurile de actiuni (deratizare, dezinsectie si dezinfectie):
                </p>
                <p className="text-sm text-gray-700">
                  Suprafete intre 5.001 mp – 10.000 mp = <span className="font-semibold">0.33 RON/mp</span>
                </p>
                <p className="mt-3 text-sm text-gray-600">
                  Preturile sunt exprimate in RON si nu contin TVA. Pentru interventiile aflate in localitatile limitrofe se percepe o taxa suplimentara de 50 RON.
                </p>
              </div>
            </div>

            {/* Informatii suplimentare */}
            <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-sm md:text-base text-gray-700 leading-relaxed">
              <p className="mb-2">
                Preturile cuprind toate cele trei operatiuni (dezinfactie, dezinsectie si deratizare) si sunt adaptate unui program trimestrial.
              </p>
              <p className="mb-2">
                Societatile care au mai multe puncte de lucru vor beneficia de <span className="font-semibold">10% reducere</span>.
              </p>
              <p className="mb-2">
                Preturile au un caracter informativ, cel final stabilindu-se in functie de suprafata, grad de infestare, numarul de obiective etc.
              </p>
              <p className="mb-2">
                Pentru o oferta cat mai exacta va rugam sa trimiteti o cerere de oferta pe adresa noastra <span className="font-semibold">...</span> ; <span className="font-semibold">...</span>.
              </p>
              <p className="mb-2">
                ... ofera consultanta gratuita in domeniul DDD la numarul de telefon <span className="font-semibold">...</span> sau pe adresa noastra de e-mail: <span className="font-semibold">...</span> ; <span className="font-semibold">...</span>.
              </p>
              <p>
                ... asigura confidentialitatea eventualelor probleme sesizate in unitatea dumneavoastra, atat pe perioada contractuala, cat si dupa incheierea acesteia.
              </p>
            </div>
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

export default PricingPage;
