import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Numele este obligatoriu.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Numele trebuie sa aiba cel putin 2 caractere.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Emailul este obligatoriu.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Te rugam sa introduci un email valid.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesajul este obligatoriu.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mesajul trebuie sa aiba cel putin 10 caractere.';
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg);
    if (hasErrors) {
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              Cere o oferta!
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Informații de contact
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Adresă</h3>
                      <p className="text-gray-600">123 Cleaning Street, Clean City, CC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Telefon</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@supercleaners.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Program</h3>
                      <p className="text-gray-600">Luni-Vineri: 08:00 - 18:00</p>
                      <p className="text-gray-600">Sambata: 09:00 - 14:00</p>
                      <p className="text-gray-600">Duminica: Inchis</p>
                    </div>
                  </div>
                </div>
                <iframe
                  title="Our Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91379.18018722382!2d26.0195!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff3fcae5b1f9%3A0x9f5b0d0e3b1f3f3f!2sBucharest!5e0!3m2!1sen!2sro!4v1610000000000!5m2!1sen!2sro"
                  className="w-full h-48 rounded-xl mt-6 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Trimite-ne un mesaj
                </h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="bg-white rounded-2xl shadow-md p-8 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-7 h-7 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Mesaj trimis cu succes!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Te vom contacta in maxim 24 de ore.
                    </p>
                    <Button
                      type="button"
                      variant="primary"
                      className="w-full"
                      onClick={() => {
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service: '',
                          message: ''
                        });
                        setErrors({ name: '', email: '', message: '' });
                        setIsSubmitted(false);
                      }}
                    >
                      Trimite alt mesaj
                    </Button>
                    <Link to="/" className="block mt-3">
                      <Button
                        type="button"
                        variant="primary"
                        className="w-full"
                      >
                        Mergi inapoi
                      </Button>
                    </Link>
                  </motion.div>
                ) : (
                  <div className="bg-white rounded-2xl shadow-md p-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Nume *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition${
                            errors.name ? ' border-red-500' : ''
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition${
                            errors.email ? ' border-red-500' : ''
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Tipul serviciului
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        >
                          <option value="" disabled>
                            Selecteaza un serviciu
                          </option>
                          <option value="deratizare">Deratizare</option>
                          <option value="dezinsectie">Dezinsectie</option>
                          <option value="curatare">Servicii de Curatare</option>
                          <option value="altele">Altele</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className={`w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition${
                            errors.message ? ' border-red-500' : ''
                          }`}
                        ></textarea>
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                        )}
                      </div>
                      
                      <Button type="submit" variant="primary" className="w-full">
                        Trimite mesaj
                      </Button>
                    </form>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
