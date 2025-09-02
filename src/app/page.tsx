'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Hide preloader after 3 seconds
    const timer = setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mil-wrapper" id="top">
      {/* Custom Cursor */}
      <motion.div
        className="mil-ball"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Preloader */}
      <AnimatePresence>
        {isPreloaderVisible && (
          <motion.div
            className="mil-preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mil-preloader-animation">
              <motion.div
                className="mil-pos-abs mil-animation-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.p
                  className="mil-h3 mil-muted mil-thin"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Pioneering
                </motion.p>
                <motion.p
                  className="mil-h3 mil-muted"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Creative
                </motion.p>
                <motion.p
                  className="mil-h3 mil-muted mil-thin"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  Excellence
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress */}
      <div className="mil-progress-track">
        <motion.div
          className="mil-progress"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mil-menu-frame active"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
          >
            <div className="mil-frame-top">
              <a href="#" className="mil-logo">C.</a>
              <button
                className="mil-menu-btn active"
                onClick={() => setIsMenuOpen(false)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="container">
              <div className="mil-menu-content">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div>
                    <nav className="mil-main-menu">
                      <ul>
                        <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                        <li><a onClick={() => scrollToSection('about')}>About</a></li>
                        <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                        <li><a onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
                        <li><a onClick={() => scrollToSection('team')}>Team</a></li>
                        <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                  <div>
                    <div className="mil-menu-right">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h6 className="mil-muted mil-mb-30">Projects</h6>
                          <ul className="mil-menu-list">
                            <li><a href="#" className="mil-light-soft">Interior Design Studio</a></li>
                            <li><a href="#" className="mil-light-soft">Home Security Camera</a></li>
                            <li><a href="#" className="mil-light-soft">Kemia Honest Skincare</a></li>
                            <li><a href="#" className="mil-light-soft">Cascade of Lava</a></li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="mil-muted mil-mb-30">Contact</h6>
                          <p className="mil-light-soft">71 South Los Carneros Road, California</p>
                          <p className="mil-light-soft">+51 174 705 812</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Frame */}
      <div className="mil-frame">
        <div className="mil-frame-top">
          <a href="#" className="mil-logo">C.</a>
          <button
            className="mil-menu-btn"
            onClick={() => setIsMenuOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="mil-frame-bottom">
          <div className="mil-current-page"></div>
          <button
            className="mil-back-to-top"
            onClick={scrollToTop}
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mil-content">
        {/* Hero Section */}
        <section id="home" className="mil-banner">
          <div className="mil-animation-frame">
            <div className="mil-animation mil-scale"></div>
          </div>
          <motion.div
            className="mil-banner-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="mil-h1">
              Creative <span className="mil-thin">Portfolio</span>
            </h1>
            <p className="mil-muted mil-mb-60 text-xl">
              We create digital experiences that inspire and engage
            </p>
            <button
              className="mil-button mil-arrow-place"
              onClick={() => scrollToSection('portfolio')}
            >
              View Our Work
            </button>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="mil-section">
          <div className="mil-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="mil-h2">
                  About <span className="mil-thin">CtrlLabs</span>
                </h2>
                <p className="mil-muted mil-mb-30">
                  We are a creative studio focused on delivering exceptional digital experiences. 
                  Our team combines innovation with technical expertise to create solutions that 
                  not only look great but also perform flawlessly.
                </p>
                <p className="mil-muted">
                  From concept to execution, we work closely with our clients to ensure every 
                  project exceeds expectations and delivers measurable results.
                </p>
              </motion.div>
              <motion.div
                className="mil-image-frame"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image 
                  src="/img/photo/1.jpg" 
                  alt="About CtrlLabs" 
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mil-section bg-gray-50">
          <div className="mil-container">
            <motion.div
              className="text-center mil-mb-60"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mil-h2">
                Our <span className="mil-thin">Services</span>
              </h2>
              <p className="mil-muted text-xl">
                Comprehensive solutions for modern digital needs
              </p>
            </motion.div>
            <div className="mil-grid">
              {[
                {
                  title: "Web Design",
                  description: "Beautiful, responsive websites that engage your audience",
                  icon: "🎨"
                },
                {
                  title: "Development",
                  description: "Robust applications built with cutting-edge technologies",
                  icon: "⚡"
                },
                {
                  title: "Branding",
                  description: "Distinctive brand identity that sets you apart",
                  icon: "✨"
                },
                {
                  title: "Digital Marketing",
                  description: "Strategic campaigns that drive growth and engagement",
                  icon: "📈"
                },
                {
                  title: "UI/UX Design",
                  description: "Intuitive interfaces that enhance user experience",
                  icon: "🎯"
                },
                {
                  title: "Consulting",
                  description: "Expert guidance for your digital transformation",
                  icon: "💡"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="mil-h3 mb-4">{service.title}</h3>
                  <p className="mil-muted">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="mil-section">
          <div className="mil-container">
            <motion.div
              className="text-center mil-mb-60"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mil-h2">
                Featured <span className="mil-thin">Work</span>
              </h2>
              <p className="mil-muted text-xl">
                A showcase of our most impactful projects
              </p>
            </motion.div>
            <div className="mil-grid">
              {[
                { title: "Interior Design Studio", category: "Branding", image: "/img/works/1/1.jpg" },
                { title: "Home Security Camera", category: "Product Design", image: "/img/works/2/1.jpg" },
                { title: "Kemia Honest Skincare", category: "Packaging", image: "/img/works/3/1.jpg" },
                { title: "Cascade of Lava", category: "Digital Art", image: "/img/works/4/1.jpg" },
                { title: "Air Pro by Molekule", category: "Product Design", image: "/img/works/5/1.jpg" },
                { title: "Tony&apos;s Chocolonely", category: "Branding", image: "/img/works/6/1.jpg" }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="mil-image-frame"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="mil-zoom-btn">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
                    <h3 className="text-lg font-medium">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="mil-section bg-gray-50">
          <div className="mil-container">
            <motion.div
              className="text-center mil-mb-60"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mil-h2">
                Meet Our <span className="mil-thin">Team</span>
              </h2>
              <p className="mil-muted text-xl">
                Talented professionals passionate about creativity
              </p>
            </motion.div>
            <div className="mil-grid">
              {[
                { name: "Sarah Johnson", role: "Creative Director", image: "/img/faces/1.jpg" },
                { name: "Michael Chen", role: "Lead Developer", image: "/img/faces/2.jpg" },
                { name: "Emma Davis", role: "UI/UX Designer", image: "/img/faces/3.jpg" },
                { name: "Alex Rodriguez", role: "Brand Strategist", image: "/img/faces/4.jpg" },
                { name: "Lisa Thompson", role: "Project Manager", image: "/img/faces/5.jpg" },
                { name: "David Kim", role: "Digital Artist", image: "/img/faces/6.jpg" }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mil-image-frame mil-square mb-6">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mil-h3">{member.name}</h3>
                  <p className="mil-muted">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mil-section">
          <div className="mil-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="mil-h2">
                  Get In <span className="mil-thin">Touch</span>
                </h2>
                <p className="mil-muted mil-mb-30">
                  Ready to start your next project? Let&apos;s discuss how we can help 
                  bring your vision to life.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-orange-500" />
                    <span>hello@ctrllabs.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-orange-500" />
                    <span>+51 174 705 812</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-orange-500" />
                    <span>71 South Los Carneros Road, California</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  ></textarea>
                  <button type="submit" className="mil-button">
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mil-section bg-black text-white">
          <div className="mil-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mil-h2 text-white">
                Ready to bring your <span className="mil-thin">ideas to</span> life? <br />
                We&apos;re <span className="mil-thin">here to help</span>
              </h2>
              <button
                className="mil-button bg-white text-black hover:bg-orange-500 hover:text-white mil-mb-60"
                onClick={() => scrollToSection('contact')}
              >
                Start Your Project
              </button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mil-footer">
          <div className="mil-container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="mil-logo text-white mil-mb-30">CtrlLabs.</div>
                <p className="mil-light-soft mil-mb-30">
                  Creating digital experiences that inspire and engage.
                </p>
                <div className="mil-social-icons">
                  <a href="#"><span>FB</span></a>
                  <a href="#"><span>TW</span></a>
                  <a href="#"><span>IG</span></a>
                  <a href="#"><span>LI</span></a>
                </div>
              </div>
              <div>
                <h6 className="mil-muted mil-up mil-mb-30">Quick Links</h6>
                <ul className="space-y-2">
                  <li><a href="#" className="mil-light-soft hover:text-orange-500">Home</a></li>
                  <li><a href="#" className="mil-light-soft hover:text-orange-500">About</a></li>
                  <li><a href="#" className="mil-light-soft hover:text-orange-500">Services</a></li>
                  <li><a href="#" className="mil-light-soft hover:text-orange-500">Portfolio</a></li>
                </ul>
              </div>
              <div>
                <h6 className="mil-muted mil-up mil-mb-30">Services</h6>
                <ul className="space-y-2">
                  <li><a href="#" className="mil-light-soft hover:text-orange-500">Web Design</a></li>
                  <li><a href="#" className="mil-light-soft hover:text-orange-500">Development</a></li>
                  <li><a href="#" className="mil-light-soft hover:text-orange-500">Branding</a></li>
                  <li><a href="#" className="mil-light-soft hover:text-orange-500">Marketing</a></li>
                </ul>
              </div>
              <div>
                <h6 className="mil-muted mil-up mil-mb-30">Contact</h6>
                <p className="mil-light-soft">71 South Los Carneros Road, California</p>
                <p className="mil-light-soft">+51 174 705 812</p>
                <p className="mil-light-soft">hello@ctrllabs.com</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <p className="mil-light-soft">© Copyright 2024 - CtrlLabs. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
