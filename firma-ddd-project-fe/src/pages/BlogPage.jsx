import React from 'react';
import { motion } from 'framer-motion';
import { Construction, Wrench } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage = () => {
  // Choose which icon to display; you can switch to Wrench if you prefer
  const Icon = Construction;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-gray-50 px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-50 mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: [0.9, 1.05, 1], opacity: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
          >
            <Icon className="w-16 h-16 text-blue-600" />
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Pagină în construcție
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto">
            Revenim în curând cu cele mai inovative idei și sfaturi pentru tine.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
