import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Working with this team was an amazing experience. They delivered beyond expectations.",
  },
  {
    id: 2,
    name: "John De Marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Professional, efficient, and creative. Our website looks stunning now!",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "Excellent attention to detail. We were impressed by the smooth delivery and UX.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "We loved their clear communication and dedication throughout the project.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Timely delivery and beautiful code. Highly recommended for frontend work.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "Super helpful and talented team. The redesign tripled our engagement!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-br from-[#f0f4ff] to-white">
      <motion.div
        variants={fadeIn('up', 0.2)}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <motion.h2
          variants={textVariant(0.3)}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          className="text-lg text-gray-500"
        >
          Trusted by professionals and startups alike. Here’s what they say about working with us.
        </motion.p>
      </motion.div>

      <motion.div variants={fadeIn('up', 0.4)} className="relative max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 object-cover rounded-full border-4 border-blue-100 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <div className="text-yellow-400 text-base mt-1">★★★★★</div>
                </div>
                <p className="text-gray-600 mt-4 text-sm">{testimonial.text}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-10 gap-6">
          <motion.button
            variants={fadeIn('right', 0.6)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
            aria-label="Previous"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            variants={fadeIn('left', 0.6)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
            aria-label="Next"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
