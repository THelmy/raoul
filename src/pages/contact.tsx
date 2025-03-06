import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

function Contact() {
  return (
    <div className="pt-[80px]">
      <section className="py-16 sm:py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-zinc-400 text-lg">Get in touch with us through any of these channels</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/31620681996"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-black p-6 rounded-2xl border border-zinc-800 text-center hover:border-green-500 transition-colors"
            >
              <Phone className="w-12 h-12 mb-4 mx-auto text-green-500" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-zinc-400">+31 6 20681996</p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:fitprotocol.info@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="bg-black p-6 rounded-2xl border border-zinc-800 text-center hover:border-blue-500 transition-colors"
            >
              <Mail className="w-12 h-12 mb-4 mx-auto text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-zinc-400">fitprotocol.info@gmail.com</p>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-black p-6 rounded-2xl border border-zinc-800 text-center hover:border-purple-500 transition-colors"
            >
              <Instagram className="w-12 h-12 mb-4 mx-auto text-purple-500" />
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-zinc-400">Follow us on Instagram</p>
            </motion.a>

            {/* Address */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black p-6 rounded-2xl border border-zinc-800 text-center"
            >
              <MapPin className="w-12 h-12 mb-4 mx-auto text-red-500" />
              <h3 className="text-xl font-bold mb-2">My Operational Area</h3>
              <p className="text-zinc-400">Noord Brabant, Netherlands</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;