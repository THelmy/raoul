import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Mail, ArrowRight, Dumbbell, Calculator, Users, Star, Menu, X, Ban, MessageCircle, Activity, CheckCircle2 } from 'lucide-react';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavigationLinks = () => {
    const navigate = useNavigate();

    const handleNavClick = (sectionId: string) => {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };

    return (
      <>
        <button 
          onClick={() => handleNavClick('about')} 
          className="block w-full text-center text-zinc-400 hover:text-white transition-colors"
        >
          About
        </button>
        <button 
          onClick={() => handleNavClick('training')} 
          className="block w-full text-center text-zinc-400 hover:text-white transition-colors"
        >
          Training
        </button>
        <button 
          onClick={() => handleNavClick('pricing')} 
          className="block w-full text-center text-zinc-400 hover:text-white transition-colors"
        >
          Pricing
        </button>
        <Link 
          to="/contact" 
          className="block w-full text-center text-zinc-400 hover:text-white transition-colors"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </>
    );
  };

  const createEmailLink = (type: string) => {
    const email = 'fitprotocol.info@gmail.com';
    let subject = '';
    let body = '';

    switch (type) {
      case 'journey':
        subject = 'Ready to Start My Fitness Journey';
        body = 'Hi, I\'m interested in starting my fitness journey with you. I would like to learn more about your training programs.';
        break;
      case 'custom-training':
        subject = 'Inquiry about Custom Training Program';
        body = 'Hi, I\'m interested in getting a custom training program. I would like to learn more about how you can help me achieve my fitness goals.';
        break;
      case 'nutrition':
        subject = 'Request for Nutrition Calculation';
        body = `Hi, I would like to request a nutrition calculation. Here are my details:

Gender: 
Weight: 
Height: 
Age: 
Activity Level (Sedentary/Light/Moderate/Very Active): 

Current fitness goals:`;
        break;
      case 'online-training':
        subject = 'Interest in Online Training';
        body = 'Hi, I\'m interested in your online training program. I would like to learn more about how it works and how you can help me achieve my fitness goals.';
        break;
      case 'starter':
        subject = 'Interest in Starter Plan';
        body = 'Hi, I\'m interested in your Starter Plan (£99/month). I would like to get started with the program.';
        break;
      case 'transform':
        subject = 'Interest in Transform Plan';
        body = 'Hi, I\'m interested in your Transform Plan (£199/month). I would like to get started with the program.';
        break;
      case 'elite':
        subject = 'Interest in Elite Plan';
        body = 'Hi, I\'m interested in your Elite Plan (£299/month). I would like to get started with the program.';
        break;
      default:
        subject = 'General Inquiry';
        body = 'Hi, I\'m interested in learning more about your services.';
    }

    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Router>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <Activity size={24} className="text-green-500" />
              <span className="text-xl font-bold">Fit Protocol</span>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex gap-8">
              <NavigationLinks />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-800">
            <div className="py-4 space-y-4">
              <NavigationLinks />
            </div>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={
          <main>
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80"
                  alt="Hero background"
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-3xl sm:text-4xl font-bold mb-5">Transform Your Body.<br />Transform Your Life.</h1>
                  <p className="text-lg sm:text-xl text-zinc-300 mb-7 max-w-2xl">
                    Elite personal training and nutrition coaching for those who demand results! 
                  </p>
                  <a 
                    href={createEmailLink('journey')} 
                    className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors"
                  >
                    Start Your Journey <ArrowRight size={25} />
                  </a>
                </motion.div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 sm:py-24 bg-zinc-900">
              <div className="max-w-5xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-10 items-center">
                  <div>
                    <img 
                      src="/Raoul.png"
                      alt="Raoul - Fit Protocol Trainer"
                      className="rounded-2xl"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-zinc-300 mb-6">
                      With over a decade of experience in body transformation and elite fitness coaching, 
                      we've helped hundreds of clients achieve their dream physiques and unlock their full potential.
                    </p>
                    <p className="text-zinc-300 mb-8">
                      Our approach combines cutting-edge training techniques with personalized nutrition strategies, 
                      ensuring sustainable results that last a lifetime.
                    </p>
                    <div className="grid grid-cols-3 gap-6 sm:gap-8 text-center">
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold mb-2">20+</div>
                        <div className="text-zinc-400">Transformations</div>
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold mb-2">5+</div>
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

            {/* Services Grid */}
            <section id="training" className="py-16 sm:py-24 bg-zinc-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black p-6 sm:p-8 rounded-2xl border border-zinc-800"
                  >
                    <Dumbbell size={40} className="mb-6 text-white" />
                    <h3 className="text-xl font-bold mb-4">Custom Training</h3>
                    <p className="text-zinc-400 mb-6">Personalized workout plans tailored to your goals, schedule, and fitness level.</p>
                    <a 
                      href={createEmailLink('custom-training')} 
                      className="text-white flex items-center gap-2 hover:gap-4 transition-all"
                    >
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
                    <a 
                      href={createEmailLink('nutrition')} 
                      className="text-white flex items-center gap-2 hover:gap-4 transition-all"
                    >
                      Request Calculation <ArrowRight size={16} />
                    </a>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black p-6 sm:p-8 rounded-2xl border border-zinc-800"
                  >
                    <Users size={40} className="mb-6 text-white" />
                    <h3 className="text-xl font-bold mb-4">Online Training</h3>
                    <p className="text-zinc-400 mb-6">Expert guidance and support, anywhere in the world. Start your transformation today.</p>
                    <a 
                      href={createEmailLink('online-training')} 
                      className="text-white flex items-center gap-2 hover:gap-4 transition-all"
                    >
                      Get Started <ArrowRight size={16} />
                    </a>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-16 sm:py-24 bg-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center">Training Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Starter",
                      price: "£99",
                      period: "per month",
                      description: "Perfect for beginners ready to start their fitness journey",
                      features: [
                        "Personalized workout program",
                        "Basic nutrition guidelines",
                        "Weekly check-ins",
                        "Email support"
                      ],
                      exclusions: [
                        "Check-ins or progress tracking",
                        "Priority Whatsapp support"
                      ],
                      footer: "Best for independent gym-goers who want an affordable, structured plan",
                      type: 'starter'
                    },
                    {
                      name: "MID-TIER PLAN ",
                      price: "€99",
                      period: "per month",
                      description: "For those who want a personalized plan with minimal check-ins",
                      features: [
                        "Custom training & nutrition plan tailored to your goals and lifestyle",
                        "Adjustments every 4 weeks based on self-reported progress",
                        "Monthly email check-in to review progress & tweak the plan",
                        "Google Sheets or app-based progress tracking",
                        "Limited Q&A via email (1x per month)"
                      ],
                      exclusions: [
                        "Daily Check-in",
                        "In-person training"
                      ],
                      footer: "Best for those who want structured coaching with some accountability",
                      featured: true,
                      type: 'transform'
                    },
                    {
                      name: "PREMIUM PLAN",
                      price: "€179",
                      period: "per month",
                      description: "For those who need full guidance, accountability & expert feedback",
                      features: [
                        "Fully customized training & nutrition plan",
                        "Adjustments every 2 weeks to optimize results",
                        "Bi-weekly video check-ins (15-30 min per session)",
                        "Form checks & feedback – send exercise videos & get corrections",
                        "Priority WhatsApp support for quick questions & motivation (reply within 8h)",
                        "Supplement guidance",
                        "Lifestyle coaching"
                      ],
                      exclusions: [],
                      footer: "Best for those who want serious results, accountability, and expert coaching",
                      type: 'elite'
                    }
                  ].map((plan, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className={`
                        relative p-8 rounded-2xl border
                        ${plan.featured 
                          ? 'bg-white text-black border-transparent' 
                          : 'bg-black border-zinc-800'
                        }
                      `}
                    >
                      {plan.featured && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <div className="text-xl font-bold mb-2">{plan.name}</div>
                      <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className={plan.featured ? 'text-black/60' : 'text-zinc-400'}>
                          {plan.period}
                        </span>
                      </div>
                      <p className={`mb-6 ${plan.featured ? 'text-black/80' : 'text-zinc-400'}`}>
                        {plan.description}
                      </p>
                      <div className="space-y-6">
                        {/* Features */}
                        {plan.features.length > 0 && (
                          <div>
                            <h4 className={`text-sm uppercase mb-3 ${plan.featured ? 'text-black/60' : 'text-zinc-500'}`}>
                              What's Included
                            </h4>
                            <ul className="space-y-3">
                              {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <CheckCircle2 
                                    size={18} 
                                    className={plan.featured ? 'text-green-500' : 'text-green-500/70'} 
                                  />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Exclusions */}
                        {plan.exclusions.length > 0 && (
                          <div>
                            <h4 className={`text-sm uppercase mb-3 ${plan.featured ? 'text-black/60' : 'text-zinc-500'}`}>
                              Not Included
                            </h4>
                            <ul className="space-y-3">
                              {plan.exclusions.map((exclusion, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <Ban 
                                    size={18} 
                                    className={plan.featured ? 'text-red-500' : 'text-red-500/70'} 
                                  />
                                  <span className={plan.featured ? 'text-black/60' : 'text-zinc-500'}>
                                    {exclusion}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="flex items-baseline gap-1 mb-4 mt-4">
                        <span className="text-l">{plan.footer}</span>
                        
                      </div>
                      <a 
                        href={createEmailLink(plan.type)}
                        className={`
                          block w-full py-3 rounded-full font-medium transition-colors text-center mt-8
                          ${plan.featured
                            ? 'bg-black text-white hover:bg-zinc-800'
                            : 'bg-white text-black hover:bg-zinc-200'
                          }
                        `}
                      >
                        Get Started
                      </a>
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                >
                  <a 
                    href={createEmailLink('journey')} 
                    className="inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors"
                  >
                    Start Your Journey <ArrowRight size={25} />
                  </a>
                </motion.div>
              </div>
            </section>
          </main>
        } />
      </Routes>
    </Router>
  );
}

export default App;