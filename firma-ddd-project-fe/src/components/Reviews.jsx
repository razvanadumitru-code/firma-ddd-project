import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = () => {
  const reviews = [
    {
      name: "Ralph Edwards",
      location: "London",
      rating: 5,
      text: "Exceptional service! The team was professional, thorough, and left my home sparkling clean.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Ashley Watson",
      location: "Manchester",
      rating: 5,
      text: "Super Cleaners has been cleaning my office for over a year. Reliable, affordable, always amazing.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Kimberly Harris",
      location: "Birmingham",
      rating: 5,
      text: "Impressed by their attention to detail. My house has never looked better! Highly recommend.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "James Wilson",
      location: "Leeds",
      rating: 5,
      text: "Booked a deep clean and was blown away by the results. Will definitely use again.",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      name: "Sarah Johnson",
      location: "Bristol",
      rating: 5,
      text: "Professional, punctual and thorough. The best cleaning service I have ever used.",
      avatar: "https://randomuser.me/api/portraits/women/90.jpg"
    },
    {
      name: "David Brown",
      location: "Edinburgh",
      rating: 5,
      text: "Amazing team, amazing results. My carpets look brand new. Highly recommended service.",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Overall Score Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ce spun clientii nostri!
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Nu ne crede pe noi. Iata ce spun clientii nostri despre serviciile noastre de curatenie.
          </p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl md:text-6xl font-bold text-gray-800">4.9</span>
            <span className="text-3xl text-gray-600">/</span>
            <span className="text-3xl text-gray-600">5</span>
            <div className="flex">
              {renderStars(5)}
            </div>
          </div>
          <p className="text-lg text-gray-600 font-medium">Bazat pe review-uri doar de la clienti reali!</p>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="reviews-swiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-md p-6 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Large Quote Mark */}
                  <div className="text-6xl text-blue-100 font-serif mb-4">"</div>
                  
                  {/* Avatar and Info */}
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 italic leading-relaxed">
                    {review.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
