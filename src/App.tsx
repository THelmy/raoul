import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, ArrowRight, Dumbbell, Calculator, Users, Star, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen min-w-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/80 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[80px] flex items-center justify-between">
          <a href="/" className="font-bold text-2xl">RAOUL</a>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-zinc-300 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#training" className="text-zinc-400 hover:text-white transition-colors">Training</a>
            <a href="#results" className="text-zinc-400 hover:text-white transition-colors">Results</a>
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 border-b border-zinc-800"
          >
            <div className="px-4 py-4 space-y-4">
              <a 
                href="#training" 
                className="block text-zinc-400 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Training
              </a>
              <a 
                href="#results" 
                className="block text-zinc-400 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Results
              </a>
              <a 
                href="#about" 
                className="block text-zinc-400 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="block text-zinc-400 hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt="Hero background"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">Transform Your Body.<br />Transform Your Life.</h1>
              <p className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-2xl">
                Elite personal training and nutrition coaching for those who demand results. 
                Join hundreds of successful transformations and unlock your full potential.
              </p>
              <a href="#start" className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors">
                Start Your Journey <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black p-6 sm:p-8 rounded-2xl border border-zinc-800"
              >
                <Dumbbell size={40} className="mb-6 text-white" />
                <h3 className="text-xl font-bold mb-4">Custom Training</h3>
                <p className="text-zinc-400 mb-6">Personalized workout plans tailored to your goals, schedule, and fitness level.</p>
                <a href="#training" className="text-white flex items-center gap-2 hover:gap-4 transition-all">
                  Learn More <ArrowRight size={16} />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black p-6 sm:p-8 rounded-2xl border border-zinc-800"
              >
                <Calculator size={40} className="mb-6 text-white" />
                <h3 className="text-xl font-bold mb-4">Calculate Nutrition</h3>
                <p className="text-zinc-400 mb-6">Get your personalized macro breakdown and meal plans for optimal results.</p>
                <a href="#nutrition" className="text-white flex items-center gap-2 hover:gap-4 transition-all">
                  Calculate Now <ArrowRight size={16} />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black p-6 sm:p-8 rounded-2xl border border-zinc-800"
              >
                <Users size={40} className="mb-6 text-white" />
                <h3 className="text-xl font-bold mb-4">Online Training</h3>
                <p className="text-zinc-400 mb-6">Expert guidance and support, anywhere in the world. Start your transformation today.</p>
                <a href="#online" className="text-white flex items-center gap-2 hover:gap-4 transition-all">
                  Get Started <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="py-16 sm:py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center">Real Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1583500557349-fb5238f8d946?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Transformation 1"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Transformation 2"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:col-span-2 md:col-span-1"
              >
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Transformation 3"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-24 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Raoul"
                  className="rounded-2xl"
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
                <p className="text-zinc-300 mb-6">
                  With over a decade of experience in body transformation and elite fitness coaching, 
                  I've helped hundreds of clients achieve their dream physiques and unlock their full potential.
                </p>
                <p className="text-zinc-300 mb-8">
                  My approach combines cutting-edge training techniques with personalized nutrition strategies, 
                  ensuring sustainable results that last a lifetime.
                </p>
                <div className="grid grid-cols-3 gap-6 sm:gap-8 text-center">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold mb-2">500+</div>
                    <div className="text-zinc-400">Transformations</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold mb-2">10+</div>
                    <div className="text-zinc-400">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold mb-2">100%</div>
                    <div className="text-zinc-400">Commitment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center">What My Clients Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  name: "James Wilson",
                  text: "Working with Raoul transformed not just my body, but my entire approach to fitness and nutrition.",
                  rating: 5
                },
                {
                  name: "Sarah Parker",
                  text: "The results I achieved in 12 weeks exceeded my expectations. Raoul's knowledge and support are unmatched.",
                  rating: 5
                },
                {
                  name: "Mike Thompson",
                  text: "Best investment I've made in myself. The customized approach and constant support made all the difference.",
                  rating: 5
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-zinc-900 p-6 sm:p-8 rounded-2xl"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-zinc-300 mb-4">{testimonial.text}</p>
                  <p className="font-medium">{testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 sm:py-32 bg-zinc-900">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt="Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Become Your Strongest Version</h2>
            <p className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Ready to start your transformation? Take the first step towards the body you've always wanted.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors"
            >
              Start Your Training <ArrowRight size={20} />
            </motion.a>
          </div>
        </section>
      </main>

      <footer className="bg-black py-8 sm:py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl">RAOUL</div>
            <div className="flex gap-6">
              <a href="https://instagram.com" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:contact@raoul.fitness" className="text-zinc-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;